import React, { useState, useEffect, useRef } from 'react';
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
  Shield,
  Upload,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Loader2,
  RefreshCw,
  FileImage,
  Sliders,
  X
} from 'lucide-react';
import { getDignitaryPhotoUrl } from '../utils/dignitaryPhotos';
import { 
  validateGalleryImageFile, 
  saveCustomGalleryPhoto, 
  getCustomGalleryPhoto, 
  hasCustomGalleryPhoto, 
  removeCustomGalleryPhoto,
  MAX_IMAGE_FILE_SIZE_BYTES,
  ALLOWED_IMAGE_TYPES
} from '../utils/galleryStorage';

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

  // Administrator custom upload states
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cbc_gallery_admin_mode') === 'true';
    }
    return false;
  });
  const [targetPhotoId, setTargetPhotoId] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgressId, setUploadProgressId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);
  const [failedImageIds, setFailedImageIds] = useState<Set<string>>(new Set());
  const [dragOverCardId, setDragOverCardId] = useState<string | null>(null);

  // Hidden secure file input reference
  const secureFileInputRef = useRef<HTMLInputElement | null>(null);

  // Synchronize updates across components and tabs
  useEffect(() => {
    const handleUpdate = () => {
      setRefreshKey(k => k + 1);
    };

    window.addEventListener('cbc-photos-updated', handleUpdate);
    window.addEventListener('cbc-gallery-updated', handleUpdate);
    return () => {
      window.removeEventListener('cbc-photos-updated', handleUpdate);
      window.removeEventListener('cbc-gallery-updated', handleUpdate);
    };
  }, []);

  const toggleAdminMode = () => {
    const nextState = !isAdminMode;
    setIsAdminMode(nextState);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cbc_gallery_admin_mode', nextState ? 'true' : 'false');
    }
    if (nextState) {
      setStatusMessage({
        type: 'info',
        text: 'Administrator Mode enabled. You can now upload custom images to bypass default placeholders across all gallery records.'
      });
    } else {
      setStatusMessage(null);
    }
  };

  const getDignitaryKey = (photoId: string) => {
    return photoId.replace('dignitary-mandela-', '').replace('dignitary-', '');
  };

  const getPhotoSrc = (photo: GalleryPhoto): string | null => {
    // 1. Custom uploaded photo by administrator takes absolute priority (bypassing default placeholders)
    const customPhoto = getCustomGalleryPhoto(photo.id);
    if (customPhoto) {
      return customPhoto;
    }

    // 2. If this photo has previously failed loading and no custom image exists, fallback to placeholder
    if (failedImageIds.has(photo.id)) {
      return null;
    }

    // 3. Dignitary official photos
    if (photo.id.startsWith('dignitary-')) {
      const key = getDignitaryKey(photo.id);
      const url = getDignitaryPhotoUrl(key);
      if (url) return url;
    }

    // 4. Default Pixieset / local photo URL
    return photo.urlThumb || photo.url || null;
  };

  const triggerUploadForPhoto = (photoId: string) => {
    setTargetPhotoId(photoId);
    if (secureFileInputRef.current) {
      secureFileInputRef.current.value = '';
      secureFileInputRef.current.click();
    }
  };

  const handleSecureFileProcess = async (file: File, photoId: string) => {
    // 1. Perform strict client-side validation for security (MIME type, extension, size)
    const validation = validateGalleryImageFile(file);
    if (!validation.valid) {
      setStatusMessage({
        type: 'error',
        text: validation.error || 'Security check failed. Please select a valid JPG, PNG, or WebP image under 15MB.'
      });
      return;
    }

    const photoMeta = GALLERY_PHOTOS.find(p => p.id === photoId);
    const photoTitle = photoMeta ? photoMeta.title : photoId;

    try {
      setIsUploading(true);
      setUploadProgressId(photoId);
      setStatusMessage({
        type: 'info',
        text: `Securely processing and persisting image for "${photoTitle}"...`
      });

      // 2. Save via gallery storage utility (persists to localStorage and server API)
      await saveCustomGalleryPhoto(photoId, file);

      // 3. Clear from failed set if it had previously failed
      setFailedImageIds(prev => {
        const next = new Set(prev);
        next.delete(photoId);
        return next;
      });

      // 4. Refresh display
      setRefreshKey(k => k + 1);

      setStatusMessage({
        type: 'success',
        text: `Custom image uploaded successfully! Bypassed default placeholder for "${photoTitle}".`
      });

      // Auto-clear success message after 6 seconds
      setTimeout(() => {
        setStatusMessage(prev => (prev?.type === 'success' ? null : prev));
      }, 6000);
    } catch (err: any) {
      console.error('Failed to upload custom gallery photo:', err);
      setStatusMessage({
        type: 'error',
        text: err?.message || 'An error occurred while uploading the archival image. Please try again.'
      });
    } finally {
      setIsUploading(false);
      setUploadProgressId(null);
      setTargetPhotoId('');
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && targetPhotoId) {
      handleSecureFileProcess(file, targetPhotoId);
    }
  };

  const handleResetCustomPhoto = (photoId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const photoMeta = GALLERY_PHOTOS.find(p => p.id === photoId);
    const photoTitle = photoMeta ? photoMeta.title : photoId;

    removeCustomGalleryPhoto(photoId);
    setRefreshKey(k => k + 1);
    setStatusMessage({
      type: 'info',
      text: `Restored default placeholder for "${photoTitle}".`
    });
  };

  const handleDropOnCard = (e: React.DragEvent, photoId: string) => {
    e.preventDefault();
    setDragOverCardId(null);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleSecureFileProcess(file, photoId);
    }
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
      {/* Hidden Secure File Input for Administrators */}
      <input
        ref={secureFileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
        className="hidden"
        aria-label="Secure administrator file upload for gallery item"
        onChange={handleFileInputChange}
      />

      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081222] via-[#0a1628] to-[#081222] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -mr-48 w-96 h-96 rounded-full bg-[#00aeef]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
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

          {/* Social Links Callout & Administrator Mode Toggle */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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

            {/* Admin Controls Toggle */}
            <button
              type="button"
              onClick={toggleAdminMode}
              className={`px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 border ${
                isAdminMode
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-amber-500/20'
                  : 'bg-[#132238] hover:bg-[#1c3252] text-slate-300 hover:text-white border-slate-700'
              }`}
              title="Toggle Administrator Custom Upload Controls"
            >
              <ShieldCheck className="w-4 h-4 text-current" />
              <span>{isAdminMode ? 'Admin Mode Active' : 'Administrator Uploads'}</span>
            </button>
          </div>
        </div>

        {/* Administrator Archival Upload Control Panel */}
        {isAdminMode && (
          <div className="mb-10 p-5 rounded-2xl bg-[#0c1d33] border border-amber-500/40 shadow-xl relative overflow-hidden transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-700/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Administrator Archival Photo Manager</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-widest font-semibold">
                      Security Verified
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300">
                    Upload verified custom imagery for any gallery item to bypass default placeholders with high-resolution photography.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-[#071322] border border-slate-700 font-mono text-[11px] text-slate-300">
                  JPG / PNG / WebP &lt; 15MB
                </span>
                <button
                  onClick={() => setIsAdminMode(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Close Admin Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Upload Bar for target item */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 relative">
                <select
                  value={targetPhotoId}
                  onChange={(e) => setTargetPhotoId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#071322] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00aeef] transition-colors cursor-pointer"
                >
                  <option value="">-- Select a gallery item to upload/replace custom photo --</option>
                  {filteredPhotos.map((p) => {
                    const isCustom = hasCustomGalleryPhoto(p.id);
                    const isPlace = !getPhotoSrc(p);
                    return (
                      <option key={p.id} value={p.id}>
                        {isCustom ? '★ [Custom Uploaded] ' : isPlace ? '⚠️ [Placeholder] ' : ''}
                        {p.title.slice(0, 60)}... ({p.category})
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                type="button"
                disabled={!targetPhotoId || isUploading}
                onClick={() => {
                  if (targetPhotoId) {
                    triggerUploadForPhoto(targetPhotoId);
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Upload...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Upload Custom Image</span>
                  </>
                )}
              </button>

              {targetPhotoId && hasCustomGalleryPhoto(targetPhotoId) && (
                <button
                  type="button"
                  onClick={() => handleResetCustomPhoto(targetPhotoId)}
                  className="px-3.5 py-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-700/60 text-red-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  title="Remove custom image and restore default placeholder"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Restore Default</span>
                </button>
              )}
            </div>

            {/* Notification alert */}
            {statusMessage && (
              <div 
                className={`mt-4 p-3 rounded-xl border flex items-start gap-3 text-xs leading-relaxed transition-all ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                    : statusMessage.type === 'error'
                    ? 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                    : 'bg-blue-950/60 border-blue-500/60 text-blue-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : statusMessage.type === 'error' ? (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{statusMessage.text}</div>
                <button
                  onClick={() => setStatusMessage(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Global notification if admin mode is inactive but an action occurred */}
        {!isAdminMode && statusMessage && (
          <div 
            className={`max-w-2xl mx-auto mb-8 p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{statusMessage.text}</span>
            </div>
            <button onClick={() => setStatusMessage(null)}>
              <X className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        )}

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
            const isCustom = hasCustomGalleryPhoto(photo.id);
            const isTargetUploading = isUploading && uploadProgressId === photo.id;
            const globalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
            const lightboxIndex = globalIndex >= 0 ? globalIndex : idx;
            const isDragOver = dragOverCardId === photo.id;

            return (
              <div
                key={photo.id}
                data-photo
                onDragOver={(e) => {
                  e.preventDefault();
                  if (dragOverCardId !== photo.id) setDragOverCardId(photo.id);
                }}
                onDragLeave={() => {
                  if (dragOverCardId === photo.id) setDragOverCardId(null);
                }}
                onDrop={(e) => handleDropOnCard(e, photo.id)}
                onClick={() => {
                  if (photoSrc) {
                    onOpenLightbox({ ...photo, url: photoSrc, urlFull: photoSrc, urlThumb: photoSrc }, lightboxIndex);
                  } else {
                    // Click on placeholder triggers the secure file input for quick replacement
                    triggerUploadForPhoto(photo.id);
                  }
                }}
                className={`group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#0a182c] border transition-all duration-300 shadow-lg cursor-pointer ${
                  isDragOver
                    ? 'border-[#00aeef] ring-2 ring-[#00aeef]/50 scale-[1.02]'
                    : isCustom
                    ? 'border-emerald-500/40 hover:border-emerald-400'
                    : 'border-slate-800 hover:border-[#00aeef]/60'
                }`}
                style={{ aspectRatio: photoSrc ? undefined : '4 / 3' }}
              >
                {/* Upload Spinner overlay */}
                {isTargetUploading && (
                  <div className="absolute inset-0 z-40 bg-[#071322]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center space-y-2">
                    <Loader2 className="w-8 h-8 text-[#00aeef] animate-spin" />
                    <span className="text-xs font-bold text-white">Saving Archival Image...</span>
                    <span className="text-[10px] text-slate-400">Validating & writing to storage</span>
                  </div>
                )}

                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt={photo.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={() => {
                      // If the image fails to load, mark it as failed so it safely renders the Archival Placeholder
                      setFailedImageIds(prev => new Set(prev).add(photo.id));
                    }}
                  />
                ) : (
                  /* Archival Placeholder Record with Direct Administrator Upload Button */
                  <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-between p-5 text-center bg-gradient-to-b from-[#0e1d33] via-[#091527] to-[#060e1a] relative">
                    <div className="w-full flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Placeholder Record
                      </span>
                      <Shield className="w-4 h-4 text-slate-400" />
                    </div>

                    <div className="my-auto py-3 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#112239] border border-[#00aeef]/40 flex items-center justify-center mb-2 shadow-inner">
                        <Camera className="w-6 h-6 text-[#00aeef]" />
                      </div>
                      <span className="text-xs font-serif font-bold text-white line-clamp-2 px-1">
                        {photo.title}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        {photo.collection}
                      </span>
                    </div>

                    {/* Direct Secure Upload CTA */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerUploadForPhoto(photo.id);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow hover:scale-[1.02]"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Custom Image</span>
                    </button>
                  </div>
                )}

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/90 via-[#0c1a2e]/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#0c1a2e]/85 backdrop-blur-sm text-[#00aeef] border border-[#00aeef]/30 text-[10px] font-bold uppercase tracking-wider">
                    {photo.category}
                  </span>

                  {isCustom && (
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 backdrop-blur-sm text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      <span>Custom Photo</span>
                    </span>
                  )}
                </div>

                {/* Top Right Actions: Admin Upload / Replace / Fullscreen */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
                  {/* Administrator Action Trigger */}
                  {(isAdminMode || isCustom) && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerUploadForPhoto(photo.id);
                      }}
                      className="p-1.5 rounded-lg bg-[#0c1a2e]/90 hover:bg-[#1a3356] border border-amber-500/40 text-amber-300 hover:text-white transition-all shadow text-[10px] font-semibold flex items-center gap-1 backdrop-blur-sm"
                      title="Upload / Replace with Custom Image (Secure Input)"
                    >
                      <Upload className="w-3 h-3 text-amber-400" />
                      <span className="hidden sm:inline">Upload</span>
                    </button>
                  )}

                  {isCustom && isAdminMode && (
                    <button
                      type="button"
                      onClick={(e) => handleResetCustomPhoto(photo.id, e)}
                      className="p-1.5 rounded-lg bg-[#0c1a2e]/90 hover:bg-red-900/60 border border-red-500/40 text-red-300 hover:text-white transition-all shadow text-[10px] backdrop-blur-sm"
                      title="Reset Custom Photo to Default"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Details on Hover */}
                <div className="absolute bottom-3 left-3 right-3 text-white transition-all transform translate-y-1 group-hover:translate-y-0 z-10 pointer-events-none">
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
