import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Shield, 
  Maximize2,
  Upload,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { 
  getDignitaryPhotoUrl, 
  DIGNITARY_SLOTS,
  saveDignitaryFile
} from '../utils/dignitaryPhotos';

interface DignitaryPhotoDisplayProps {
  slotKey: string;
  title: string;
  order: number;
  badge?: string;
  className?: string;
  aspectRatio?: string;
  onOpenLightbox?: (url: string, title: string) => void;
}

export const DignitaryPhotoDisplay: React.FC<DignitaryPhotoDisplayProps> = ({
  slotKey,
  title,
  order,
  badge,
  className = '',
  onOpenLightbox,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => getDignitaryPhotoUrl(slotKey));
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const url = getDignitaryPhotoUrl(slotKey);
    setPhotoUrl(url);

    const handleUpdate = (e: any) => {
      if (!e.detail || e.detail.key === slotKey || !e.detail.key) {
        setPhotoUrl(getDignitaryPhotoUrl(slotKey));
      }
    };

    window.addEventListener('cbc-photos-updated', handleUpdate);
    return () => window.removeEventListener('cbc-photos-updated', handleUpdate);
  }, [slotKey]);

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    try {
      setIsUploading(true);
      await saveDignitaryFile(slotKey, file);
      setPhotoUrl(getDignitaryPhotoUrl(slotKey));
    } catch (err) {
      console.error('Failed to save dignitary file:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const slotConfig = DIGNITARY_SLOTS.find(s => s.key === slotKey);
  const displayBadge = badge || slotConfig?.badge || 'Official Archive';

  return (
    <div
      className={`relative w-full h-full min-h-[260px] overflow-hidden rounded-xl bg-[#091424] border transition-colors ${
        isDragging ? 'border-[#00aeef] bg-[#0c1e36]' : 'border-slate-700/60'
      } ${className}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {isUploading ? (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0c1a2e]/95 backdrop-blur-sm space-y-2">
          <Loader2 className="w-8 h-8 text-[#00aeef] animate-spin" />
          <span className="text-xs font-semibold text-white">Saving Archival Photograph...</span>
        </div>
      ) : null}

      {photoUrl ? (
        /* Authentic Executive Photo Display */
        <div 
          className="relative w-full h-full group cursor-pointer"
          onClick={() => onOpenLightbox && onOpenLightbox(photoUrl, title)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onOpenLightbox && onOpenLightbox(photoUrl, title);
            }
          }}
          title="Click to view full resolution archival photograph"
        >
          <img
            src={photoUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/90 via-[#0c1a2e]/20 to-transparent pointer-events-none"></div>

          {/* Authentic Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0c1a2e]/90 border border-[#00aeef]/60 text-[#00aeef] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow">
            <CheckCircle2 className="w-3 h-3 text-[#00aeef]" />
            <span>{displayBadge}</span>
          </div>

          {/* Top Right Controls: Replace & Fullscreen */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="p-1.5 rounded-lg bg-[#0c1a2e]/85 hover:bg-[#162740] border border-slate-600 text-slate-300 hover:text-white transition-colors backdrop-blur-md shadow flex items-center gap-1 text-[10px] font-semibold"
              title="Replace Archival Photo"
            >
              <RefreshCw className="w-3 h-3 text-[#00aeef]" />
              <span className="hidden sm:inline">Replace</span>
            </button>

            {onOpenLightbox && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(photoUrl, title);
                }}
                className="p-1.5 rounded-lg bg-[#0c1a2e]/85 hover:bg-[#162740] border border-slate-600 text-slate-200 hover:text-white transition-colors backdrop-blur-md shadow flex items-center justify-center"
                title="View Full Resolution Photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/25">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c1a2e]/90 border border-[#00aeef]/60 text-white text-xs font-semibold tracking-wider flex items-center gap-1.5 backdrop-blur-md shadow-xl">
              <Maximize2 className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Expand Archival Photo</span>
            </span>
          </div>
        </div>
      ) : (
        /* Executive Archival Record Card with One-Click Upload */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1d33] via-[#091527] to-[#060e1a] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#112239] border border-[#00aeef]/40 flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#00aeef]" />
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#00aeef]/90">
              Executive Archival Record #{order}
            </div>
          </div>

          <div className="relative z-10 max-w-sm space-y-1">
            <h4 className="text-sm sm:text-base font-serif font-bold text-white leading-snug">
              {title}
            </h4>
            <p className="text-[11px] text-slate-400">
              Drop or upload authentic photo for this sovereign milestone
            </p>
          </div>

          {/* Direct Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="relative z-10 px-4 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Archival Photo</span>
          </button>
        </div>
      )}
    </div>
  );
};
