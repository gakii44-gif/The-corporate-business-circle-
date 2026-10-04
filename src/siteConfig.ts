/**
 * HOMEPAGE SECTION SWITCHES
 * -------------------------
 * Set a section to `true` to show it on the homepage, `false` to hide it.
 * Nothing is deleted - hidden sections can be switched back on at any time.
 * The navigation bar updates automatically.
 */
export const SECTIONS = {
  services: true,
  designPrinting: true,         // Design, Brand & Printing showcase with visual aids
  about: true,
  dignitaryMilestones: false,   // VIP photos still show in the Hero and Gallery
  partners: true,               // Clients (shows first 15, "Show all" button)
  whyCbc: true,
  events: true,
  eventVideo: false,            // Video / broadcast section
  announcements: true,         // Announcements & Special Offers (Capital FM Free Advert Campaign, etc.)
  gallery: true,
  sectors: false,
  insights: false,
  contact: true,
} as const;

/** How many client cards to show before "Show all clients" is pressed */
export const CLIENTS_PREVIEW_COUNT = 15;
