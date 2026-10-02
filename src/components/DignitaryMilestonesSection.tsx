import React, { useState } from 'react';
import { CBC_DIGNITARY_MILESTONES, DignitaryMilestone } from '../data/mockData';
import { 
  Landmark, 
  MapPin, 
  Building, 
  Sparkles, 
  Maximize2, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Award,
  Users,
  Upload,
  Shield
} from 'lucide-react';
import { DignitaryPhotoDisplay } from './DignitaryPhotoDisplay';
import { getDignitaryPhotoUrl } from '../utils/dignitaryPhotos';

interface DignitaryMilestonesSectionProps {
  onOpenLightbox?: (photoUrl: string, title: string) => void;
  onNavigateToEvents?: () => void;
  onNavigateToContact?: () => void;
}

export const DignitaryMilestonesSection: React.FC<DignitaryMilestonesSectionProps> = ({
  onOpenLightbox,
  onNavigateToEvents,
  onNavigateToContact,
}) => {
  const [selectedMilestone, setSelectedMilestone] = useState<DignitaryMilestone>(
    CBC_DIGNITARY_MILESTONES[1] // Default to #2: Mandela Nelson with Hon Allah Jabu
  );

  const getSlotKey = (id: string) => {
    return id.replace('cbc-team-', '').replace('mandela-nelson-', '');
  };

  return (
    <section 
      id="dignitary-milestones" 
      className="py-20 lg:py-28 bg-[#060d18] text-white relative overflow-hidden border-t border-slate-800"
      aria-label="Executive Dignitary & Statesmen Engagements"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081222] via-[#060d18] to-[#0a1628] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 -ml-40 w-96 h-96 rounded-full bg-[#00aeef]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 -mr-40 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#112239] border border-slate-700 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            <Landmark className="w-4 h-4 text-[#00aeef]" />
            <span>High-Level Leadership & Sovereign Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Institutional Audiences & Civic Milestones
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Historic photographic archive of high-level state audiences, municipal infrastructure presentations, 
            and nationwide FinTech launches led by Corporate Business Circle executives in Juba, South Sudan.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-[#0f1d33] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Main Stage Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] bg-slate-900 overflow-hidden">
              <DignitaryPhotoDisplay
                slotKey={getSlotKey(selectedMilestone.id)}
                title={selectedMilestone.title}
                order={selectedMilestone.order}
                badge={selectedMilestone.categoryBadge}
                onOpenLightbox={onOpenLightbox}
              />
            </div>

            {/* Content & Narrative */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#00aeef] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Documentation</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                  {selectedMilestone.title}
                </h3>

                {/* Exact User Description Callout */}
                <div className="p-4 rounded-xl bg-[#162740] border-l-4 border-[#00aeef] text-slate-200 text-sm font-medium leading-relaxed italic">
                  &ldquo;{selectedMilestone.officialDescription}&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedMilestone.historicalSignificance}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#0c1a2e]/80 border border-slate-800 text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Dignitary / Key Figure</span>
                    <span className="text-white font-semibold mt-0.5 block">{selectedMilestone.personage}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0c1a2e]/80 border border-slate-800 text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Location & Context</span>
                    <span className="text-white font-semibold mt-0.5 block">{selectedMilestone.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#events"
                  onClick={onNavigateToEvents}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Completed Summits</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  onClick={onNavigateToContact}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#162740] hover:bg-[#1f375a] border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center"
                >
                  Contact Secretariat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Photo Cards Grid in Order */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              The 4 Archival Executive Photos &amp; Descriptions (In Order)
            </h4>
            <span className="text-xs text-[#00aeef]">Click any photo to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CBC_DIGNITARY_MILESTONES.map((milestone) => {
              const isSelected = selectedMilestone.id === milestone.id;
              return (
                <div
                  key={milestone.id}
                  onClick={() => setSelectedMilestone(milestone)}
                  className={`bg-[#0f1d33] rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col group ${
                    isSelected
                      ? 'border-[#00aeef] ring-2 ring-[#00aeef]/40 shadow-xl translate-y-[-2px]'
                      : 'border-slate-800 hover:border-slate-700 hover:shadow-lg'
                  }`}
                >
                  {/* Photo Card Image */}
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <DignitaryPhotoDisplay
                      slotKey={getSlotKey(milestone.id)}
                      title={milestone.title}
                      order={milestone.order}
                      badge={milestone.categoryBadge}
                      onOpenLightbox={onOpenLightbox}
                      className="min-h-[192px] rounded-none border-0"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h5 className="text-sm font-serif font-bold text-white group-hover:text-[#00aeef] transition-colors leading-snug">
                        {milestone.title}
                      </h5>
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {milestone.officialDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="truncate">{milestone.personage}</span>
                      <span className={`font-bold ${isSelected ? 'text-[#00aeef]' : 'text-slate-500'}`}>
                        {isSelected ? 'Viewing' : 'Select →'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
