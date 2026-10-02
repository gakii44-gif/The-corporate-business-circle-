import React, { useEffect } from 'react';
import { GalleryPhoto, CBC_PIXIESET_URL, CBC_FACEBOOK_URL } from '../data/pixiesetPhotos';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Facebook, 
  Maximize2,
  Calendar,
  Sparkles,
  Camera
} from 'lucide-react';

interface PhotoLightboxModalProps {
  photo: GalleryPhoto | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalPhotos: number;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalPhotos,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 rounded-lg bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#00aeef]">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#00aeef] font-bold">
              {photo.collection || 'Official Executive Archive'} • Photo {currentIndex + 1} of {totalPhotos}
            </div>
            <div className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
              {photo.title}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={CBC_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-[#1877F2] text-white transition-colors"
            title="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={CBC_PIXIESET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-[#00aeef] hover:text-[#0c1a2e] text-white transition-colors"
            title="Open on Pixieset Full Gallery"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-red-600 text-white transition-colors ml-2"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prev / Next Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-[#00aeef] hover:text-[#0c1a2e] text-white border border-slate-700 transition-all z-20 focus:outline-none"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-[#00aeef] hover:text-[#0c1a2e] text-white border border-slate-700 transition-all z-20 focus:outline-none"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] flex items-center justify-center p-2">
        <img
          src={photo.urlFull || photo.url}
          alt={photo.title}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
        />
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#00aeef] font-bold uppercase text-[10px]">
            {photo.category}
          </span>
          <span className="text-slate-400">• Collection: {photo.collection}</span>
          <span className="text-slate-500 hidden sm:inline">• Archive: Corporate Business Circle</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={CBC_PIXIESET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#00aeef] hover:underline font-semibold"
          >
            <span>View Full 470+ Album on Pixieset</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={CBC_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-400 hover:underline font-semibold"
          >
            <Facebook className="w-3.5 h-3.5" />
            <span>Facebook Page</span>
          </a>
        </div>
      </div>
    </div>
  );
};
