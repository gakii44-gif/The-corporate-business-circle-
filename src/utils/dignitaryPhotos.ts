/**
 * Utility for handling authentic Executive Dignitary Photos
 * Maps WhatsApp filenames to official dignitary milestones and persists them to server and local storage.
 */

export interface DignitaryPhotoConfig {
  key: string;
  order: number;
  title: string;
  expectedFilename: string;
  badge: string;
  description: string;
  personage: string;
  type: 'image' | 'video';
}

export const DIGNITARY_SLOTS: DignitaryPhotoConfig[] = [
  {
    key: 'taban-deng-gai',
    order: 1,
    title: 'CBC Team with Former VP Hon. Gen. Taban Deng Gai',
    expectedFilename: 'WhatsApp Image 2026-09-30 at 17.16.16 (1).jpeg',
    badge: 'Vice-Presidential Delegation',
    description: 'Corporate Business Circle team with Former Vice President Hon Gen Taban Deng Gai.',
    personage: 'Hon. Gen. Taban Deng Gai & CBC Leadership Delegation',
    type: 'image',
  },
  {
    key: 'allah-jabu',
    order: 2,
    title: 'Mandela Nelson with Former Mayor Hon. Allah Jabu',
    expectedFilename: 'WhatsApp Image 2026-09-30 at 17.13.34 (2).jpeg',
    badge: 'Historic Civic Landmark',
    description: 'Mandela Nelson with the former Major of Juba City Hon Allah Jabu',
    personage: 'Mandela Nelson (CBC Founder) & Hon. Michael Allah-Jabu (Former Mayor of Juba City)',
    type: 'image',
  },
  {
    key: 'mgurush-launch',
    order: 3,
    title: 'Mandela Nelson during the Launch of m-Gurush South Sudan',
    expectedFilename: 'WhatsApp Image 2026-09-30 at 17.14.19 (1).jpeg',
    badge: 'FinTech Nationwide Landmark',
    description: 'Mandela Nelson during the launch of MGurush South Sudan',
    personage: 'Mandela Nelson (CBC Founder & South Sudanese Corporate Executive)',
    type: 'image',
  },
  {
    key: 'wani-igga',
    order: 4,
    title: 'CBC Team with Former VP Hon. Dr. James Wani Igga',
    expectedFilename: 'WhatsApp Image 2026-09-30 at 17.10.19 (1).jpeg',
    badge: 'Vice-Presidential Audience',
    description: 'Corporate Business Circle team with.teh former Vice President Hon Dr James Wani Igga.',
    personage: 'Hon. Dr. James Wani Igga & CBC Leadership',
    type: 'image',
  },
  {
    key: 'mandela-audience',
    order: 5,
    title: 'Mandela Nelson Official Mayoral Audience (Alternate Angle)',
    expectedFilename: 'WhatsApp Image 2026-09-30 at 17.13.34 (1).jpeg',
    badge: 'Civic Chamber Archive',
    description: 'Mandela Nelson during official civic audience at Juba City Council',
    personage: 'Mandela Nelson (CBC Founder & Executive)',
    type: 'image',
  },
  {
    key: 'broadcast-video',
    order: 6,
    title: 'SSBC Broadcast: NCA e-Services Platform Video',
    expectedFilename: 'WhatsApp Video 2026-09-30 at 17.09.22.mp4',
    badge: 'Official Broadcast Media',
    description: 'Official television broadcast of National Communication Authority e-Services Platform',
    personage: 'National Communication Authority (NCA) & CBC Media',
    type: 'video',
  },
];

/**
 * Match an uploaded file to a dignitary slot key based on its name or type
 */
