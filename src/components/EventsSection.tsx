import React, { useState } from 'react';
import { UPCOMING_EVENTS, PAST_EVENTS, ATTENDED_EVENTS, CBC_AWARDS, CBCAward } from '../data/mockData';
import { EventItem, EventCategory } from '../types';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Download, 
  Search, 
  History, 
  Camera, 
  Award,
  Trophy,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Play,
  Film,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CBC_PIXIESET_URL } from '../data/pixiesetPhotos';

interface EventsSectionProps {
  onRegisterEvent: (event: EventItem) => void;
  onViewEventDetails: (event: EventItem) => void;
  onNavigateToGallery?: () => void;
}

export type EventTab = 'done' | 'attended' | 'awards' | 'upcoming';

export const EventsSection: React.FC<EventsSectionProps> = ({
  onRegisterEvent,
  onViewEventDetails,
  onNavigateToGallery,
}) => {
  const [activeTab, setActiveTab] = useState<EventTab>('done');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cardActiveImages, setCardActiveImages] = useState<Record<string, number>>({});

  const categories: EventCategory[] = [
    'All',
    'High-Level Summit',
    'Breakfast Roundtable',
    'Masterclass',
    'Annual Gala',
  ];

  const getCurrentList = (): EventItem[] => {
    switch (activeTab) {
      case 'done':
        return PAST_EVENTS;
      case 'attended':
        return ATTENDED_EVENTS;
      case 'upcoming':
        return UPCOMING_EVENTS;
      default:
        return PAST_EVENTS;
    }
  };

  const currentEventsList = getCurrentList();

  const filteredEvents = currentEventsList.filter((ev) => {
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      ev.title.toLowerCase().includes(query) ||
      ev.venue.toLowerCase().includes(query) ||
      ev.description.toLowerCase().includes(query) ||
      (ev.roleOrganized && ev.roleOrganized.toLowerCase().includes(query)) ||
      (ev.awardWon && ev.awardWon.toLowerCase().includes(query)) ||
      (ev.attendeeRole && ev.attendeeRole.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const downloadCalendarFile = (event: EventItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Corporate Business Circle//Juba South Sudan//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, ' ')}
LOCATION:${event.venue}, Juba, South Sudan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGLCDetails = () => {
    const glc = PAST_EVENTS.find((e) => e.id === 'global-logistics-convention-2026');
    if (glc) {
      onViewEventDetails(glc);
    }
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Events Portfolio • Executed & Attended</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Corporate Events & Executive Engagements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From turnkey planning and marketing of continental summits like the <strong>Global Logistics Convention 2026</strong> to 
            our founding <strong>Juba Auto Show (2022–2025)</strong> and high-level regional delegations across East Africa.
          </p>
        </div>

        {/* Official Awards Spotlight Banner */}
        <div className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1a2e] via-[#11243e] to-[#081220] border border-amber-400/40 text-white shadow-xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  Official Award Recognition
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  25th, 26th and 27th August 2026 • Pyramid Continental Hotel, Juba
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
                The Event Organizer of The Global Logistics Convention 2026
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The <strong>Global Logistics Convention 2026 (7th Edition)</strong> was planned and marketed by <strong>The Corporate Business Circle (CBC)</strong> in collaboration with the South Sudan Freight Forwarders Association (SSFFA) & the Ministry of Transport. CBC was proudly recognized with the prestigious Event Organizer Award.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-amber-300/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Planned & Marketed by CBC
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  450+ Continental Delegates & Ministers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Together for Efficient Trade Logistics
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={openGLCDetails}
                className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0c1a2e] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <span>View Convention Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onNavigateToGallery) {
                    onNavigateToGallery();
                  } else {
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4 text-[#00aeef]" />
                <span>View Convention Photos</span>
              </button>
            </div>
          </div>
        </div>

        {/* Primary Tab Navigation: Events Done | Recent Attended Events | Awards | Upcoming Events */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('done')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'done'
                ? 'bg-[#0c1a2e] text-white border-[#0c1a2e] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <Briefcase className={`w-4 h-4 ${activeTab === 'done' ? 'text-[#00aeef]' : 'text-slate-500'}`} />
            <span>Events Done (Executed by CBC)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'done' ? 'bg-[#00aeef] text-[#0c1a2e]' : 'bg-slate-300 text-slate-700'
            }`}>
              {PAST_EVENTS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('attended')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'attended'
                ? 'bg-[#0c1a2e] text-white border-[#0c1a2e] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <History className={`w-4 h-4 ${activeTab === 'attended' ? 'text-[#00aeef]' : 'text-slate-500'}`} />
            <span>Recent Attended Events</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'attended' ? 'bg-[#00aeef] text-[#0c1a2e]' : 'bg-slate-300 text-slate-700'
            }`}>
              {ATTENDED_EVENTS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('awards')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'awards'
                ? 'bg-[#0c1a2e] text-white border-[#0c1a2e] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <Award className={`w-4 h-4 ${activeTab === 'awards' ? 'text-amber-400' : 'text-slate-500'}`} />
            <span>Awards & Honors</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'awards' ? 'bg-amber-400 text-[#0c1a2e]' : 'bg-slate-300 text-slate-700'
            }`}>
              {CBC_AWARDS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'upcoming'
                ? 'bg-[#0c1a2e] text-white border-[#0c1a2e] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <Calendar className={`w-4 h-4 ${activeTab === 'upcoming' ? 'text-[#00aeef]' : 'text-slate-500'}`} />
            <span>Upcoming Calendar</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'upcoming' ? 'bg-[#00aeef] text-[#0c1a2e]' : 'bg-slate-300 text-slate-700'
            }`}>
              {UPCOMING_EVENTS.length}
            </span>
          </button>
        </div>

        {/* Tab Context Banner */}
        {activeTab === 'done' && (
          <div className="mb-8 p-4 rounded-xl bg-blue-50/70 border border-[#00aeef]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="font-bold text-[#0c1a2e]">Portfolio of Events Done:</span>
              <span>Major conventions, expos, and summits conceptualized, marketed, or managed by The Corporate Business Circle.</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#0c1a2e] text-[#00aeef] font-bold uppercase text-[10px] whitespace-nowrap">
              Proven Track Record
            </span>
          </div>
        )}

        {activeTab === 'attended' && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50/70 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="font-bold text-[#0c1a2e]">Executive Delegation Representation:</span>
              <span>High-level regional conferences, investor forums, and EAC summits attended by CBC executive delegates on behalf of South Sudan&apos;s corporate sector.</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold uppercase text-[10px] whitespace-nowrap">
              Regional Outreach
            </span>
          </div>
        )}

        {/* Awards Dedicated Tab View */}
        {activeTab === 'awards' ? (
          <div className="space-y-8">
            {CBC_AWARDS.map((award) => (
              <div
                key={award.id}
                className="bg-[#f8f9fb] rounded-2xl border-2 border-amber-400/40 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <Trophy className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                        {award.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a2e]">
                        {award.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                    {award.date}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Official Citation & Recognition
                    </div>
                    <blockquote className="font-serif italic text-base text-[#0c1a2e] border-l-2 border-amber-400 pl-3">
                      &ldquo;{award.citation}&rdquo;
                    </blockquote>
                    <p className="text-xs font-semibold text-slate-500">
                      Convention Motto: <span className="text-[#0c1a2e] font-bold">&ldquo;{award.motto}&rdquo;</span>
                    </p>
                  </div>

                  <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Conferral Details
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <span className="text-slate-500 font-semibold">Event: </span>
                        <span className="font-bold text-[#0c1a2e]">{award.event}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-semibold">Presented By: </span>
                        <span className="font-bold text-[#0c1a2e]">{award.presentedBy}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-semibold">Venue: </span>
                        <span className="font-bold text-[#0c1a2e]">{award.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#0c1a2e]">Achievement Summary: </span>
                  {award.description} The Corporate Business Circle was entrusted with the strategic marketing, branding, registration pipelines, VIP protocol, and audio-visual stagecraft for the 7th Global Logistics Convention, delivering an international standard convention that hosted dignitaries, regional port executives, and commercial transport leaders.
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={openGLCDetails}
                    className="px-5 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <span>View GLC 2026 Record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigateToGallery) {
                        onNavigateToGallery();
                      } else {
                        const el = document.getElementById('gallery');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#00aeef]" />
                    <span>View Convention Gallery</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Filter and Search Bar for active event tabs */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#0c1a2e] text-[#00aeef] shadow-sm font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events, roles, or venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/50 focus:border-[#00aeef]"
                />
              </div>
            </div>

            {/* Events Grid */}
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-slate-500 font-medium">No events found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-bold text-[#00aeef] uppercase hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredEvents.map((event) => {
                  const isDone = event.eventType === 'done' || event.status === 'Completed';
                  const isAttended = event.eventType === 'attended';
                  const isUpcoming = !isDone && !isAttended;

                  return (
                    <div
                      key={event.id}
                      className={`bg-[#f8f9fb] rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group ${
                        event.id === 'global-logistics-convention-2026'
                          ? 'border-amber-400/50 hover:border-amber-400'
                          : 'border-slate-200 hover:border-[#00aeef]/60'
                      }`}
                    >
                      {/* Image & Badges Banner */}
                      {(() => {
                        const hasGallery = event.galleryImages && event.galleryImages.length > 0;
                        const currentImgIdx = cardActiveImages[event.id] ?? 0;
                        const currentImage = hasGallery && event.galleryImages ? event.galleryImages[currentImgIdx]?.url || event.image : event.image;
                        const currentCaption = hasGallery && event.galleryImages ? event.galleryImages[currentImgIdx]?.caption : null;

                        return (
                          <div>
                            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 group/image">
                              <img
                                src={currentImage}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/assets/events/glc-grand-hall-pyramid.jpg';
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/50 to-transparent"></div>

                              {/* Category & Status Badges */}
                              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                                <div className="flex flex-wrap gap-2">
                                  <span className="px-2.5 py-1 rounded bg-[#0c1a2e]/90 backdrop-blur-md text-[#00aeef] border border-[#00aeef]/40 text-[11px] font-bold uppercase tracking-wider">
                                    {event.category}
                                  </span>
                                  {event.awardWon && (
                                    <span className="px-2.5 py-1 rounded bg-amber-400 text-[#0c1a2e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                                      <Trophy className="w-3 h-3" />
                                      Award Winner
                                    </span>
                                  )}
                                  {event.id === 'juba-auto-show' && (
                                    <span className="px-2.5 py-1 rounded bg-[#00aeef] text-[#0c1a2e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                                      <Sparkles className="w-3 h-3" />
                                      CBC Inception Flagship
                                    </span>
                                  )}
                                  {isAttended && (
                                    <span className="px-2.5 py-1 rounded bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider">
                                      CBC Executive Delegation
                                    </span>
                                  )}
                                </div>

                                {hasGallery && event.galleryImages && (
                                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-slate-200 text-[10px] font-mono font-bold border border-white/20">
                                    {currentImgIdx + 1} / {event.galleryImages.length}
                                  </span>
                                )}

                                {isUpcoming && (
                                  <button
                                    onClick={(e) => downloadCalendarFile(event, e)}
                                    title="Add to Calendar (.ics)"
                                    className="p-2 rounded-lg bg-black/60 hover:bg-[#00aeef] text-white hover:text-[#0c1a2e] backdrop-blur-md border border-white/20 transition-all text-xs flex items-center gap-1"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-semibold hidden sm:inline">Add to Cal</span>
                                  </button>
                                )}
                              </div>

                              {/* Navigation Arrows for Gallery Banner */}
                              {hasGallery && event.galleryImages && event.galleryImages.length > 1 && (
                                <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover/image:opacity-100 transition-opacity z-10 pointer-events-none">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const nextIdx = (currentImgIdx - 1 + event.galleryImages!.length) % event.galleryImages!.length;
                                      setCardActiveImages((prev) => ({ ...prev, [event.id]: nextIdx }));
                                    }}
                                    className="p-1.5 rounded-full bg-black/60 hover:bg-[#00aeef] text-white hover:text-[#0c1a2e] backdrop-blur-md transition-all pointer-events-auto shadow-md"
                                    title="Previous Image"
                                  >
                                    <ChevronLeft className="w-4 h-4" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const nextIdx = (currentImgIdx + 1) % event.galleryImages!.length;
                                      setCardActiveImages((prev) => ({ ...prev, [event.id]: nextIdx }));
                                    }}
                                    className="p-1.5 rounded-full bg-black/60 hover:bg-[#00aeef] text-white hover:text-[#0c1a2e] backdrop-blur-md transition-all pointer-events-auto shadow-md"
                                    title="Next Image"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </button>
                                </div>
                              )}

                              {/* Venue & Date Over Image */}
                              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 z-10">
                                {currentCaption && (
                                  <div className="text-[11px] text-amber-300 font-semibold line-clamp-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded inline-block">
                                    📸 {currentCaption}
                                  </div>
                                )}
                                <div className="text-xs font-semibold text-[#00aeef] flex items-center gap-2">
                                  <span>{event.date}</span>
                                  <span>•</span>
                                  <span>{event.time}</span>
                                </div>
                                <div className="text-xs text-slate-300 flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
                                  <span>{event.venue}, {event.address.includes('Nairobi') ? 'Nairobi, Kenya' : 'Juba, South Sudan'}</span>
                                </div>
                              </div>
                            </div>

                            {/* Interactive Thumbnail Gallery Strip for Juba Auto Show */}
                            {hasGallery && event.galleryImages && (
                              <div className="px-5 pt-3 pb-2.5 bg-slate-50 border-b border-slate-200">
                                <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-1.5">
                                  <span className="flex items-center gap-1.5 text-[#0c1a2e]">
                                    <Camera className="w-3.5 h-3.5 text-[#00aeef]" />
                                    <span>Auto Show Photography ({event.galleryImages.length} Shots)</span>
                                  </span>
                                  <span className="text-[#00aeef] font-semibold text-[10px]">
                                    {event.galleryImages[currentImgIdx]?.category || 'Click to switch'}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                                  {event.galleryImages.map((gImg, gIdx) => {
                                    const isThumbActive = currentImgIdx === gIdx;
                                    return (
                                      <button
                                        key={gIdx}
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setCardActiveImages((prev) => ({ ...prev, [event.id]: gIdx }));
                                        }}
                                        className={`relative rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                                          isThumbActive
                                            ? 'border-[#00aeef] ring-2 ring-[#00aeef]/40 scale-105 shadow-md'
                                            : 'border-slate-300 hover:border-slate-400 opacity-70 hover:opacity-100'
                                        }`}
                                        style={{ width: '58px', height: '38px' }}
                                        title={gImg.caption}
                                      >
                                        <img
                                          src={gImg.url}
                                          alt={gImg.caption}
                                          className="w-full h-full object-cover"
                                          loading="lazy"
                                          referrerPolicy="no-referrer"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/assets/juba-autoshow/autoshow-blue-jeep.jpg';
                                          }}
                                        />
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })()}

                      {/* Body Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          {/* Role Callout Badge */}
                          {event.roleOrganized && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[#0c1a2e] text-[11px] font-bold">
                              <Briefcase className="w-3 h-3 text-[#00aeef]" />
                              <span>{event.roleOrganized}</span>
                            </div>
                          )}

                          {event.attendeeRole && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[#0c1a2e] text-[11px] font-bold">
                              <Users className="w-3 h-3 text-emerald-600" />
                              <span>{event.attendeeRole}</span>
                            </div>
                          )}

                          <h3 className="text-xl font-serif font-bold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug">
                            {event.title}
                          </h3>
                          <p className="text-xs font-medium text-slate-500">
                            {event.subtitle}
                          </p>
                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
                            {event.description}
                          </p>
                        </div>

                        {/* Award Highlight if present on card */}
                        {event.awardWon && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 text-xs flex items-start gap-2.5">
                            <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-[#0c1a2e]">Conferred Award: </span>
                              <span className="text-amber-900 font-semibold">{event.awardWon}</span>
                            </div>
                          </div>
                        )}

                        {/* Speakers Preview */}
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="pt-2 border-t border-slate-200/80">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                              {isAttended ? 'Key Stakeholders & Delegation' : 'Keynote & Panelists'}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {event.speakers.slice(0, 3).map((spk, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-medium"
                                >
                                  {spk.name} ({spk.company})
                                </span>
                              ))}
                              {event.speakers.length > 3 && (
                                <span className="text-[11px] px-1.5 py-0.5 text-slate-500 font-semibold">
                                  +{event.speakers.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Capacity & Record Box */}
                        <div className="bg-white rounded-xl p-3 border border-slate-200 text-xs flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400 uppercase font-semibold">
                              {isDone ? 'Event Execution Record' : isAttended ? 'Delegation Scope' : 'Admission / Delegate Fee'}
                            </div>
                            <div className="font-bold text-[#0c1a2e] text-xs">{event.fee}</div>
                          </div>
                          <div className="text-right">
                            <div className={`text-[10px] uppercase font-bold ${
                              isDone ? 'text-slate-500' : isAttended ? 'text-emerald-600' : 'text-emerald-600'
                            }`}>
                              {isDone ? 'Official CBC Portfolio' : isAttended ? 'Represented' : 'Registration Active'}
                            </div>
                            <div className="text-xs text-slate-600">
                              {isDone ? `${event.capacity}` : isAttended ? 'CEO / Delegate' : `${event.seatsLeft} passes remaining`}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <button
                            onClick={() => onViewEventDetails(event)}
                            className="py-2.5 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all text-center"
                          >
                            View Details & Agenda
                          </button>

                          {isUpcoming ? (
                            <button
                              onClick={() => onRegisterEvent(event)}
                              className="py-2.5 px-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-1.5"
                            >
                              <span>Register Delegate</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          ) : isDone ? (
                            <button
                              onClick={() => {
                                if (event.galleryImages && event.galleryImages.length > 0) {
                                  onViewEventDetails(event);
                                } else if (onNavigateToGallery) {
                                  onNavigateToGallery();
                                } else {
                                  const el = document.getElementById('gallery');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="py-2.5 px-3 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
                            >
                              <Camera className="w-3.5 h-3.5 text-[#00aeef]" />
                              <span>{event.galleryImages ? `View Photos (${event.galleryImages.length})` : 'View Gallery Photos'}</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => onViewEventDetails(event)}
                              className="py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
                            >
                              <span>Delegation Brief</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Direct Video Broadcast Quick Link if available */}
                        {event.youtubeId && (
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById('event-highlights');
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                  onViewEventDetails(event);
                                }
                              }}
                              className="w-full py-2 px-3 rounded-lg bg-[#0c1a2e]/5 hover:bg-[#0c1a2e]/10 border border-[#00aeef]/30 text-[#0c1a2e] font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                            >
                              <Play className="w-3.5 h-3.5 fill-current text-rose-600" />
                              <span>Watch Press Briefing Video (Urban FM 99.5)</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
