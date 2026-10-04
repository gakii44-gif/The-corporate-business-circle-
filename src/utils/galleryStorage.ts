/**
 * Secure Archival & Gallery Photo Storage Utility
 * Provides client-side validation, server-side persistence, and state synchronization
 * for custom images uploaded by administrators to bypass default placeholders.
 */

import { saveDignitaryFile } from './dignitaryPhotos';

export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const MAX_IMAGE_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15MB limit

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates file security (MIME type, extension, size) before processing
 */
export function validateGalleryImageFile(file: File): ValidationResult {
  if (!file) {
    return { valid: false, error: 'No file selected.' };
  }

  // Check file type
  const isTypeValid = ALLOWED_IMAGE_TYPES.includes(file.type.toLowerCase()) ||
    /\.(jpg|jpeg|png|webp)$/i.test(file.name);

  if (!isTypeValid) {
    return {
      valid: false,
      error: 'Invalid file format. Only JPG, PNG, and WebP images are permitted for archival security.',
    };
  }

  // Check file size
  if (file.size > MAX_IMAGE_FILE_SIZE_BYTES) {
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      valid: false,
      error: `File is too large (${sizeMb} MB). Maximum permitted size is 15 MB.`,
    };
  }

  return { valid: true };
}

/**
 * Slot key mapping between gallery item IDs and dignitary milestone slots
 */
export const GALLERY_SLOT_MAP: Record<string, string> = {
  'milestone-3-mgurush-launch': 'mgurush-launch',
  'mgurush-launch': 'mgurush-launch',
  'milestone-4-wani-igga': 'wani-igga',
  'wani-igga': 'wani-igga',
  'milestone-1-taban-deng-gai': 'taban-deng-gai',
  'taban-deng-gai': 'taban-deng-gai',
  'milestone-2-allah-jabu': 'allah-jabu',
  'allah-jabu': 'allah-jabu',
};

/**
 * Retrieve custom photo URL for a gallery item, or null if no custom photo has been uploaded.
 */
export function getCustomGalleryPhoto(photoId: string): string | null {
  if (typeof window === 'undefined') return null;

  // 1. Direct gallery localStorage key
  const direct = localStorage.getItem(`cbc_gallery_photo_${photoId}`);
  if (direct) return direct;

  // 2. Check if this photoId maps to a dignitary slot
  const slotKey = GALLERY_SLOT_MAP[photoId];
  if (slotKey) {
    const dignitaryPhoto = localStorage.getItem(`cbc_photo_${slotKey}`);
    if (dignitaryPhoto) return dignitaryPhoto;

    const serverTimestamp = localStorage.getItem(`cbc_photo_server_${slotKey}`);
    if (serverTimestamp) {
      return `/assets/dignitaries/${slotKey}.jpg?t=${serverTimestamp}`;
    }
  }

  // 3. Server timestamp check for gallery file
  const galleryServerTime = localStorage.getItem(`cbc_gallery_server_${photoId}`);
  if (galleryServerTime) {
    return `/assets/gallery/${photoId}.jpg?t=${galleryServerTime}`;
  }

  return null;
}

/**
 * Check if a custom photo exists for a given gallery photo ID
 */
export function hasCustomGalleryPhoto(photoId: string): boolean {
  return getCustomGalleryPhoto(photoId) !== null;
}

/**
 * Save custom gallery photo securely with instant preview and server persistence
 */
export async function saveCustomGalleryPhoto(photoId: string, file: File): Promise<string> {
  // Validate file
  const validation = validateGalleryImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error || 'Invalid file');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;

        // 1. Persist to localStorage for instantaneous offline rendering
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(`cbc_gallery_photo_${photoId}`, dataUrl);
            localStorage.setItem(`cbc_gallery_filename_${photoId}`, file.name);
          } catch (storageError) {
            console.warn('LocalStorage limit reached for gallery photo, relying on server file:', storageError);
          }
        }

        // 2. If it maps to a dignitary slot (e.g. #3 m-Gurush or #4 Dr. James Wani Igga), sync to dignitary store
        const slotKey = GALLERY_SLOT_MAP[photoId];
        if (slotKey) {
          try {
            await saveDignitaryFile(slotKey, file);
          } catch (dignitaryErr) {
            console.warn('Dignitary sync notice:', dignitaryErr);
          }
        }

        // 3. Persist to server backend API (/api/upload-gallery-photo)
        try {
          const res = await fetch(`/api/upload-gallery-photo?id=${encodeURIComponent(photoId)}`, {
            method: 'POST',
            body: file,
          });
          if (res.ok) {
            const data = await res.json();
            if (typeof window !== 'undefined' && data.success) {
              localStorage.setItem(`cbc_gallery_server_${photoId}`, Date.now().toString());
            }
          }
        } catch (serverErr) {
          console.warn('Backend server upload offline or cached:', serverErr);
        }

        // 4. Dispatch update events to synchronize GallerySection, DignitaryMilestones, etc.
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cbc-gallery-updated', { detail: { photoId, url: dataUrl } }));
          window.dispatchEvent(new CustomEvent('cbc-photos-updated', { detail: { photoId, slotKey } }));
        }

        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Remove/reset custom photo for a gallery item, restoring default placeholder or original photo
 */
export function removeCustomGalleryPhoto(photoId: string): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(`cbc_gallery_photo_${photoId}`);
  localStorage.removeItem(`cbc_gallery_filename_${photoId}`);
  localStorage.removeItem(`cbc_gallery_server_${photoId}`);

  const slotKey = GALLERY_SLOT_MAP[photoId];
  if (slotKey) {
    localStorage.removeItem(`cbc_photo_${slotKey}`);
    localStorage.removeItem(`cbc_photo_server_${slotKey}`);
  }

  window.dispatchEvent(new CustomEvent('cbc-gallery-updated', { detail: { photoId, reset: true } }));
  window.dispatchEvent(new CustomEvent('cbc-photos-updated', { detail: { photoId, slotKey, reset: true } }));
}