export function matchFileToSlotKey(file: File, fallbackIndex?: number): string | null {
  const name = file.name.toLowerCase();

  // Video check
  if (file.type.startsWith('video/') || name.endsWith('.mp4') || name.includes('video') || name.includes('17.09.22')) {
    return 'broadcast-video';
  }

  // Exact WhatsApp timestamp matching
  if (name.includes('17.16.16') || name.includes('taban')) {
    return 'taban-deng-gai';
  }
  if (name.includes('17.13.34 (2)') || name.includes('allah') || name.includes('jabu') || name.includes('mayor')) {
    return 'allah-jabu';
  }
  if (name.includes('17.14.19') || name.includes('mgurush') || name.includes('gurush')) {
    return 'mgurush-launch';
  }
  if (name.includes('17.10.19') || name.includes('wani') || name.includes('igga')) {
    return 'wani-igga';
  }
  if (name.includes('17.13.34 (1)') || name.includes('17.13.34')) {
    // If allah-jabu is already uploaded or if (1) is specified
    return 'allah-jabu';
  }

  return null;
}

export const CURRENT_ASSET_VERSION = 'v2_20261002_real_archive';

export const DEFAULT_DIGNITARY_PHOTOS: Record<string, string> = {
  'taban-deng-gai': '/assets/dignitaries/taban-deng-gai.jpg',
  'allah-jabu': '/assets/dignitaries/allah-jabu.jpg',
  'mgurush-launch': '/assets/dignitaries/mgurush-launch.jpg',
  'wani-igga': '/assets/dignitaries/wani-igga.jpg',
  'mandela-audience': '/assets/dignitaries/mandela-audience.jpg',
  // Aliases: milestone ids / gallery ids resolve to these keys in Hero, Milestones & Gallery
  'gen-taban-deng-gai': '/assets/dignitaries/taban-deng-gai.jpg',
  'hon-allah-jabu': '/assets/dignitaries/allah-jabu.jpg',
  'mgurush': '/assets/dignitaries/mgurush-launch.jpg',
  'dr-james-wani-igga': '/assets/dignitaries/wani-igga.jpg',
};

/**
 * Get current photo URL for a dignitary slot
 */
export function getDignitaryPhotoUrl(key: string): string | null {
  if (typeof window !== 'undefined') {
    // Purge legacy AI image entries from localStorage if version changed
    const version = localStorage.getItem('cbc_dignitary_version');
    if (version !== CURRENT_ASSET_VERSION) {
      for (const k of ['taban-deng-gai', 'allah-jabu', 'mgurush-launch', 'wani-igga', 'mandela-audience']) {
        localStorage.removeItem(`cbc_photo_${k}`);
        localStorage.removeItem(`cbc_photo_server_${k}`);
      }
      localStorage.setItem('cbc_dignitary_version', CURRENT_ASSET_VERSION);
    }

    const local = localStorage.getItem(`cbc_photo_${key}`);
    if (local) return local;

    const serverTime = localStorage.getItem(`cbc_photo_server_${key}`);
    if (serverTime) {
      const ext = key === 'broadcast-video' ? '.mp4' : '.jpg';
      return `/assets/dignitaries/${key}${ext}?t=${serverTime}`;
    }
  }

  // Always fallback to the official high-resolution dignitary asset on disk with versioning
  const base = DEFAULT_DIGNITARY_PHOTOS[key] || `/assets/dignitaries/${key}.jpg`;
  return `${base}?v=${CURRENT_ASSET_VERSION}`;
}

/**
 * Check if authentic photo is loaded
 */
export function hasDignitaryPhoto(key: string): boolean {
  return getDignitaryPhotoUrl(key) !== null;
}

/**
 * Upload and save a photo to local storage & server
 */
export async function saveDignitaryFile(key: string, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(`cbc_photo_${key}`, dataUrl);
          } catch (e) {
            console.warn('localStorage full, relying on server file', e);
          }
        }

        // Upload to server endpoint to save permanently to disk
        try {
          const res = await fetch(`/api/upload-dignitary-photo?target=${encodeURIComponent(key)}`, {
            method: 'POST',
            body: file,
          });
          if (res.ok) {
            const data = await res.json();
            const now = Date.now().toString();
            if (typeof window !== 'undefined') {
              localStorage.setItem(`cbc_photo_server_${key}`, now);
            }
          }
        } catch (serverErr) {
          console.warn('Server upload error, local storage cached:', serverErr);
        }

        // Notify app components to re-render
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cbc-photos-updated', { detail: { key } }));
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
