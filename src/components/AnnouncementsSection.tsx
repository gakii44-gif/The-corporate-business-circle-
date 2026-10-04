import React, { useState } from 'react';
import { 
  Radio, 
  Volume2, 
  Sparkles, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Gift, 
  Tag, 
  Play, 
  Pause, 
  ExternalLink, 
  ShieldCheck, 
  Flame,
  Printer,
  Building2,
  X,
  Share2,
  Check,
  AlertTriangle,
  Zap,
  Timer,
  Filter
} from 'lucide-react';
import { CBC_CONTACT } from '../data/mockData';

export type UrgencyBadgeType = 'Urgent' | 'Limited Time' | 'New' | 'Hot Deal';

export interface UrgencyBadgeConfig {
  label: UrgencyBadgeType;
  subtext?: string;
  variant: 'urgent' | 'limited' | 'new' | 'hot';
  expiresIn?: string;
  spotsLeft?: number;
}

export interface OfferItem {
  id: string;
  badge: string;
  urgencyBadge: UrgencyBadgeConfig;
  title: string;
  partnerName: string;
  partnerLogo?: string;
  category: 'Broadcast & Media' | 'Printing & Design' | 'Executive Chamber';
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  keyTerms: string;
  contactPhones: string[];
  contactEmail: string;
  location: string;
  expiryNote: string;
  isFeatured?: boolean;
}

