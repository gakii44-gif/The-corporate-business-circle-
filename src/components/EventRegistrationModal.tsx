import React, { useState } from 'react';
import { EventItem } from '../types';
import { CBC_CONTACT } from '../data/mockData';
import { 
  X, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Users, 
  Building, 
  Ticket,
  Clock,
  Download
} from 'lucide-react';

interface EventRegistrationModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !event) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    delegatesCount: 1,
    membershipStatus: 'Non-Member / Prospective Member',
    dietaryRequirements: '',
    specialNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formId = import.meta.env.VITE_FORMSPREE_REGISTRATION_FORM_ID;

    if (formId && formId !== 'your_registration_form_id') {
      try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `Event RSVP: ${event.title} - ${formData.fullName} (${formData.company})`,
            eventId: event.id,
            eventTitle: event.title,
            eventDate: event.date,
            eventVenue: event.venue,
            ...formData,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to submit registration. Please contact the Secretariat.');
        }
      } catch (err) {
        setErrorMessage('Network error. Please email us directly at ' + CBC_CONTACT.email);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Local fallback simulation
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    }
  };

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Corporate Business Circle//Juba South Sudan//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, ' ')}
LOCATION:${event.venue}, Juba, South Sudan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header Banner */}
        <div className="bg-[#0c1a2e] text-white p-6 rounded-t-2xl relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 max-w-lg">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a35a] bg-[#152843] px-2.5 py-0.5 rounded border border-[#c4a35a]/40">
              {event.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#c4a35a]" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#c4a35a]" />
                {event.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#c4a35a]" />
                {event.venue}, Juba
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-[#0c1a2e]">
                  Delegate Registration Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your delegate pass request for{' '}
                  <strong>{event.title}</strong> has been registered with the CBC Secretariat.
                  An official entry pass and protocol agenda have been routed to{' '}
                  <span className="text-[#0c1a2e] font-semibold">{formData.email}</span>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
                <div>
                  <span className="font-bold text-[#0c1a2e]">Venue:</span> {event.venue}, Juba
                </div>
                <div>
                  <span className="font-bold text-[#0c1a2e]">Date & Time:</span> {event.date} ({event.time})
                </div>
                <div>
                  <span className="font-bold text-[#0c1a2e]">Delegates:</span> {formData.delegatesCount} Person(s)
                </div>
                <div>
                  <span className="font-bold text-[#0c1a2e]">Secretariat Inquiries:</span> {CBC_CONTACT.email}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDownloadCalendar}
                  className="px-5 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#c4a35a]" />
                  <span>Download Calendar (.ics)</span>
                </button>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#f8f9fb] p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Delegate Fee: </span>
                  <span className="font-bold text-[#0c1a2e]">{event.fee}</span>
                </div>
                <div className="text-emerald-600 font-semibold flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>{event.seatsLeft} Passes Remaining</span>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Delegate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Deng"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. s.deng@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nile Petroleum Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Job Title / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Managing Director"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +211 920 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                    Number of Delegates
                  </label>
                  <select
                    value={formData.delegatesCount}
                    onChange={(e) => setFormData({ ...formData, delegatesCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                  >
                    {[1, 2, 3, 4, 5, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Delegate Pass' : 'Delegates (Group)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                  CBC Membership Status
                </label>
                <select
                  value={formData.membershipStatus}
                  onChange={(e) => setFormData({ ...formData, membershipStatus: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                >
                  <option value="Non-Member / Prospective Member">Non-Member / Prospective Member</option>
                  <option value="Associate SME Circle Member">Associate SME Circle Member (Complimentary Pass)</option>
                  <option value="Corporate Enterprise Member">Corporate Enterprise Member (Complimentary Pass)</option>
                  <option value="Executive & Diplomatic Member">Executive & Diplomatic Member (VIP Pass)</option>
                  <option value="Founding Patron">Founding Patron (VIP Protocol)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#0c1a2e] uppercase">
                  Dietary or Executive Protocol Preferences (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Halal, Vegetarian, VIP seating request..."
                  value={formData.dietaryRequirements}
                  onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c4a35a]/50 focus:border-[#c4a35a]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#c4a35a] hover:bg-[#d6b872] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering with Secretariat...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm & Transmit Registration</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
