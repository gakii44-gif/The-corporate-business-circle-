import React, { useState } from 'react';
import { CBC_PROFILE, CBC_CONTACT } from '../data/mockData';
import { 
  Building2, 
  Handshake, 
  GraduationCap, 
  Globe2, 
  CheckCircle, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Quote,
  Target,
  Sparkles,
  Calendar,
  Award,
  Leaf,
  HeartPulse,
  Users2,
  Car
} from 'lucide-react';

interface MilestoneHeritage {
  id: string;
  year: string;
  title: string;
  tag: string;
  caption: string;
  stat: string;
  statLabel: string;
}

const JUBA_AUTO_SHOW_MILESTONES: MilestoneHeritage[] = [
  {
    id: 'inception-2022',
    year: '2022',
    title: 'The Juba Auto Show Inception',
    tag: 'Foundational Landmark',
    caption: 'CBC was born in 2022 with the landmark Juba Auto Show, uniting automobile enthusiasts, top car dealerships, and fleet operators in an unprecedented networking showcase.',
    stat: '2022',
    statLabel: 'Origin Year',
  },
  {
    id: 'registration-2023',
    year: '2023',
    title: 'Official Corporate Incorporation',
    tag: 'Legal Registration',
    caption: 'Officially registered on 20th September 2023, Corporate Business Circle spread its wings to serve corporate, diplomatic, and sovereign entities across South Sudan and the East African Community.',
    stat: '20 Sept 2023',
    statLabel: 'Incorporated',
  },
  {
    id: 'commercial-fleet-expansion',
    year: '2024',
    title: 'Commercial Machinery & Fleet Corridors',
    tag: 'B2B Trade Network',
    caption: 'Partnered with prominent commercial machinery and automotive heavyweights (including David Machinery and LTA) to introduce asset financing and regional fleet procurement.',
    stat: '35+',
    statLabel: 'Corporate Partners',
  },
  {
    id: 'convention-excellence',
    year: '2026',
    title: 'Convention Organizer of the Year',
    tag: 'Sovereign Summitry',
    caption: 'Delivered turnkey execution of the 7th Global Logistics Convention 2026, officially recognized as "The Event Organizer of The Global Logistics Convention 2026" at Pyramid Continental Hotel.',
    stat: 'Award Winner',
    statLabel: 'GLC 2026 Organizer',
  },
];

interface AboutProps {
  onOpenMembershipModal: () => void;
  onOpenProspectusModal: () => void;
  onPartnerWithUs?: () => void;
  onOpenEhsModal?: () => void;
}

