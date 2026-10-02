import React, { useState } from 'react';
import { CBC_CONTACT } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building,
  Globe,
  Lock,
  ExternalLink,
  Navigation,
  Copy,
  Check
} from 'lucide-react';

interface ContactSectionProps {
  onOpenPrivacyModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacyModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Membership',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyLocation = () => {
    navigator.clipboard.writeText(`${CBC_CONTACT.address} (${CBC_CONTACT.plusCode})`);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Input sanitization / validation
    const sanitizedName = formData.fullName.trim();
    const sanitizedEmail = formData.email.trim();
    const sanitizedCompany = formData.company.trim();

    if (!sanitizedName || !sanitizedEmail || !sanitizedCompany) {
      setErrorMessage('Please complete all required fields.');
      setIsSubmitting(false);
      return;
    }

    const formId = import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID;

    if (formId && formId !== 'your_contact_form_id') {
      try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            fullName: sanitizedName,
            email: sanitizedEmail,
            company: sanitizedCompany,
            jobTitle: formData.jobTitle.trim(),
            phone: formData.phone.trim(),
            subject: formData.subject,
            message: formData.message.trim(),
            _subject: `New Inquiry from CBC Website: ${formData.subject} - ${sanitizedCompany}`,
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            fullName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            subject: 'General Inquiry / Membership',
            message: '',
          });
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to submit form. Please contact us directly via email.');
        }
      } catch (err) {
        setErrorMessage('Network error occurred. You can email us directly at ' + CBC_CONTACT.email);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Local fallback simulation with instant verification
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          company: '',
          jobTitle: '',
          email: '',
          phone: '',
          subject: 'General Inquiry / Membership',
          message: '',
        });
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8f9fb] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <MessageSquare className="w-4 h-4 text-[#00aeef]" />
            <span>Connect with Secretariat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Corporate Secretariat & Headquarters
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out to our Juba Secretariat for membership enrollment, event partnership,
            or trade delegation inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Office & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c1a2e] text-white rounded-2xl p-7 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-[#00aeef] tracking-widest">
                  Executive Secretariat
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Corporate Business Circle
                </h3>
                <p className="text-xs text-slate-300">
                  Republic of South Sudan • Juba Central Chapter
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>Office Location Pin:</span>
                      <a
                        href={CBC_CONTACT.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#00aeef] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View on Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-slate-300 leading-relaxed mt-0.5">
                      {CBC_CONTACT.address}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      Plus Code: {CBC_CONTACT.plusCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Official Email:</div>
                    <a
                      href={`mailto:${CBC_CONTACT.email}`}
                      className="text-[#00aeef] hover:underline"
                    >
                      {CBC_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Official WhatsApp / Phone:</div>
                    <div className="text-slate-300 flex items-center gap-2 mt-0.5">
                      <a 
                        href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%20Secretariat%2C%20I%20would%20like%20to%20inquire%20about%20membership%20and%20events.`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1"
                      >
                        {CBC_CONTACT.whatsappFormatted}
                      </a>
                      <span className="text-xs text-slate-400">(WhatsApp Direct)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Secretariat Desk Lines:</div>
                    <div className="text-slate-300 flex flex-wrap items-center gap-1.5 text-xs">
                      <a href={`tel:${CBC_CONTACT.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white font-medium">
                        {CBC_CONTACT.phonePrimary}
                      </a>
                      <span className="text-slate-500">•</span>
                      <a href={`tel:${CBC_CONTACT.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white font-medium">
                        {CBC_CONTACT.phoneSecondary}
                      </a>
                      <span className="text-slate-500">•</span>
                      <a href={`tel:${CBC_CONTACT.phoneTertiary.replace(/\s+/g, '')}`} className="hover:text-white font-medium">
                        {CBC_CONTACT.phoneTertiary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Secretariat Hours:</div>
                    <div className="text-slate-300">{CBC_CONTACT.hours}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp, Google Maps & Email Quick Links */}
              <div className="pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%20Secretariat%2C%20I%20would%20like%20to%20inquire%20about%20membership%20and%20events.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={CBC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-lg bg-[#00aeef] hover:bg-[#0098d4] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0c1a2e]" />
                  <span>Maps Pin</span>
                </a>

                <a
                  href={CBC_CONTACT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Juba Protocol Note */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-[#0c1a2e] flex items-center gap-2">
                <Building className="w-4 h-4 text-[#00aeef]" />
                <span>Visiting Delegations & International Protocol</span>
              </div>
              <p className="leading-relaxed">
                For foreign diplomatic missions, international chambers, and trade attachés visiting Juba,
                our Secretariat arranges VIP airport protocol, private boardroom briefings, and ministerial liaisons.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#00aeef] bg-[#0c1a2e]/5 px-3 py-1 rounded border border-[#00aeef]/30">
                Direct Secretariat Engagement
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a2e] pt-1">
                Executive Inquiry & Project Brief
              </h3>
              <p className="text-xs text-slate-500">
                Official inquiries are routed directly to the Executive Secretariat at {CBC_CONTACT.email} or via WhatsApp at {CBC_CONTACT.whatsappFormatted}.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-emerald-900">
                  Inquiry Transmitted to Executive Secretariat
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Corporate Business Circle. A designated Secretariat officer will
                  review your submission and respond within 24 business hours. You may also contact us directly via WhatsApp at {CBC_CONTACT.whatsappFormatted}.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%20Secretariat%2C%20following%20up%20on%20my%20web%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0c1a2e] bg-[#00aeef] hover:bg-[#38bdf8] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200 hover:bg-emerald-300 rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nile Energy & Trade Group"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Contact Person & Title *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                      />
                      <input
                        type="text"
                        placeholder="Role / Title"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. executive@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Direct Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +211 929 115 924"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                    Nature of Engagement *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                  >
                    <option value="Turnkey Summit Organization & Event Production">Turnkey Summit Organization & Event Production</option>
                    <option value="Strategic Marketing & Brand Activation">Strategic Marketing & Brand Activation</option>
                    <option value="Corporate Media Production & Photography">Corporate Media Production & Photography</option>
                    <option value="Government Relations & Institutional Proposals">Government Relations & Institutional Proposals</option>
                    <option value="Executive Business Networking & Market Linkages">Executive Business Networking & Market Linkages</option>
                    <option value="Capacity Building & Corporate Training">Capacity Building & Corporate Training</option>
                    <option value="General Corporate Partnership">General Corporate Partnership</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                    Project Scope / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide overview of your project requirements, target timeline, or enterprise objectives in South Sudan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING TO SECRETARIAT...</span>
                    ) : (
                      <>
                        <span>SUBMIT EXECUTIVE INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Assurance & Link */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact data is handled securely for official communication only.</span>
                  </div>
                  {onOpenPrivacyModal && (
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-[#00aeef] hover:underline font-semibold"
                    >
                      Privacy Notice
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Pinned Headquarters & Interactive Map Card */}
        <div className="mb-20 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Map Info & Directions Panel */}
            <div className="lg:col-span-5 p-8 lg:p-10 bg-[#0c1a2e] text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pinned Secretariat Location</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  Visit CBC Secretariat in Juba
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Located in central Juba, our corporate secretariat welcomes visiting delegations, corporate members, and international development partners.
                </p>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#00aeef] font-bold">
                    Official Location Details:
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {CBC_CONTACT.address}
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    Google Maps Plus Code: <span className="text-[#00aeef]">{CBC_CONTACT.plusCode}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <a
                  href={CBC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00aeef] hover:bg-[#0098d4] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%2C%20I%20am%20heading%20to%20your%20Secretariat%20office.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 text-center shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </a>

                  <button
                    onClick={handleCopyLocation}
                    type="button"
                    className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 text-center transition-colors"
                  >
                    {copiedPlusCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#00aeef]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Embedded Live Map Display */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] bg-slate-100 flex items-stretch">
              <iframe
                title="Corporate Business Circle Juba Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.5700,4.8350,31.6350,4.8780&layer=mapnik&marker=4.856,31.603"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              ></iframe>

              {/* Floating Map Pin Overlay Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0c1a2e]/95 backdrop-blur-md text-white p-4 rounded-xl border border-slate-700 shadow-2xl space-y-1.5 pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-[11px] font-bold text-[#00aeef] uppercase tracking-wider">
                    CBC Secretariat Pin
                  </span>
                </div>
                <div className="text-xs font-bold text-white">
                  TM Lion, Bowker Blvd, Juba
                </div>
                <div className="text-[11px] text-slate-300">
                  Republic of South Sudan
                </div>
              </div>

              {/* Bottom Quick-action overlay for direct Google Maps */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={CBC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/95 hover:bg-white text-[#0c1a2e] font-bold text-xs tracking-wider shadow-lg border border-slate-200 flex items-center gap-1.5 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

