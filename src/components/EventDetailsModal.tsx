import React from 'react';
import { EventItem } from '../types';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Ticket, 
  ArrowRight, 
  CheckCircle,
  Building,
  Sparkles,
  Film,
  ExternalLink
} from 'lucide-react';

interface EventDetailsModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (event: EventItem) => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  isOpen,
  onClose,
  onRegister,
}) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Banner image with overlay */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 rounded-t-2xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/60 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#00aeef] text-[#0c1a2e] text-[11px] font-bold uppercase tracking-wider">
                {event.category}
              </span>
              {event.eventType === 'done' && (
                <span className="px-2.5 py-0.5 rounded bg-amber-400 text-[#0c1a2e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Events Done by CBC
                </span>
              )}
              {event.eventType === 'attended' && (
                <span className="px-2.5 py-0.5 rounded bg-emerald-400 text-[#0c1a2e] text-[11px] font-bold uppercase tracking-wider">
                  Attended Event (CBC Delegation)
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {event.subtitle}
            </p>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Award Banner if present */}
          {event.awardWon && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-600 flex-shrink-0">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  Official Recognition & Award Conferred
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0c1a2e]">
                  {event.awardWon}
                </div>
                <div className="text-xs text-slate-600">
                  Presented to The Corporate Business Circle (CBC) for outstanding turnkey planning, marketing, and execution.
                </div>
              </div>
            </div>
          )}

          {/* CBC Organization Role Callout if present */}
          {event.roleOrganized && (
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-[#00aeef]/30 flex items-center gap-3 text-xs">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00aeef] flex-shrink-0"></div>
              <div>
                <span className="font-bold text-[#0c1a2e]">CBC Execution Role: </span>
                <span className="text-slate-700 font-medium">{event.roleOrganized}</span>
              </div>
            </div>
          )}

          {event.attendeeRole && (
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-500/30 flex items-center gap-3 text-xs">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-[#0c1a2e]">Delegation Representation: </span>
                <span className="text-slate-700 font-medium">{event.attendeeRole}</span>
              </div>
            </div>
          )}

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#f8f9fb] p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px]">Date</div>
              <div className="font-bold text-[#0c1a2e] flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#00aeef]" />
                {event.date}
              </div>
            </div>

            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px]">Time / Format</div>
              <div className="font-bold text-[#0c1a2e] flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#00aeef]" />
                {event.time}
              </div>
            </div>

            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px]">Venue</div>
              <div className="font-bold text-[#0c1a2e] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
                {event.venue}
              </div>
            </div>

            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px]">
                {event.status === 'Completed' ? 'Delegates / Scale' : 'Admission'}
              </div>
              <div className="font-bold text-[#0c1a2e] flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#00aeef]" />
                {event.capacity}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c1a2e]">
              Forum Executive Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Official Event Video / Press Briefing Broadcast */}
          {event.youtubeId && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c1a2e] flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#00aeef]" />
                  <span>Official Press Briefing Video Broadcast</span>
                </h4>
                <span className="text-[11px] font-bold text-[#0c1a2e] bg-[#00aeef]/15 px-2.5 py-0.5 rounded border border-[#00aeef]/30">
                  {event.videoSource || 'Urban FM 99.5 Broadcast'}
                </span>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-300 shadow-md">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${event.youtubeId}?rel=0&modestbranding=1`}
                  title={event.videoTitle || event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Recorded live on-site at Pyramid Continental Hotel, Juba</span>
                <a
                  href={`https://youtu.be/${event.youtubeId}?feature=shared`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00aeef] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Agenda Timeline */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c1a2e]">
                Official Program & Agenda
              </h4>
              <div className="border-l-2 border-[#c4a35a] ml-2 space-y-4 pl-4">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="space-y-0.5 relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c4a35a] border-2 border-white"></div>
                    <div className="text-xs font-bold text-[#c4a35a]">{item.time}</div>
                    <div className="text-xs sm:text-sm text-slate-800 font-medium">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Keynote Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c1a2e]">
                Keynote Speakers & Distinguished Panelists
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.speakers.map((spk, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                    <div className="text-xs font-bold text-[#0c1a2e]">{spk.name}</div>
                    <div className="text-[11px] text-[#c4a35a] font-semibold">{spk.role}</div>
                    <div className="text-[11px] text-slate-500">{spk.company}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {event.status === 'Completed' ? (
                <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Official Record: Archived in CBC Executive Event Portfolio
                </span>
              ) : (
                <span>
                  Passes remaining: <span className="font-bold text-emerald-600">{event.seatsLeft}</span> of {event.capacity}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 flex-1 sm:flex-none"
              >
                Close
              </button>
              {event.status === 'Completed' ? (
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('gallery') || document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>{event.eventType === 'done' ? 'Hire CBC for Your Event' : 'Contact CBC Delegation'}</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onRegister(event);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
                >
                  <span>Register Delegate Pass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