export const ANNOUNCEMENTS_DATA: OfferItem[] = [
  {
    id: 'capital-fm-free-month',
    badge: 'Exclusive Broadcast Airtime Allocation',
    urgencyBadge: {
      label: 'Urgent',
      variant: 'urgent',
      subtext: 'High Demand • Limited Production Slots',
      expiresIn: 'Only 7 Studio Slots Remaining',
      spotsLeft: 7,
    },
    title: 'One Month Free Advert Campaign on 89.0 Capital FM',
    partnerName: '89.0 Capital FM ("The Rhythm of South Sudan")',
    partnerLogo: '/assets/client-logos/capital-fm.png',
    category: 'Broadcast & Media',
    tagline: 'Get 120 Free Advertising Spots, 60 DJ Mentions & a 1-Hour Live Radio Talkshow Across Juba!',
    description: 'Capital FM 89.0 ("The Rhythm of South Sudan") is launching an extraordinary one-month free promotional advertising campaign. Designed for business owners, corporate brands, NGOs, government departments, and institutions looking to amplify their reach across Juba and Central Equatoria.',
    image: '/assets/announcements/capital-fm-free-advert.jpg',
    highlights: [
      'Four (4) Prime Advertising Slots Daily for One Full Month (120 Free Airtime Slots)',
      'Two (2) Live On-Air DJ & Presenter Mentions Daily during peak listenership',
      'One (1) Full-Hour Interactive Radio Talkshow to tell your story and promote services live',
      'Client Pays ONLY for Jingle Production — 100% Free Airtime Campaign'
    ],
    keyTerms: 'Client pays only for professional jingle/audio commercial production. Airtime and broadcast talkshow are completely free for 30 consecutive days.',
    contactPhones: ['+211 984 809 801', '+211 990 424 177', '+211 917 772 927'],
    contactEmail: '89.0capitalfm@gmail.com',
    location: 'Munuki, behind Trinity Petrol Station, St. Kizito, Juba, South Sudan',
    expiryNote: 'Promotional slots allocated on a first-come, first-served basis for this edition.',
    isFeatured: true,
  },
  {
    id: 'cbc-print-stage-render-bundle',
    badge: 'CBC Creative Print Shop Perk',
    urgencyBadge: {
      label: 'New',
      variant: 'new',
      subtext: 'Just Released for 2026 Summit Season',
      expiresIn: 'Freshly Added Corporate Perk',
    },
    title: 'Complimentary 3D Stage Staging with Conference Print Packages',
    partnerName: 'Corporate Business Circle (CBC Creative Team)',
    category: 'Printing & Design',
    tagline: 'Order 50+ Event Roll-Up Banners or 2,500+ Programs & Receive a Free 3D Stage Mockup',
    description: 'Planning a high-level summit or corporate gala in Juba? Secure your event printing bundle (roll-up banners, stage backdrops, delegate credentials, and programs) with CBC and receive a photorealistic 3D stage and trade booth render at no additional cost.',
    image: '/assets/gallery/glc-2026-stage-branding.jpg',
    highlights: [
      'Photorealistic 3D architectural stage layout render for your venue committee',
      'Priority 24-hour turnaround for emergency summit reprint additions',
      'CMYK color calibration matching exact enterprise branding guidelines',
      'Complimentary delivery across Juba metropolitan event hotels'
    ],
    keyTerms: 'Applicable on commercial event print orders exceeding $2,500 USD or 50+ display banners.',
    contactPhones: ['+211 922 666 050', '+211 984 809 801'],
    contactEmail: 'Info@corporatebusinesscircle.com',
    location: 'Ministries Road & Custom Area, Juba, South Sudan',
    expiryNote: 'Available throughout the 2026 Corporate Summit Season.',
    isFeatured: false,
  },
  {
    id: 'cbc-chamber-b2b-desk',
    badge: 'Chamber Enterprise Perk',
    urgencyBadge: {
      label: 'Limited Time',
      variant: 'limited',
      subtext: '60-Day Cohort Window Active',
      expiresIn: 'Closes End of Q4 2026',
    },
    title: 'Complimentary B2B Trade Facilitation Desk for Capital FM Advertisers',
    partnerName: 'CBC Executive Chamber & Trade Secretariat',
    category: 'Executive Chamber',
    tagline: 'Turn Radio Exposure into Direct Institutional Contracts & Ministerial Access',
    description: 'Enterprises participating in the 89.0 Capital FM broadcast campaign receive complimentary consultation with the CBC Trade Secretariat, including introductions to corporate procurement managers and trade corridor partners.',
    image: '/assets/gallery/courtesy-visit-handshake.jpg',
    highlights: [
      'Curated introductions to 40+ leading South Sudanese corporate members',
      'Feature listing on the CBC Verified Partner Directory',
      'Invitations to upcoming ministerial roundtables and breakfast forums',
      'Consultation on South Sudan corporate compliance and regional trade'
    ],
    keyTerms: 'Complimentary 60-day facilitation access for all active radio advertising partners.',
    contactPhones: ['+211 922 666 050'],
    contactEmail: 'Info@corporatebusinesscircle.com',
    location: 'Pyramid Continental & Juba City Secretariat',
    expiryNote: 'Active throughout Q3 & Q4 2026.',
    isFeatured: false,
  },
  {
    id: 'juba-autoshow-early-bird-booth',
    badge: 'Automotive Festival Exhibition Special',
    urgencyBadge: {
      label: 'Limited Time',
      variant: 'limited',
      subtext: 'Early-Bird Exhibition Allocation',
      expiresIn: 'Only 3 Pavilion Spaces Left',
      spotsLeft: 3,
    },
    title: 'Priority Courtyard Pavilion Booking for The Juba Auto Show 2026',
    partnerName: 'CBC Automotive Council & Juba Auto Show Secretariat',
    category: 'Executive Chamber',
    tagline: 'Reserve Outdoor Display Pitch & Receive Complimentary Radio Feature on 89.0 Capital FM',
    description: 'Exhibitors securing corporate pavilion spaces for the upcoming Juba Auto Show receive priority courtyard vehicular spots plus two complimentary on-air commercial previews on Capital FM 89.0.',
    image: '/assets/juba-autoshow/autoshow-courtyard-exhibition.jpg',
    highlights: [
      'Prime interlocking paving exhibition pitch for up to 4 showroom vehicles',
      'VIP passes to the Executive Inception Gala Dinner at Pyramid Continental',
      'Two (2) complimentary on-air radio promotional spots before show kickoff',
      'Inclusion in the official Juba Auto Show print magazine program'
    ],
    keyTerms: 'Early registration rate reserved for verified automotive dealerships and equipment distributors.',
    contactPhones: ['+211 922 666 050', '+211 984 809 801'],
    contactEmail: 'Info@corporatebusinesscircle.com',
    location: 'Pyramid Continental Hotel Grounds & Ministries Road, Juba',
    expiryNote: 'Early-bird allocation closes once 3 remaining pavilions are confirmed.',
    isFeatured: false,
  },
];

