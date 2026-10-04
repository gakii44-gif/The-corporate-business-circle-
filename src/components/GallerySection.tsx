import React, { useState, useEffect } from 'react';
import { 
  GALLERY_PHOTOS, 
  GalleryPhoto, 
  CBC_PIXIESET_URL, 
  CBC_FACEBOOK_URL 
} from '../data/pixiesetPhotos';
import { 
  Camera, 
  ExternalLink, 
  Facebook, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { getDignitaryPhotoUrl } from '../utils/dignitaryPhotos';

interface GallerySectionProps {
  onOpenLightbox: (photo: GalleryPhoto, index: number) => void;
}

type GalleryFilter = 
  | 'All' 
  | 'Juba Auto Show' 
  | 'Projects & Launches' 
  | 'VIP & Dignitary Engagements' 
  | 'Design, Brand & Printing' 
  | 'Highlights & Summits' 
  | 'Keynotes & Panels' 
  | 'Networking & Gala';

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryFilter>('All');
  const [visibleCount, setVisibleCount] = useState(16);
  const [, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setRefreshKey(k => k + 1);
    window.addEventListener('cbc-photos-updated', handleUpdate);
    return () => window.removeEventListener('cbc-photos-updated', handleUpdate);
  }, []);

  const getDignitaryKey = (photoId: string) => {
    return photoId.replace('dignitary-mandela-', '').replace('dignitary-', '');
  };

  const getPhotoSrc = (photo: GalleryPhoto) => {
    if (photo.id.startsWith('dignitary-')) {
      const key = getDignitaryKey(photo.id);
      const url = getDignitaryPhotoUrl(key);
      if (url) return url;
    }
    return photo.urlThumb || photo.url;
  };

  const categories: GalleryFilter[] = [
    'All',
    'Juba Auto Show',
    'Projects & Launches',
    'VIP & Dignitary Engagements',
    'Design, Brand & Printing',
    'Highlights & Summits',
    'Keynotes & Panels',
    'Networking & Gala',
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (selectedCategory === 'All') return true;
    return photo.category === selectedCategory;
  });

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  return (
    <section 
      id="gallery" 
      className="py-20 lg:py-28 bg-[#081222] text-white relative overflow-hidden border-t border-slate-800"
      aria-label="Summit Photography Archive"
    >
      {/* Subtle depth gradient, no distracting dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081222] via-[#0a1628] to-[#081222] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -mr-48 w-96 h-96 rounded-full bg-[#00aeef]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#112239] border border-slate-700 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            <Camera className="w-4 h-4 text-[#00aeef]" />
            <span>Official Event Photography Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Moments of Enterprise & Executive Action
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Authentic photography from the 7th Global Logistics Convention 2026, ministerial roundtables,
            and executive networking forums convened and organized by Corporate Business Circle in Juba.
          </p>

          {/* Social Links Callout */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CBC_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Follow on Facebook</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={CBC_PIXIESET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <Camera className="w-4 h-4" />
              <span>Full Pixieset Gallery (470+ Photos)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-[#00aeef] text-[#0c1a2e] font-bold shadow-lg shadow-[#00aeef]/20'
                    : 'bg-[#112239] text-slate-300 hover:bg-[#152843] hover:text-white border border-slate-700/60'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] ${
                    selectedCategory === cat
                      ? 'bg-[#0c1a2e]/20 text-[#0c1a2e] font-bold'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [&>*]:mb-4">
          {displayedPhotos.map((photo, idx) => {
            const photoSrc = getPhotoSrc(photo);
            const globalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
            const lightboxIndex = globalIndex >= 0 ? globalIndex : idx;

            return (
              <div
                key={photo.id}
                data-photo
                onClick={() => {
                  if (photoSrc) {
                    onOpenLightbox({ ...photo, url: photoSrc, urlFull: photoSrc, urlThumb: photoSrc }, lightboxIndex);
                  }
                }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#0a182c] border border-slate-800 hover:border-[#00aeef]/60 shadow-lg cursor-pointer transition-all duration-300"
                style={{ aspectRatio: photoSrc ? undefined : '4 / 3' }}
              >
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt={photo.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget.closest('[data-photo]') as HTMLElement | null)?.style.setProperty('display', 'none'); }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#0e1d33] via-[#091527] to-[#060e1a]">
                    <div className="w-12 h-12 rounded-full bg-[#112239] border border-[#00aeef]/40 flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#00aeef]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00aeef]">
                      Authentic Archive
                    </span>
                    <span className="text-xs text-slate-300 font-semibold line-clamp-2 mt-1">
                      {photo.title}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-2 bg-[#112239] px-2 py-0.5 rounded border border-slate-700">
                      Sync via top banner
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/90 via-[#0c1a2e]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded bg-[#0c1a2e]/80 backdrop-blur-sm text-[#00aeef] border border-[#00aeef]/30 text-[10px] font-bold uppercase tracking-wider">
                  {photo.category}
                </span>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Details on Hover */}
              <div className="absolute bottom-3 left-3 right-3 text-white transition-all transform translate-y-1 group-hover:translate-y-0">
                <div className="text-xs font-semibold leading-snug line-clamp-1 group-hover:text-[#00aeef]">
                  {photo.title}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 flex items-center justify-between">
                  <span>{photo.collection}</span>
                  <span className="text-[#00aeef] font-medium">Click to expand</span>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Load More & External Links Bar */}
        <div className="mt-12 text-center space-y-4">
          {visibleCount < filteredPhotos.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="px-6 py-3 rounded-lg bg-[#152843] hover:bg-[#1e365b] border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow"
            >
              Load More Photographs ({filteredPhotos.length - visibleCount} remaining)
            </button>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00aeef]" />
              <span>Official Photography by <strong>Tome Media Co.</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={CBC_PIXIESET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aeef] hover:underline flex items-center gap-1"
              >
                <span>Browse Full Pixieset Archive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={CBC_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <Facebook className="w-3 h-3" />
                <span>Visit Facebook Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
