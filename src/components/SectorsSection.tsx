import React, { useState } from 'react';
import { SECTORS } from '../data/mockData';
import { SectorItem } from '../types';
import { 
  Building2, 
  Zap, 
  Wheat, 
  Hotel, 
  Truck, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

interface SectorsSectionProps {
  onOpenMembershipModal: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenMembershipModal }) => {
  const [selectedSector, setSelectedSector] = useState<SectorItem>(SECTORS[0]);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return Building2;
      case 'Zap':
        return Zap;
      case 'Wheat':
        return Wheat;
      case 'Hotel':
        return Hotel;
      case 'Truck':
        return Truck;
      case 'Cpu':
        return Cpu;
      default:
        return Building2;
    }
  };

  return (
    <section id="sectors" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#c4a35a]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Layers className="w-4 h-4 text-[#c4a35a]" />
            <span>South Sudan Growth Frontiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Key Economic Sectors & Working Groups
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CBC convenes specialized industry working committees to analyze regulatory trends,
            unblock cross-border trade friction, and connect international syndicates with domestic projects in Juba.
          </p>
        </div>

        {/* Interactive 2-Column Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sector Buttons List */}
          <div className="lg:col-span-5 space-y-3">
            {SECTORS.map((sector) => {
              const Icon = getIcon(sector.iconName);
              const isSelected = selectedSector.id === sector.id;

              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0c1a2e] text-white border-[#c4a35a] shadow-lg translate-x-1'
                      : 'bg-[#f8f9fb] hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#c4a35a] text-[#0c1a2e]'
                          : 'bg-white text-slate-700 group-hover:text-[#0c1a2e] border border-slate-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold leading-tight">
                        {sector.name}
                      </h4>
                      <span
                        className={`text-[11px] font-medium ${
                          isSelected ? 'text-[#c4a35a]' : 'text-slate-500'
                        }`}
                      >
                        {sector.growthRate}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-[#c4a35a] translate-x-1'
                        : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Sector Deep-Dive Card */}
          <div className="lg:col-span-7 bg-[#0c1a2e] text-white rounded-2xl p-8 sm:p-10 border border-[#c4a35a]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4a35a]/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/80">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a35a] bg-[#152843] px-2.5 py-1 rounded border border-[#c4a35a]/40">
                    CBC Industry Committee Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white pt-1">
                    {selectedSector.name}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{selectedSector.growthRate}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedSector.description}
              </p>

              {/* Opportunities List */}
              <div className="space-y-3 bg-[#112239] rounded-xl p-5 border border-slate-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#c4a35a] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Investment & Matchmaking Verticals
                </h4>
                <div className="space-y-2">
                  {selectedSector.opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#c4a35a] flex-shrink-0 mt-0.5" />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secretariat Note */}
              <div className="text-xs text-slate-400 border-l-2 border-[#c4a35a] pl-3 py-1 italic">
                {selectedSector.keyHighlights}
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenMembershipModal}
                  className="px-6 py-3 rounded-lg bg-[#c4a35a] hover:bg-[#d6b872] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Join this Sector Committee</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
