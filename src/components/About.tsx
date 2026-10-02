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
  Camera,
  Car
} from 'lucide-react';

const JUBA_AUTO_SHOW_PHOTOS = [
  {
    id: 'organizers-2nd-edition',
    url: '/assets/juba-autoshow/autoshow-organizers-2nd-edition.jpg',
    title: 'Welcome to the 2nd Edition of Juba Auto Show',
    tag: 'Organizers & Sponsors',
    caption: 'Official 2nd Edition stage banner with organizers, sponsor delegates (LTA, David Machinery, Liquid, Capital FM, Bros), and partners in Juba.',
  },
  {
    id: 'street-convoy',
    url: '/assets/juba-autoshow/autoshow-street-convoy.jpg',
    title: 'Juba Auto Show City Motorcade Convoy',
    tag: 'Street Parade',
    caption: 'Custom lifted matte-black Jeep Wrangler, high-performance buggy UTV, and muscle car convoy rolling through Juba.',
  },
  {
    id: 'courtyard-exhibition',
    url: '/assets/juba-autoshow/autoshow-courtyard-exhibition.jpg',
    title: 'Exotic Vehicles & Supercars Showcase',
    tag: 'Courtyard Display',
    caption: 'Dodge Challenger, lifted off-road Jeep, and buggy display under South Sudan flags at the exhibition venue.',
  },
  {
    id: 'blue-jeep',
    url: '/assets/juba-autoshow/autoshow-blue-jeep.jpg',
    title: 'Custom Lifted 4x4 Off-Road Feature',
    tag: 'Lifted 4x4 Showcase',
    caption: 'Custom lifted electric-blue Jeep 4x4 with off-road suspension on the official outdoor showcase grounds.',
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
  const [activeAutoShowIndex, setActiveAutoShowIndex] = useState(0);
  const currentAutoShowPhoto = JUBA_AUTO_SHOW_PHOTOS[activeAutoShowIndex];

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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              {/* Active Juba Auto Show Photograph */}
              <div className="relative h-[360px] sm:h-[420px] w-full overflow-hidden">
                <img
                  src={currentAutoShowPhoto.url}
                  alt={currentAutoShowPhoto.title}
                  className="w-full h-full object-cover transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/95 via-[#0c1a2e]/25 to-transparent"></div>

                {/* Top Badge: Juba Auto Show Inception */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c1a2e]/90 border border-[#00aeef]/60 text-[#00aeef] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow">
                    <Car className="w-3.5 h-3.5 text-[#00aeef]" />
                    <span>Juba Auto Show (Founded in 2022)</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-white text-[11px] font-mono backdrop-blur-md">
                    <Camera className="w-3 h-3 text-[#00aeef]" />
                    <span>{activeAutoShowIndex + 1} / {JUBA_AUTO_SHOW_PHOTOS.length}</span>
                  </span>
                </div>
                
                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 sm:p-4 bg-[#0c1a2e]/90 backdrop-blur-md rounded-xl border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#00aeef] font-bold">
                      Inception Landmark • {currentAutoShowPhoto.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Click thumbnails below</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white leading-snug">
                    {currentAutoShowPhoto.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {currentAutoShowPhoto.caption}
                  </p>
                </div>
              </div>

              {/* 4 Interactive Thumbnail Strip */}
              <div className="p-3 bg-[#0a1526] border-t border-slate-800 grid grid-cols-4 gap-2">
                {JUBA_AUTO_SHOW_PHOTOS.map((photo, idx) => {
                  const isActive = idx === activeAutoShowIndex;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActiveAutoShowIndex(idx)}
                      className={`group relative rounded-lg overflow-hidden border-2 text-left transition-all ${
                        isActive 
                          ? 'border-[#00aeef] ring-2 ring-[#00aeef]/40 scale-[1.02]' 
                          : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`View ${photo.title}`}
                    >
                      <div className="h-14 sm:h-16 w-full relative">
                        <img
                          src={photo.url}
                          alt={photo.tag}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-[#00aeef]/10' : 'bg-black/30'}`} />
                      </div>
                      <div className="p-1 bg-[#0c1a2e] text-center">
                        <span className={`block text-[9px] sm:text-[10px] font-semibold truncate ${isActive ? 'text-[#00aeef]' : 'text-slate-400'}`}>
                          {photo.tag}
                        </span>
                      </div>
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
