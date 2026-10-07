import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Building, 
  CheckCircle2, 
  Handshake, 
  Landmark,
  Shield,
  Upload
} from 'lucide-react';
import { KEY_STATS, CBC_DIGNITARY_MILESTONES } from '../data/mockData';
import { DignitaryPhotoDisplay } from './DignitaryPhotoDisplay';
import { getDignitaryPhotoUrl, hasDignitaryPhoto } from '../utils/dignitaryPhotos';
import { EventItem } from '../types';

interface HeroProps {
  onOpenMembershipModal: () => void;
  onOpenEventRegistration: (event: EventItem) => void;
  onNavigateToEvents: () => void;
  onNavigateToAbout: () => void;
  onNavigateToMilestones?: () => void;
  onOpenLightbox?: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMembershipModal,
  onOpenEventRegistration,
  onNavigateToEvents,
  onNavigateToAbout,
  onNavigateToMilestones,
  onOpenLightbox,
}) => {
  // Default to index 1: "Mandela Nelson with the former Major of Juba City Hon Allah Jabu" (the 2nd photo as requested)
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(1);
  const activeMilestone = CBC_DIGNITARY_MILESTONES[activeMilestoneIndex] || CBC_DIGNITARY_MILESTONES[1];

  const getSlotKey = (id: string) => {
    if (id.includes('taban-deng-gai')) return 'taban-deng-gai';
    if (id.includes('allah-jabu')) return 'allah-jabu';
    if (id.includes('mgurush')) return 'mgurush-launch';
    if (id.includes('wani-igga')) return 'wani-igga';
    return id.replace('cbc-team-', '').replace('mandela-nelson-', '');
  };

  return (
    <section
      id="hero"
      className="relative pt-8 sm:pt-12 lg:pt-16 pb-16 lg:pb-24 bg-[#081222] text-white overflow-hidden border-b border-slate-800"
      aria-label="Corporate Business Circle Hero"
    >
      {/* Subtle Premium Background Depth: Soft gradient, no distracting dot grids */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#081222] to-[#0c1a2e] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#00aeef]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-950/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112239] border border-slate-700/80 text-xs font-semibold tracking-wider text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef]"></span>
              <span className="text-[#00aeef] font-bold uppercase tracking-widest text-[11px]">THE CYCLE OF GREAT MINDS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Tailored Corporate Solutions <br />
              <span className="text-[#00aeef] italic font-normal">For Enterprises</span> in South Sudan & Africa.
            </h1>

            {/* Concise Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We connect businesses with strategic solutions, marketing opportunities, events and partnerships across South Sudan and Africa.
            </p>

            {/* Standardized CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenMembershipModal}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#112239] hover:bg-[#152a47] border border-slate-700 hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Handshake className="w-4 h-4 text-[#00aeef]" />
                <span>PARTNER WITH US</span>
              </button>
            </div>

            {/* Verified Trust Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Tailored Business Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>B2B Market Access & Linkages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Headquartered in Juba, South Sudan</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Dignitary & Milestone Featured Card (Replaced Main Photo with 2nd Photo) */}
          <div className="lg:col-span-5">
            <div className="bg-[#112239] rounded-xl border border-slate-700/80 shadow-xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00aeef]"></div>

              {/* Main Photo Banner: DignitaryPhotoDisplay handles authentic uploaded photos with zero AI photos */}
              <div className="relative h-60 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 overflow-hidden rounded-t-xl">
                <DignitaryPhotoDisplay
                  slotKey={getSlotKey(activeMilestone.id)}
                  title={activeMilestone.title}
                  order={activeMilestone.order}
                  badge={activeMilestone.categoryBadge}
                  onOpenLightbox={onOpenLightbox}
                />
              </div>

              {/* Dignitary Milestone Title & Official Description */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug mb-1.5">
                {activeMilestone.title}
              </h3>
              
              <p className="text-xs text-slate-300 mb-3 line-clamp-2 leading-relaxed">
                {activeMilestone.officialDescription}
              </p>

              {/* Location & Institution Meta */}
              <div className="space-y-1.5 bg-[#0c1a2e]/90 rounded-lg p-3 border border-slate-800 text-xs text-slate-300 mb-3.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00aeef] flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{activeMilestone.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{activeMilestone.organization}</span>
                </div>
              </div>

              {/* 4 Dignitary Photos Quick Switcher */}
              <div className="mb-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                  <span>Executive Dignitary Photo Archive:</span>
                  <span className="text-[#00aeef]">Click to preview</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {CBC_DIGNITARY_MILESTONES.map((milestone, idx) => {
                    const slotKey = getSlotKey(milestone.id);
                    const photoUrl = getDignitaryPhotoUrl(slotKey);
                    return (
                      <button
                        key={milestone.id}
                        onClick={() => setActiveMilestoneIndex(idx)}
                        className={`relative rounded-md overflow-hidden border-2 transition-all p-0.5 group ${
                          activeMilestoneIndex === idx
                            ? 'border-[#00aeef] ring-2 ring-[#00aeef]/30 scale-[1.03]'
                            : 'border-slate-700 opacity-70 hover:opacity-100 hover:border-slate-500'
                        }`}
                        title={milestone.officialDescription}
                      >
                        {photoUrl ? (
                          <img
                            src={photoUrl}
                            alt={milestone.title}
                            className="w-full h-11 object-cover rounded-[2px]"
                            loading="eager"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/assets/gallery/courtesy-visit-handshake.jpg';
                            }}
                          />
                        ) : (
                          <div className="w-full h-11 bg-[#091527] flex flex-col items-center justify-center p-1 rounded-[2px]">
                            <Shield className="w-3.5 h-3.5 text-[#00aeef]/80" />
                            <span className="text-[8px] font-bold text-slate-300">#{milestone.order}</span>
                          </div>
                        )}
                        <span className="absolute bottom-0.5 right-0.5 px-1 rounded bg-black/80 text-[8px] font-bold text-white leading-none">
                          #{milestone.order}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href="#dignitary-milestones"
                  className="w-full py-2.5 rounded-md bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>VIEW ALL 4 DIGNITARY ENGAGEMENTS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#gallery"
                  className="w-full py-2 rounded-md bg-[#162740] hover:bg-[#1c3252] border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore High-Resolution Gallery Archive</span>
                </a>

                <button
                  onClick={onNavigateToEvents}
                  className="w-full py-1 text-center text-xs text-slate-400 hover:text-white transition-colors"
                >
                  View Concluded Events (GLC, Auto Show & Forums) →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Impact Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {KEY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#00aeef]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white">{stat.label}</div>
              <div className="text-[11px] text-slate-400">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