// Reusable visual badge component with distinct color, icon, and pulsing beacon
export const UrgencyBadge: React.FC<{
  config: UrgencyBadgeConfig;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  className?: string;
}> = ({ config, size = 'md', showSubtext = false, className = '' }) => {
  const { label, subtext, variant, expiresIn } = config;

  if (variant === 'urgent') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-md border font-black uppercase tracking-wider shadow transition-all ${
          size === 'xs'
            ? 'px-1.5 py-0.5 text-[9px]'
            : size === 'sm'
            ? 'px-2 py-0.5 text-[10px]'
            : size === 'lg'
            ? 'px-3.5 py-1.5 text-xs'
            : 'px-2.5 py-1 text-[11px]'
        } bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white border-red-300/80 shadow-red-950/60 ${className}`}
        title={`${label} Offer: ${subtext || expiresIn || ''}`}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-90"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
        </span>
        <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-200 shrink-0" />
        <span>{label}</span>
        {showSubtext && (expiresIn || subtext) && (
          <span className="normal-case font-semibold text-red-100 border-l border-red-300/40 pl-1.5 ml-0.5 hidden sm:inline">
            {expiresIn || subtext}
          </span>
        )}
      </span>
    );
  }

  if (variant === 'limited') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-md border font-black uppercase tracking-wider shadow transition-all ${
          size === 'xs'
            ? 'px-1.5 py-0.5 text-[9px]'
            : size === 'sm'
            ? 'px-2 py-0.5 text-[10px]'
            : size === 'lg'
            ? 'px-3.5 py-1.5 text-xs'
            : 'px-2.5 py-1 text-[11px]'
        } bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 border-amber-200 shadow-amber-950/60 ${className}`}
        title={`${label} Offer: ${subtext || expiresIn || ''}`}
      >
        <Clock className="w-3.5 h-3.5 text-slate-950 shrink-0" />
        <span>{label}</span>
        {showSubtext && (expiresIn || subtext) && (
          <span className="normal-case font-bold text-slate-900 border-l border-amber-700/40 pl-1.5 ml-0.5 hidden sm:inline">
            {expiresIn || subtext}
          </span>
        )}
      </span>
    );
  }

  // 'new' variant
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-black uppercase tracking-wider shadow transition-all ${
        size === 'xs'
          ? 'px-1.5 py-0.5 text-[9px]'
          : size === 'sm'
          ? 'px-2 py-0.5 text-[10px]'
          : size === 'lg'
          ? 'px-3.5 py-1.5 text-xs'
          : 'px-2.5 py-1 text-[11px]'
      } bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-slate-950 border-emerald-200 shadow-emerald-950/60 ${className}`}
      title={`${label} Offer: ${subtext || expiresIn || ''}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
      <span>{label}</span>
      {showSubtext && (expiresIn || subtext) && (
        <span className="normal-case font-bold text-slate-900 border-l border-emerald-700/40 pl-1.5 ml-0.5 hidden sm:inline">
          {expiresIn || subtext}
        </span>
      )}
    </span>
  );
};

interface AnnouncementsSectionProps {
  onOpenContact?: () => void;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({
  onOpenContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);
  const [isAudioSimPlaying, setIsAudioSimPlaying] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [claimSuccess, setClaimSuccess] = useState<boolean>(false);

  // Quick Lead Form states for Claiming Offer
  const [claimForm, setClaimForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    hasJingle: 'Need Jingle Production',
    notes: ''
  });

  const categories = ['All', 'Broadcast & Media', 'Printing & Design', 'Executive Chamber'];
  const urgencyBadgesList = ['All', 'Urgent', 'Limited Time', 'New'];

  const filteredOffers = ANNOUNCEMENTS_DATA.filter((item) => {
    const categoryMatches = activeCategory === 'All' || item.category === activeCategory;
    const statusMatches = statusFilter === 'All' || item.urgencyBadge.label === statusFilter;
    return categoryMatches && statusMatches;
  });

  const featuredOffer = ANNOUNCEMENTS_DATA.find((o) => o.id === 'capital-fm-free-month') || ANNOUNCEMENTS_DATA[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimSuccess(true);
    setTimeout(() => {
      setClaimSuccess(false);
      setSelectedOffer(null);
      setClaimForm({
        businessName: '',
        contactPerson: '',
        phone: '',
        hasJingle: 'Need Jingle Production',
        notes: ''
      });
    }, 3500);
  };