export const About: React.FC<AboutProps> = ({
  onOpenMembershipModal,
  onOpenProspectusModal,
  onPartnerWithUs,
  onOpenEhsModal,
}) => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const currentMilestone = JUBA_AUTO_SHOW_MILESTONES[activeMilestoneIndex];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f8f9fb] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <ShieldCheck className="w-4 h-4 text-[#00aeef]" />
            <span>About The Corporate Business Circle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            &ldquo;{CBC_PROFILE.slogan}&rdquo;
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {CBC_PROFILE.tagline}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00aeef]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#00aeef]">
              Our Vision
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a2e] leading-snug">
              &ldquo;{CBC_PROFILE.vision}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We empower corporate leaders and institutions with bespoke commercial strategies,
              enabling them to realize their strategic visions and expand their market footprint in South Sudan and Africa.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00aeef]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center">
              <Handshake className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#00aeef]">
              Our Mission
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a2e] leading-snug">
              &ldquo;{CBC_PROFILE.mission}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Serving as an unshakeable institutional bridge, we link corporate companies, public sector bodies,
              and cross-border partners through enduring trust, accountability, and high-performance execution.
            </p>
          </div>
        </div>

        {/* 5 Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00aeef]">
              Guiding Principles
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a2e]">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              &ldquo;We serve with Honesty, creativity, sustainability, Accountability and Humility.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CBC_PROFILE.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#00aeef] shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0c1a2e] text-[#00aeef] mx-auto flex items-center justify-center font-serif font-bold text-sm group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-bold text-base text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Background & Registration Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#0c1a2e] text-white">
              {/* Active Milestone Card */}
              <div className="relative p-6 sm:p-8 min-h-[360px] flex flex-col justify-between bg-gradient-to-br from-[#0c1a2e] via-[#091629] to-[#060e1b]">
                {/* Background Ambience Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00aeef]/10 blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#112239] border border-[#00aeef]/50 text-[#00aeef] text-xs font-bold uppercase tracking-wider">
                      <Car className="w-3.5 h-3.5 text-[#00aeef]" />
                      <span>{currentMilestone.tag}</span>
                    </span>

                    <span className="text-2xl font-serif font-bold text-[#00aeef]">
                      {currentMilestone.year}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                    {currentMilestone.title}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {currentMilestone.caption}
                  </p>
                </div>

                {/* Key Stat / Anchor Callout */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {currentMilestone.statLabel}
                    </span>
                    <span className="text-lg font-serif font-bold text-white mt-0.5 block">
                      {currentMilestone.stat}
                    </span>
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    Milestone {activeMilestoneIndex + 1} of {JUBA_AUTO_SHOW_MILESTONES.length}
                  </span>
                </div>
              </div>

              {/* Interactive Timeline Tabs */}
              <div className="p-3 bg-[#081220] border-t border-slate-800 grid grid-cols-4 gap-2">
                {JUBA_AUTO_SHOW_MILESTONES.map((m, idx) => {
                  const isActive = idx === activeMilestoneIndex;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveMilestoneIndex(idx)}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        isActive 
                          ? 'bg-[#112239] border-[#00aeef] text-white shadow-md' 
                          : 'bg-[#0a1526]/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className={`block text-xs font-bold font-mono ${isActive ? 'text-[#00aeef]' : 'text-slate-400'}`}>
                        {m.year}
                      </span>
                      <span className="block text-[10px] font-medium truncate mt-0.5">
                        {m.tag.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Official Registration Badge */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-[#0c1a2e] text-white p-4 sm:p-5 rounded-xl border-2 border-[#00aeef] shadow-xl max-w-[210px] z-20">
              <div className="text-xs uppercase font-bold text-[#00aeef] tracking-wider">Officially Registered</div>
              <div className="text-base sm:text-lg font-serif font-bold text-white mt-1">20th Sept 2023</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Spreading our wings to serve corporates legally</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
                <Calendar className="w-4 h-4" />
                <span>Our Heritage & Journey</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a2e]">
                Surrounded by a Circle of Great Minds
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Corporate Business Circle started in <strong>2022</strong> with the <strong>Juba Auto Show</strong>,
                an event that brings auto lovers and auto dealers to one experience of networking and business-to-business interactions.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Officially registered on the <strong>20th of September 2023</strong>, CBC spreads its wings to serve corporate entities
                legally across South Sudan and Africa. As our slogan states, <em>&ldquo;The Cycle of Great Minds&rdquo;</em>, we harness
                collective corporate intellect, market know-how, and disciplined execution to ensure our clients are thoroughly attended to.
              </p>
            </div>

            {/* Corporate Policy & Environmental Commitment Callout */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0c1a2e]">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>Environment & Safety Stewardship</span>
                </div>
                {onOpenEhsModal && (
                  <button
                    onClick={onOpenEhsModal}
                    className="text-xs font-bold text-[#00aeef] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read EHS Policy</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                CBC upholds rigorous standards in material and energy waste minimization, recycling, and workplace Health & Safety (EHS) compliance across all corporate projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProspectusModal}
                className="px-5 py-3 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#00aeef]" />
                <span>Company Profile & Deck</span>
              </button>
              
              <button
                onClick={onOpenMembershipModal}
                className="px-5 py-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Secretariat Message Box */}
        <div className="bg-[#0c1a2e] text-white rounded-2xl p-8 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00aeef]/20 text-[#00aeef] text-xs font-bold uppercase tracking-wider">
              {CBC_PROFILE.name}
            </div>
            <p className="text-base sm:text-lg text-slate-200 font-serif italic leading-relaxed">
              &ldquo;We use our experience in dealing with Corporate Companies to ensure that we provide
              tailor-made Business Solutions that enable companies to achieve both their short-term and long-term visions.
              As our slogan states, &lsquo;The Cycle of Great Minds&rsquo;, we are surrounded by great minds dedicated to elevating
              business success across South Sudan and beyond.&rdquo;
            </p>
            <div className="pt-2">
              <div className="font-bold text-white text-sm">Executive Secretariat</div>
              <div className="text-xs text-[#00aeef]">{CBC_CONTACT.address} • {CBC_CONTACT.whatsappFormatted}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
