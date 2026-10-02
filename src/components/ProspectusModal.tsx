import React from 'react';
import { CBC_CONTACT, MEMBERSHIP_TIERS, KEY_STATS } from '../data/mockData';
import { Logo } from './Logo';
import { 
  X, 
  Download, 
  Printer, 
  CheckCircle, 
  Award, 
  Building2, 
  Crown, 
  ArrowRight,
  Globe2,
  ShieldCheck
} from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyMembership: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onApplyMembership,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-slate-900">
        {/* Modal Controls Header */}
        <div className="sticky top-0 z-20 bg-[#0c1a2e] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" showTagline={false} />
            <div className="text-xs text-slate-300 font-medium pl-3 border-l border-slate-700">
              2026 Executive Prospectus & Corporate Kit
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
              title="Print Prospectus"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close prospectus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prospectus Document View */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Cover Section */}
          <div className="bg-gradient-to-br from-[#0c1a2e] via-[#112239] to-[#0c1a2e] text-white rounded-2xl p-8 sm:p-12 border-2 border-[#c4a35a]/40 shadow-xl text-center space-y-6">
            <div className="inline-block p-4 rounded-full bg-[#152843] border border-[#c4a35a]/50">
              <Crown className="w-12 h-12 text-[#c4a35a] mx-auto" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#c4a35a]">
                Republic of South Sudan • Juba Chapter
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Corporate Business Circle
              </h2>
              <p className="text-base text-slate-300 max-w-xl mx-auto italic font-serif">
                &ldquo;Connecting Leaders. Shaping South Sudan’s Economic Future.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-700/80 text-center">
              {KEY_STATS.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl font-serif font-bold text-[#c4a35a]">{s.value}</div>
                  <div className="text-[11px] text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#0c1a2e] border-b pb-2 border-slate-200">
              1. Institutional Mandate & Strategic Purpose
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Corporate Business Circle (CBC) is South Sudan’s premier executive network. Headquartered in Juba,
              CBC brings together managing directors, board chairs, financial leaders, and international partners
              to advance private sector growth and cross-border trade linkages with the East African Community (EAC).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-xs uppercase text-[#0c1a2e]">Convene</div>
                <p className="text-xs text-slate-600">
                  45+ high-level forums, ministerial breakfasts, and the Annual Business Gala in Juba.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-xs uppercase text-[#0c1a2e]">Advocate</div>
                <p className="text-xs text-slate-600">
                  Unified private sector advocacy on tax, trade tariffs, forex, and infrastructure.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-xs uppercase text-[#0c1a2e]">Connect</div>
                <p className="text-xs text-slate-600">
                  Direct B2B linkages with regional chambers across Nairobi, Kampala, Addis Ababa, and Kigali.
                </p>
              </div>
            </div>
          </div>

          {/* Membership Tiers Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#0c1a2e] border-b pb-2 border-slate-200">
              2. Corporate Membership Structure & Privileges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MEMBERSHIP_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="p-5 rounded-xl border border-slate-200 bg-[#f8f9fb] space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#0c1a2e]">{tier.name}</h4>
                    <span className="font-bold text-sm text-[#c4a35a]">${tier.priceUSD.toLocaleString()} /yr</span>
                  </div>
                  <p className="text-xs text-slate-600">{tier.tagline}</p>
                  <div className="space-y-1.5 pt-1">
                    {tier.keyBenefits.slice(0, 3).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#c4a35a] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secretariat Contact Box */}
          <div className="bg-[#0c1a2e] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-[#c4a35a]">
                CBC Executive Secretariat Juba
              </div>
              <div className="text-sm font-semibold">{CBC_CONTACT.address}</div>
              <div className="text-xs text-slate-300">
                Official Email: {CBC_CONTACT.email} • Tel: {CBC_CONTACT.phonePrimary}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onApplyMembership();
              }}
              className="px-6 py-3 rounded-lg bg-[#c4a35a] hover:bg-[#d6b872] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0"
            >
              <span>Apply for Membership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
