import React, { useState } from 'react';
import { CBC_CONTACT } from '../data/mockData';
import { 
  X, 
  Handshake, 
  CheckCircle2, 
  Building2, 
  Send, 
  ShieldCheck,
  Briefcase,
  Users
} from 'lucide-react';
import { MembershipTier } from '../types';

interface MembershipModalProps {
  initialTier?: MembershipTier | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [partnershipType, setPartnershipType] = useState('Summit & Corporate Events');
  const [formData, setFormData] = useState({
    companyName: '',
    sector: 'Banking, FinTech & Financial Services',
    primaryContactName: '',
    primaryContactTitle: '',
    officialEmail: '',
    phone: '',
    strategicObjectives: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const partnershipOptions = [
    {
      id: 'summit-events',
      label: 'Summit & Corporate Events',
      description: 'Turnkey summit production, conference management & marketing',
    },
    {
      id: 'strategic-marketing',
      label: 'Strategic Marketing & PR',
      description: 'Brand activation, media relations, outdoor & digital reach',
    },
    {
      id: 'media-production',
      label: 'Media Production & Content',
      description: 'Executive photography, videography & corporate documentaries',
    },
    {
      id: 'government-relations',
      label: 'Institutional Proposals & Tenders',
      description: 'High-stakes proposal formulation & public-private sector liaison',
    },
  ];

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
            _subject: `Corporate Partnership Application: ${partnershipType} - ${formData.companyName}`,
            partnershipType,
            ...formData,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to submit application. Please contact the Secretariat directly.');
        }
      } catch (err) {
        setErrorMessage('Network error. Please contact us at ' + CBC_CONTACT.email);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 600);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="bg-[#0c1a2e] text-white p-6 sm:p-7 rounded-t-xl relative border-b border-slate-700">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1.5 max-w-md">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00aeef] bg-[#112239] px-2.5 py-0.5 rounded border border-slate-700 inline-flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5" />
              Strategic Partnership Intake
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Partner With Corporate Business Circle
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Direct institutional collaboration for enterprises and public organizations in South Sudan.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-[#0c1a2e]">
                  Dossier Received by Executive Secretariat
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.primaryContactName}</strong>. Your corporate partnership inquiry for{' '}
                  <strong>{formData.companyName}</strong> has been transmitted to our executive secretariat team. A Secretariat officer will reach out via{' '}
                  <span className="text-[#0c1a2e] font-semibold">{formData.officialEmail}</span> within 24 business hours.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
                <div>
                  <span className="font-bold text-[#0c1a2e]">Focus Area:</span> {partnershipType}
                </div>
                <div>
                  <span className="font-bold text-[#0c1a2e]">Secretariat Inquiries:</span> {CBC_CONTACT.email}
                </div>
                <div>
                  <span className="font-bold text-[#0c1a2e]">Direct Phone / WhatsApp:</span> {CBC_CONTACT.whatsappFormatted}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Partnership Focus Selector */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                  Select Focus of Engagement *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {partnershipOptions.map((opt) => {
                    const isSelected = opt.label === partnershipType;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setPartnershipType(opt.label)}
                        className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#0c1a2e] text-white border-[#00aeef] shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        <div className="text-xs font-bold font-serif">{opt.label}</div>
                        <div className={`text-[10px] mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {opt.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {errorMessage}
                </div>
              )}

              {/* Organization Details */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1">
                  1. Organization Profile
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nile Commercial Consortium Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Industry Sector *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    >
                      <option value="Banking & Financial Services">Banking, FinTech & Financial Services</option>
                      <option value="Energy, Oil & Renewables">Energy, Petroleum & Solar Power</option>
                      <option value="Agribusiness & Agro-Processing">Agribusiness & Grain Storage</option>
                      <option value="Construction & Real Estate">Construction & Infrastructure</option>
                      <option value="Logistics & EAC Trade">Logistics, Freight & Aviation</option>
                      <option value="Telecoms & Digital Infrastructure">Telecoms & Technology Services</option>
                      <option value="Diplomatic Mission / DFI">Diplomatic Mission / Development Agency</option>
                      <option value="Other Corporate Sector">Other Corporate Sector</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Representative Details */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1">
                  2. Executive Contact Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Representative Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Deng Ladu"
                      value={formData.primaryContactName}
                      onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Director / Corporate Affairs"
                      value={formData.primaryContactTitle}
                      onChange={(e) => setFormData({ ...formData, primaryContactTitle: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. d.ladu@enterprise.com"
                      value={formData.officialEmail}
                      onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
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
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Objectives */}
              <div className="space-y-1 pt-1">
                <label className="block text-[11px] font-bold text-[#0c1a2e] uppercase tracking-wider">
                  Collaboration Objectives / Project Outline (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key targets, prospective event dates, or areas of collaboration..."
                  value={formData.strategicObjectives}
                  onChange={(e) => setFormData({ ...formData, strategicObjectives: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef]"
                ></textarea>
              </div>

              {/* Submit Action */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidential executive correspondence</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT PROPOSAL</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
