import React from 'react';
import { CBC_PROFILE } from '../data/mockData';
import { ShieldCheck, Leaf, HeartPulse, X, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

interface EhsPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EhsPolicyModal: React.FC<EhsPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Corporate Business Circle Environmental and Health & Safety Policies"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0c1a2e] text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-800 sticky top-0 z-10">
          <div className="space-y-1.5 pr-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aeef]/15 text-[#00aeef] border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Corporate Compliance & Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Environment, Health & Safety (EHS) Policy
            </h3>
            <p className="text-xs text-slate-300">
              The Corporate Business Circle Co. Ltd • Corporate Sustainability Mandate
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-700 text-sm leading-relaxed">
          {/* Environment Policy Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#0c1a2e] border-b border-slate-200 pb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#0c1a2e]">
                  {CBC_PROFILE.environmentPolicy.title}
                </h4>
                <p className="text-xs text-slate-500">
                  Sustainable practices across operations, event grounds, and corporate supply
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 italic bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100">
              &ldquo;{CBC_PROFILE.environmentPolicy.intro}&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {CBC_PROFILE.environmentPolicy.commitments.map((commitment, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{commitment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health & Safety Policy Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#0c1a2e] border-b border-slate-200 pb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#00aeef] flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#0c1a2e]">
                  {CBC_PROFILE.healthAndSafetyPolicy.title}
                </h4>
                <p className="text-xs text-slate-500">
                  Comprehensive workplace, event staging, and delegation safety protocols
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="text-xs uppercase font-bold text-[#0c1a2e] tracking-wider">
                Official Policy Statement
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {CBC_PROFILE.healthAndSafetyPolicy.statement}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="font-bold text-[#0c1a2e] mb-1">Legal Compliance</div>
                Complying with all national and state EHS laws & regulations across South Sudan.
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="font-bold text-[#0c1a2e] mb-1">Mandatory Training</div>
                Continuous safety preparation for all event crews, catering staff, and suppliers.
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="font-bold text-[#0c1a2e] mb-1">EHS Professionals</div>
                Certified specialists available on-site for large-scale expos, summits, and catering.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Official Corporate Document • The Corporate Business Circle Co. Ltd
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
