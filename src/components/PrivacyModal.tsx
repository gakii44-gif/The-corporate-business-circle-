import React from 'react';
import { X, ShieldCheck, Lock, Mail, CheckCircle2, EyeOff, FileText } from 'lucide-react';
import { CBC_CONTACT } from '../data/mockData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="bg-[#0c1a2e] text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close privacy policy window"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#00aeef] text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy & Data Protection Notice</span>
          </div>

          <h3 id="privacy-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-white">
            Data Handling & Privacy Commitment
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Corporate Business Circle Secretariat • Juba, South Sudan
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#0c1a2e] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00aeef]"></span>
              1. Information We Collect
            </h4>
            <p>
              When you register for an event, apply for corporate membership, or submit an inquiry through this website, 
              we collect only the necessary information to process your request:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Full Name and Professional Title</li>
              <li>Company / Organization Name</li>
              <li>Corporate Email Address and Telephone / WhatsApp Number</li>
              <li>Event delegate requirements or membership preferences</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#0c1a2e] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00aeef]"></span>
              2. Purpose of Collection
            </h4>
            <p>
              Your personal and corporate data is utilized solely by the CBC Secretariat for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Issuing event entry credentials, invitations, and calendar updates.</li>
              <li>Processing membership applications and onboarding corporate delegates.</li>
              <li>Responding to official inquiries and providing secretariat communications.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#0c1a2e] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00aeef]"></span>
              3. Data Security & Storage Practices
            </h4>
            <p>
              We adhere to strict privacy-by-design principles:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>We do not sell, rent, or trade your contact information with third parties or advertisers.</li>
              <li>We do not store unencrypted personal information in public browser storage.</li>
              <li>All web traffic is transmitted via encrypted HTTPS.</li>
              <li>We do not employ third-party advertising tracking or behavioral profiling cookies.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#0c1a2e] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00aeef]"></span>
              4. Your Rights & Data Contact
            </h4>
            <p>
              You may request access to, correction of, or deletion of your contact records at any time by contacting 
              the Corporate Business Circle Secretariat:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 mt-2">
              <div className="font-bold text-[#0c1a2e]">CBC Secretariat Data Privacy Officer</div>
              <div>Email: <a href={`mailto:${CBC_CONTACT.email}`} className="text-[#00aeef] font-semibold underline">{CBC_CONTACT.email}</a></div>
              <div>Phone / WhatsApp: {CBC_CONTACT.phonePrimary}</div>
              <div>Address: {CBC_CONTACT.address}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