  return (
    <section 
      id="announcements" 
      className="py-20 lg:py-28 bg-[#071324] text-white relative overflow-hidden border-t border-slate-800"
      aria-label="Announcements and Special Offers"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071324] via-[#0a1b33] to-[#071324] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 -ml-40 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 -mr-40 w-96 h-96 rounded-full bg-[#00aeef]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-xs font-bold uppercase tracking-wider text-red-400">
            <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>Broadcast Notices & Commercial Perks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Announcements & Special Offers
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Discover verified commercial promotions, radio airtime campaigns, and turnkey executive perks 
            convened through Corporate Business Circle and South Sudan media partners.
          </p>
        </div>

        {/* HERO SPECIAL OFFER FEATURE: 89.0 CAPITAL FM ONE MONTH FREE ADVERT CAMPAIGN */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-[#120509] via-[#1a0a14] to-[#0c1324] border-2 border-red-500/50 shadow-2xl overflow-hidden relative group">
          {/* Subtle pulsating glow badge */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* High-Impact Visual Urgency Announcement Banner */}
          <div className="bg-gradient-to-r from-red-950 via-rose-950/80 to-[#0e1729] px-5 py-3 border-b border-red-500/40 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <UrgencyBadge config={featuredOffer.urgencyBadge} size="sm" showSubtext />
              <span className="text-white font-bold hidden sm:inline">{featuredOffer.urgencyBadge.subtext}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{featuredOffer.urgencyBadge.expiresIn}</span>
              </div>
              <div className="hidden md:flex items-center gap-2 pl-3 border-l border-red-800/60 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Applications Open to Registered Enterprises</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Visual Poster & Station Mockup */}
            <div className="lg:col-span-5 relative bg-gradient-to-br from-black to-[#1a0005] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-red-900/40">
              
              {/* Station Badge Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center p-1.5 shadow-md">
                    <Radio className="w-6 h-6 text-red-500 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">89.0 CAPITAL FM</h4>
                    <span className="text-[10px] text-red-400 font-semibold tracking-wide">The Rhythm of South Sudan</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <UrgencyBadge config={featuredOffer.urgencyBadge} size="xs" />
                </div>
              </div>

              {/* Promotional Graphic Display with overlay badge */}
              <div 
                className="relative rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl bg-black group/poster cursor-pointer my-2"
                onClick={() => setSelectedOffer(featuredOffer)}
              >
                <img
                  src={featuredOffer.image}
                  alt={featuredOffer.title}
                  className="w-full h-auto max-h-[380px] object-cover transition-transform duration-700 group-hover/poster:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                {/* Top overlay urgency badge on poster */}
                <div className="absolute top-3 left-3 z-10">
                  <UrgencyBadge config={featuredOffer.urgencyBadge} size="sm" showSubtext />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 z-10">
                  <span className="font-bold text-red-300 truncate">1 Month Free Airtime Package</span>
                  <span className="text-white bg-red-600/90 hover:bg-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors shrink-0">
                    Click to View Full Poster
                  </span>
                </div>
              </div>

              {/* Broadcast Audio Commercial Soundbite Preview */}
              <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-red-800/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAudioSimPlaying(!isAudioSimPlaying)}
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 shrink-0"
                    title={isAudioSimPlaying ? 'Pause Audio Commercial' : 'Listen to Commercial Script Announcement'}
                  >
                    {isAudioSimPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-red-400" />
                      <span>On-Air Commercial Soundbite</span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      {isAudioSimPlaying ? 'Playing: "Are you a business owner or company in South Sudan?..."' : 'Click to hear the official Capital FM broadcast announcement'}
                    </p>
                  </div>
                </div>

                {isAudioSimPlaying && (
                  <div className="flex items-end gap-1 h-5 shrink-0">
                    <span className="w-1 bg-red-500 rounded-full animate-bounce h-5"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce delay-75 h-3"></span>
                    <span className="w-1 bg-red-400 rounded-full animate-bounce delay-150 h-4"></span>
                    <span className="w-1 bg-amber-300 rounded-full animate-bounce delay-100 h-2"></span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Offer Details & Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Header Tagline & Visual Urgency Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <UrgencyBadge config={featuredOffer.urgencyBadge} size="md" showSubtext />
                  <span className="px-3 py-1 rounded-md bg-red-600/20 text-red-300 border border-red-500/40 text-[11px] font-black uppercase tracking-wider">
                    FREE AIRTIME CAMPAIGN
                  </span>
                  <span className="text-xs text-slate-400">
                    Broadcast Coverage: <strong className="text-white">Juba & Central Equatoria (89.0 MHz)</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-white leading-tight">
                  One Month Free Advert Campaign
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Are you a business owner, company, organization, department, agency, institution, or individual looking for a powerful way to reach your customers and the general public across South Sudan?
                  <strong className="text-amber-300 block mt-1">This is your golden opportunity. Capital FM is offering 1 full month of free advertising airtime!</strong>
                </p>

                {/* 4 Pillars of the Offer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  
                  <div className="p-3.5 rounded-xl bg-black/40 border border-red-900/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider">4 Slots Daily</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        120 prime advertising spot airings across the 30-day month.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-red-900/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Radio className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider">2 DJ Mentions Daily</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        60 live on-air presenter shoutouts during high-traffic shows.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-red-900/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider">1 Live Radio Talkshow</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        One full-hour live studio feature to tell your brand story and pitch services.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Gift className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-amber-300 uppercase tracking-wider">Zero Airtime Fee</h5>
                      <p className="text-[11px] text-slate-200 mt-0.5 font-medium">
                        Client pays ONLY for professional jingle audio production!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Location & Contact Matrix */}
                <div className="p-4 rounded-xl bg-[#091524] border border-slate-700/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-[#00aeef] shrink-0" />
                    <span><strong>Studio Location:</strong> Munuki, behind Trinity Petrol Station, St. Kizito, Juba</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-slate-800 text-slate-300">
                    <span className="font-semibold text-white">Call Studio Hotlines:</span>
                    {featuredOffer.contactPhones.map((ph) => (
                      <button
                        key={ph}
                        type="button"
                        onClick={() => handleCopy(ph)}
                        className="px-2.5 py-1 rounded bg-[#0c1a2e] hover:bg-[#142845] border border-slate-700 text-slate-200 hover:text-white font-mono text-[11px] transition-colors flex items-center gap-1.5"
                        title="Click to copy phone number"
                      >
                        <Phone className="w-3 h-3 text-red-400" />
                        <span>{ph}</span>
                        {copiedPhone === ph && <Check className="w-3 h-3 text-emerald-400" />}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-slate-400 text-[11px]">
                    <Mail className="w-3.5 h-3.5 text-[#00aeef]" />
                    <span>Official Email: <strong className="text-slate-200">{featuredOffer.contactEmail}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOffer(featuredOffer)}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-red-600/30 hover:scale-105"
                >
                  <Gift className="w-4 h-4" />
                  <span>Claim One Month Free Campaign</span>
                </button>

                <a
                  href={`https://wa.me/211984809801?text=Hello%2089.0%20Capital%20FM%20team%2C%20I%20am%20interested%20in%20claiming%20the%20One%20Month%20Free%20Advert%20Campaign%20offer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 89.0 Capital FM</span>
                </a>

                <a
                  href={`tel:0984809801`}
                  className="px-4 py-3 rounded-xl bg-[#112239] hover:bg-[#1a3456] text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call 0984 809 801</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation for Other Offers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                All Active Announcements & Partner Offers
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#102238] border border-slate-700 text-slate-300 text-xs font-bold">
                {filteredOffers.length} {filteredOffers.length === 1 ? 'Offer' : 'Offers'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Filter by urgency status badge (Urgent, Limited Time, New) or commercial industry category.
            </p>
          </div>

          {/* Dual Filtering: Urgency Badges & Categories */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Status Badges Filter */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#091729] border border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold uppercase px-2 hidden sm:inline">Status:</span>
              {urgencyBadgesList.map((badgeName) => {
                const isActive = statusFilter === badgeName;
                return (
                  <button
                    key={badgeName}
                    type="button"
                    onClick={() => setStatusFilter(badgeName)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                      isActive
                        ? badgeName === 'Urgent'
                          ? 'bg-red-600 text-white shadow'
                          : badgeName === 'Limited Time'
                          ? 'bg-amber-500 text-slate-950 shadow'
                          : badgeName === 'New'
                          ? 'bg-emerald-500 text-slate-950 shadow'
                          : 'bg-[#00aeef] text-[#0c1a2e] shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {badgeName === 'Urgent' && <Flame className="w-3 h-3 fill-current text-amber-200" />}
                    {badgeName === 'Limited Time' && <Clock className="w-3 h-3" />}
                    {badgeName === 'New' && <Sparkles className="w-3 h-3" />}
                    <span>{badgeName}</span>
                  </button>
                );
              })}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#00aeef] text-[#0c1a2e] shadow-sm font-black'
                      : 'bg-[#102238] text-slate-300 hover:bg-[#152e4d] hover:text-white border border-slate-700/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => {
            const isCapital = offer.id === 'capital-fm-free-month';

            return (
              <div
                key={offer.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                  isCapital
                    ? 'bg-gradient-to-b from-[#140508] via-[#101b2e] to-[#081220] border-red-500/50 shadow-lg'
                    : 'bg-[#0a182c] border-slate-800 hover:border-[#00aeef]/60 shadow-md'
                }`}
              >
                <div>
                  {/* Card Image Banner */}
                  <div 
                    className="relative h-48 w-full overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => setSelectedOffer(offer)}
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/40 to-transparent"></div>

                    {/* Top Badges: Visual Urgency Badge + Category */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
                      <UrgencyBadge config={offer.urgencyBadge} size="sm" showSubtext={false} />

                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                        isCapital
                          ? 'bg-red-600/90 text-white border-red-400/50'
                          : 'bg-[#0c1a2e]/90 text-[#00aeef] border-[#00aeef]/40'
                      }`}>
                        {offer.category}
                      </span>
                    </div>

                    <div className="absolute bottom-10 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] truncate font-semibold">
                      {offer.partnerName}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5">
                    <div>
                      {/* Urgency Announcement Subtext Ribbon */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 ${
                          offer.urgencyBadge.variant === 'urgent'
                            ? 'text-rose-400'
                            : offer.urgencyBadge.variant === 'limited'
                            ? 'text-amber-400'
                            : 'text-emerald-400'
                        }`}>
                          {offer.urgencyBadge.variant === 'urgent' && <Flame className="w-3 h-3 fill-current" />}
                          {offer.urgencyBadge.variant === 'limited' && <Clock className="w-3 h-3" />}
                          {offer.urgencyBadge.variant === 'new' && <Sparkles className="w-3 h-3" />}
                          <span>{offer.urgencyBadge.label}</span>
                          <span className="text-slate-500 font-normal">•</span>
                          <span className="text-slate-300 font-medium normal-case">{offer.urgencyBadge.subtext}</span>
                        </span>
                      </div>

                      <h4 className="text-base font-serif font-bold text-white group-hover:text-[#00aeef] transition-colors leading-snug">
                        {offer.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {offer.tagline}
                      </p>
                    </div>

                    {/* Urgent/Limited Expiry Warning Ribbon */}
                    {offer.urgencyBadge.expiresIn && (
                      <div className={`p-2 rounded-lg border text-[11px] font-semibold flex items-center justify-between gap-2 ${
                        offer.urgencyBadge.variant === 'urgent'
                          ? 'bg-red-950/40 border-red-800/60 text-red-200'
                          : offer.urgencyBadge.variant === 'limited'
                          ? 'bg-amber-950/40 border-amber-800/60 text-amber-200'
                          : 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                      }`}>
                        <div className="flex items-center gap-1.5">
                          {offer.urgencyBadge.variant === 'urgent' && <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                          {offer.urgencyBadge.variant === 'limited' && <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          {offer.urgencyBadge.variant === 'new' && <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          <span>{offer.urgencyBadge.expiresIn}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider underline">
                          Lock In
                        </span>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {offer.highlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Terms Callout */}
                    <div className="p-2.5 rounded-xl bg-black/40 border border-slate-700/60 text-[11px] text-slate-300 leading-snug">
                      <strong className="text-amber-300 block mb-0.5">Special Terms:</strong>
                      {offer.keyTerms}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedOffer(offer)}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <span>Inspect Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${isCapital ? '211984809801' : CBC_CONTACT.whatsapp}?text=Hello%2C%20I%20am%20inquiring%20about%20the%20offer%3A%20${encodeURIComponent(offer.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DETAILED CLAIM / INQUIRY MODAL */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in overflow-y-auto"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0c1a2e] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#081322]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center">
                  <Radio className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <UrgencyBadge config={selectedOffer.urgencyBadge} size="xs" showSubtext />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {selectedOffer.category}
                    </span>
                    <span className="text-[10px] text-slate-400">• Verified Commercial Partner</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {selectedOffer.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Full Image Banner */}
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-md max-h-72 bg-black flex items-center justify-center">
                <img
                  src={selectedOffer.image}
                  alt={selectedOffer.title}
                  className="max-h-72 w-auto object-contain mx-auto"
                />
              </div>

              {/* Offer Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
                  {selectedOffer.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedOffer.description}
                </p>
              </div>

              {/* Package Breakdown Checklist */}
              <div className="p-4 rounded-xl bg-[#071322] border border-slate-800 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef]" />
                  <span>Package Benefits & Broadcast Allocation:</span>
                </div>
                <div className="space-y-2">
                  {selectedOffer.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studio & Redemption Info */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-transparent border border-red-900/50 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-red-300">
                  <MapPin className="w-4 h-4" />
                  <span>Studio & Redemption Headquarters:</span>
                </div>
                <p className="text-slate-200">
                  {selectedOffer.location}
                </p>
                <div className="pt-2 border-t border-red-900/30 flex flex-wrap gap-2 text-slate-300">
                  <span>Hotlines: </span>
                  {selectedOffer.contactPhones.map((p) => (
                    <strong key={p} className="text-white font-mono">{p}</strong>
                  ))}
                </div>
              </div>

              {/* Urgency Status Notice */}
              <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                selectedOffer.urgencyBadge.variant === 'urgent'
                  ? 'bg-red-950/60 border-red-600/60 text-red-200'
                  : selectedOffer.urgencyBadge.variant === 'limited'
                  ? 'bg-amber-950/60 border-amber-500/60 text-amber-200'
                  : 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  {selectedOffer.urgencyBadge.variant === 'urgent' && <Flame className="w-4 h-4 text-red-400 animate-pulse shrink-0" />}
                  {selectedOffer.urgencyBadge.variant === 'limited' && <Clock className="w-4 h-4 text-amber-400 shrink-0" />}
                  {selectedOffer.urgencyBadge.variant === 'new' && <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />}
                  <div>
                    <span className="font-bold uppercase tracking-wide mr-1.5">
                      {selectedOffer.urgencyBadge.label} Alert:
                    </span>
                    <span>{selectedOffer.urgencyBadge.subtext}. {selectedOffer.urgencyBadge.expiresIn}</span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 shrink-0 hidden sm:inline">
                  Active Allocation
                </span>
              </div>

              {/* Quick Claim / Express Form */}
              <div className="p-4 rounded-xl bg-[#091729] border border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Express Claim & Slot Registration:
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    Instant Notification to Capital FM
                  </span>
                </div>

                {claimSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 text-xs text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                    <div className="font-bold text-sm">Offer Inquiry Received!</div>
                    <p>89.0 Capital FM & CBC have logged your registration. A representative will contact you immediately.</p>
                  </div>
                ) : (
                  <form onSubmit={handleClaimSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-semibold text-slate-400 block mb-1">Company / Brand Name *</label>
                        <input
                          type="text"
                          required
                          value={claimForm.businessName}
                          onChange={(e) => setClaimForm({ ...claimForm, businessName: e.target.value })}
                          placeholder="e.g. Trinity Energy, Zain, Supermarket"
                          className="w-full px-3 py-2 rounded-lg bg-[#071322] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00aeef]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-slate-400 block mb-1">Your Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={claimForm.phone}
                          onChange={(e) => setClaimForm({ ...claimForm, phone: e.target.value })}
                          placeholder="e.g. +211 922 000 000"
                          className="w-full px-3 py-2 rounded-lg bg-[#071322] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00aeef]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 block mb-1">Do You Currently Have an Audio Jingle?</label>
                      <select
                        value={claimForm.hasJingle}
                        onChange={(e) => setClaimForm({ ...claimForm, hasJingle: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#071322] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00aeef]"
                      >
                        <option value="Need Jingle Production">I need 89.0 Capital FM / CBC to produce my jingle</option>
                        <option value="Have Ready Jingle">I already have a ready audio jingle (WAV/MP3)</option>
                        <option value="Want Radio Talkshow Only">Interested primarily in the 1-Hour Radio Talkshow</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Gift className="w-4 h-4" />
                      <span>Submit Claim for One Month Free Airtime</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-slate-800 bg-[#081322] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Direct Studio: <strong className="text-white">Munuki, behind Trinity Petrol Station, Juba</strong>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/211984809801?text=Hello%2089.0%20Capital%20FM%2C%20I%20would%20like%20to%20claim%20the%20One%20Month%20Free%20Advert%20Campaign.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Capital FM</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedOffer(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
