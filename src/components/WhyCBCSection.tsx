import React from 'react';
import { 
  Users2, 
  CalendarCheck2, 
  Handshake, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface WhyCBCSectionProps {
  onAttendEvent: () => void;
  onPartnerWithUs: () => void;
}

export const WhyCBCSection: React.FC<WhyCBCSectionProps> = ({
  onAttendEvent,
  onPartnerWithUs,
}) => {
  const pillars = [
    {
      id: 'local-knowledge',
      icon: ShieldCheck,
      theme: 'Deep Local Knowledge',
      tagline: 'Grounded in South Sudan',
      description:
        'Unmatched ground-level intelligence, regulatory fluency, and commercial understanding of Juba and South Sudan’s dynamic business environment.',
      focusPoints: [
        'Direct navigation of local regulatory frameworks',
        'Ministries & statutory body liaison',
        'Proven commercial risk mitigation in Juba',
      ],
    },
    {
      id: 'proven-execution',
      icon: CalendarCheck2,
      theme: 'Proven Event Execution',
      tagline: 'High-Stakes Reliability',
      description:
        'Award-winning track record from the landmark Juba Auto Show (2022–2025) to organizing the 7th Global Logistics Convention 2026 at Pyramid Continental.',
      focusPoints: [
        'Turnkey summit production & marketing',
        'Awarded Event Organizer of GLC 2026',
        'End-to-end VIP protocol and stagecraft',
      ],
    },
    {
      id: 'executive-networks',
      icon: Users2,
      theme: 'C-Suite & Institutional Access',
      tagline: 'High-Trust Circles',
      description:
        'Direct bridges to Managing Directors, Bank Executives, Ministerial Leadership, and diplomatic missions across South Sudan and the continent.',
      focusPoints: [
        'Peer-to-peer executive roundtables',
        'Direct access to decision-makers',
        'Cross-sector partnerships across 16 industries',
      ],
    },
    {
      id: 'cross-border-linkages',
      icon: Handshake,
      theme: 'Cross-Border Linkages',
      tagline: 'EAC & Pan-African Reach',
      description:
        'Facilitating strategic trade corridors, joint ventures, and international investment flows across Kenya, Uganda, and the East African Community.',
      focusPoints: [
        'East Africa CEO Investment Forum representation',
        'Regional customs & logistics integration',
        'Inbound investor matching and delegations',
      ],
    },
  ];

  return (
    <section 
      id="why-cbc" 
      className="py-20 lg:py-28 bg-[#f8f9fb] text-slate-900 border-t border-slate-200"
      aria-label="Why Corporate Business Circle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <ShieldCheck className="w-4 h-4 text-[#00aeef]" />
            <span>Strategic Enterprise Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Why Corporate Business Circle
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering tailored corporate solutions with the operational rigor, deep local access, 
            and cross-border linkages required for sustainable enterprise growth in South Sudan.
          </p>
        </div>

        {/* 4 Thematic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-[#00aeef]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Theme Icon */}
                  <div className="w-11 h-11 rounded-lg bg-[#0c1a2e]/5 group-hover:bg-[#00aeef]/10 border border-slate-200 group-hover:border-[#00aeef]/30 flex items-center justify-center text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00aeef]">
                      {pillar.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0c1a2e]">
                      {pillar.theme}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Focus List */}
                <div className="pt-5 mt-5 border-t border-slate-100 space-y-2">
                  {pillar.focusPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Call to Action Banner */}
        <div className="bg-[#0c1a2e] rounded-xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ready to Advance Your Enterprise Footprint?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect with Corporate Business Circle for turnkey corporate events, strategic marketing, 
              institutional proposals, and executive business partnerships.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onPartnerWithUs}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>PARTNER WITH US</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onAttendEvent}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#112239] hover:bg-[#152a47] border border-slate-700 hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center"
            >
              ATTEND AN EVENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
