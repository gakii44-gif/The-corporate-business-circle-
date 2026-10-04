export type EventCategory = 'All' | 'High-Level Summit' | 'Breakfast Roundtable' | 'Masterclass' | 'Annual Gala' | 'Trade Delegation';

export interface EventSpeaker {
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'High-Level Summit' | 'Breakfast Roundtable' | 'Masterclass' | 'Annual Gala' | 'Trade Delegation';
  eventType?: 'done' | 'attended' | 'upcoming';
  date: string;
  time: string;
  venue: string;
  address: string;
  fee: string;
  capacity: string;
  seatsLeft: number;
  image: string;
  description: string;
  agenda: { time: string; activity: string }[];
  speakers: EventSpeaker[];
  isFeatured?: boolean;
  status: 'Upcoming' | 'Registration Open' | 'Sold Out' | 'Completed';
  roleOrganized?: string;
  awardWon?: string;
  attendeeRole?: string;
  organizerPartner?: string;
  galleryUrl?: string;
  photosCount?: number;
  youtubeId?: string;
  videoTitle?: string;
  videoSource?: string;
  galleryImages?: {
    url: string;
    caption: string;
    category?: string;
  }[];
}

export interface MembershipTier {
  id: string;
  name: string;
  badge?: string;
  priceUSD: number;
  period: string;
  tagline: string;
  idealFor: string;
  isPopular?: boolean;
  colorTheme?: string;
  keyBenefits: string[];
  allPerks: string[];
}

export interface SectorItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  growthRate: string;
  opportunities: string[];
  keyHighlights: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface CBCService {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  subServices?: string[];
  deliverables: string[];
  badge?: string;
  highlighted?: boolean;
}

export interface CBCClient {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  logo?: string;
  websiteUrl?: string;
  description?: string;
  featured?: boolean;
}

export interface ClientCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  clients: string[];
}

