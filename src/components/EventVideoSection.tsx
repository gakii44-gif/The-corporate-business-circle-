import React, { useState } from 'react';
import { 
  Play, 
  Sparkles,
  Film,
  ExternalLink,
  ShieldCheck,
  Calendar,
  MapPin,
  Radio,
  Tv,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { CBC_VIDEOS, CBCVideoItem } from '../data/mockData';
import { CBC_PIXIESET_URL } from '../data/pixiesetPhotos';

interface EventVideoSectionProps {
  onOpenGallery?: () => void;
  onRegisterInterest?: () => void;
}

export const EventVideoSection: React.FC<EventVideoSectionProps> = ({ 
  onOpenGallery,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<CBCVideoItem>(CBC_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSelectVideo = (video: CBCVideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const handleShare = async () => {
    const url = selectedVideo.youtubeUrl || window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <section 
      id="event-highlights" 
      className="py-16 lg:py-24 bg-[#081222] text-white relative overflow-hidden border-t border-slate-800"
      aria-label="Corporate Business Circle Event Video & Broadcast Archive"
    >
      {/* Background Subtle Gradient & Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081222] via-[#0b172a] to-[#081222] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00aeef]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112239] border border-slate-700 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            <Film className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Official Broadcast & Event Media</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Corporate Events in Motion
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Broadcast coverage, official press briefings, and high-level stakeholder dialogues 
            from summits organized and convened by The Corporate Business Circle in Juba.
          </p>
        </div>

        {/* Video Player Display Container */}
        <div className="bg-[#0c1a2e] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Main Video Screen (Strict 16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            {selectedVideo.youtubeId ? (
              isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsPlaying(true);
                    }
                  }}
                  aria-label={`Play ${selectedVideo.title}`}
                >
                  {/* Poster Thumbnail */}
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-95"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/gallery/juba-autoshow-press-briefing.jpg';
                    }}
                  />
                  
                  {/* Cinematic Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0c1a2e]/90 border border-slate-700 text-[#00aeef] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                      <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                      <span>{selectedVideo.source}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/70 text-slate-300 text-xs font-mono backdrop-blur-xs border border-white/10">
                      {selectedVideo.duration}
                    </span>
                  </div>

                  {/* Centered Play Button & Clean CTA Pill */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <button
                      type="button"
                      aria-label="Click to play video"
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#00aeef]/40"
                    >
                      <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-current ml-0.5 sm:ml-1" />
                    </button>
                    <span className="mt-2.5 sm:mt-3 px-3 py-1 rounded-full bg-black/75 border border-white/20 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                      Watch Official Broadcast
                    </span>
                  </div>
                </div>
              )
            ) : (
              /* Non-YouTube Media Preview with link to Pixieset / Album */
              <div className="relative w-full h-full bg-slate-900 overflow-hidden">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-8">
                  <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-[#00aeef] text-[#0c1a2e] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {selectedVideo.category}
                    </span>
                    <h3 className="text-base sm:text-2xl font-serif font-bold text-white line-clamp-2">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 sm:line-clamp-none">
                      {selectedVideo.description}
                    </p>
                    <div className="pt-1.5 sm:pt-2">
                      <a
                        href={selectedVideo.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-colors"
                      >
                        <span>View High-Res Event Gallery</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Under-Player Metadata & Control Row */}
          <div className="p-5 sm:p-6 bg-[#0c1a2e] border-t border-slate-700/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-[#00aeef] uppercase tracking-wider">
                  {selectedVideo.category}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#00aeef]" />
                  {selectedVideo.venue}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#00aeef]" />
                  {selectedVideo.date}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                {selectedVideo.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
              {selectedVideo.youtubeUrl && (
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#112239] hover:bg-[#152a47] border border-slate-700 hover:border-slate-600 text-white font-semibold text-xs tracking-wider transition-colors inline-flex items-center gap-1.5"
                  title="Watch directly on YouTube"
                >
                  <Tv className="w-3.5 h-3.5 text-rose-500" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}

              <button
                type="button"
                onClick={handleShare}
                className="px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                title="Share video link"
              >
                {copySuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-300" />
                    <span>Share</span>
                  </>
                )}
              </button>

              {onOpenGallery && (
                <button
                  type="button"
                  onClick={onOpenGallery}
                  className="px-4 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                >
                  <span>All Photos</span>
                </button>
              )}
            </div>
          </div>

          {/* Media Playlist Bar / Selection Strip */}
          <div className="p-4 sm:p-5 bg-[#091524] border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Curated Event Media Selection</span>
              </span>
              <span className="text-slate-400 text-[11px]">
                {CBC_VIDEOS.length} Media Releases
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CBC_VIDEOS.map((item) => {
                const isCurrent = selectedVideo.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectVideo(item)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3.5 group ${
                      isCurrent
                        ? 'bg-[#112239] border-[#00aeef] shadow-md'
                        : 'bg-[#0a1628]/70 hover:bg-[#0e1d33] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Small Thumbnail Preview */}
                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-lg overflow-hidden bg-black flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/gallery/juba-autoshow-press-briefing.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isCurrent ? 'bg-[#00aeef] text-[#0c1a2e]' : 'bg-black/60 text-white'
                        }`}>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      {item.duration && (
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-white">
                          {item.duration}
                        </div>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span className={`font-bold uppercase tracking-wider ${isCurrent ? 'text-[#00aeef]' : 'text-slate-300'}`}>
                          {item.source}
                        </span>
                        <span>•</span>
                        <span className="truncate">{item.category}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-serif font-bold text-white truncate group-hover:text-[#00aeef] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {item.venue}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Trust & Architecture Note */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 max-w-5xl mx-auto pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              Official broadcast media recorded on-site at Pyramid Continental Hotel, Juba.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://youtu.be/5K_wmloc7Ck?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00aeef] hover:underline flex items-center gap-1 font-medium"
            >
              <span>Urban FM 99.5 Broadcast Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={CBC_PIXIESET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 hover:underline"
            >
              <span>Full Photo Archive</span>
              <ExternalLink className="w-3 h-3 text-[#00aeef]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
