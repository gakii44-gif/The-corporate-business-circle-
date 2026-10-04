import React, { useState } from 'react';
import { CBC_CONTACT } from '../data/mockData';
import { 
  Printer, 
  Sparkles, 
  Layers, 
  CreditCard, 
  Flag, 
  FileText, 
  Maximize2, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  X, 
  Ruler, 
  Clock, 
  PackageCheck
} from 'lucide-react';

export type PortfolioCategory = 'All' | 'Branding' | 'Flyers' | 'Business Cards' | 'Banners';

export interface PortfolioSampleItem {
  id: string;
  title: string;
  category: 'Branding' | 'Flyers' | 'Business Cards' | 'Banners';
  format: string;
  visualAidType: 'branding-suite' | 'stationery-seal' | 'flyer-a5' | 'flyer-trifold' | 'card-gold-foil' | 'card-spot-uv' | 'banner-rollup' | 'banner-backdrop' | 'banner-teardrop';
  shortDesc: string;
  physicalVisualCue: string;
  keyVisualAids: string[];
  dimensions: string;
  materials: string;
  finishes: string;
  turnaround: string;
  realImage?: string;
  badge?: string;
  specs: {
    resolution: string;
    colorProfile: string;
    bleedMargin: string;
    minOrder: string;
  };
}

export const PORTFOLIO_SAMPLES: PortfolioSampleItem[] = [
  // BRANDING
  {
    id: 'branding-identity-suite',
    title: 'Corporate Identity & Stationery Collateral Suite',
    category: 'Branding',
    format: 'Presentation Folders, Executive Letterheads & C5 Envelopes',
    visualAidType: 'branding-suite',
    shortDesc: 'Complete institutional branding suite engineered with precision color-matching, custom die-cut document folders, matching watermarked letterheads, and foiled envelopes.',
    physicalVisualCue: 'Die-cut two-pocket folder with business card slit, paired with crisp 120gsm bond letterheads and foil-embossed corporate envelopes.',
    keyVisualAids: [
      'Die-cut interlocking interior pocket with slotted business card holder',
      'Matte soft-touch velvet exterior with raised spot-UV brand insignia',
      'Archival 120gsm executive watermarked letterhead paper',
      'Matching peel-and-seal corporate envelopes with interior security tint'
    ],
    dimensions: 'Folder: 220×310mm (Holds A4) • Letterhead: 210×297mm • Envelope: C5 & DL',
    materials: '350gsm Silk Cover Board + 120gsm Executive Uncoated Bond',
    finishes: 'Velvet Soft-Touch Lamination, Spot UV, Metallic Foil Accent',
    turnaround: '48 – 72 Hours in Juba',
    realImage: '/assets/branding-printing/framing-displays.jpg',
    badge: 'Flagship Corporate Suite',
    specs: {
      resolution: 'Vector / 300+ DPI',
      colorProfile: 'CMYK + Pantone Spot Matching',
      bleedMargin: '3mm outer perimeter bleed with safety trim marks',
      minOrder: '100 Complete Suites'
    }
  },
  {
    id: 'branding-stationery-seal',
    title: 'Executive Embossed Stationery & Official Seals',
    category: 'Branding',
    format: 'Blind Debossed Letterheads, Certificates & Gold Foil Seals',
    visualAidType: 'stationery-seal',
    shortDesc: 'Sovereign-grade ministerial and corporate stationery with blind debossed crests, tactile relief stamping, and security guilloche border patterns.',
    physicalVisualCue: 'Deep 3D tactile debossed emblem felt on touch, bordered by intricate high-security guilloche framing and gold foil official seal.',
    keyVisualAids: [
      'Tactile 3D blind debossing of corporate crest or ministerial coat of arms',
      'Metallic hot-stamped gold foil seal with anti-counterfeit micro-lettering',
      'Heavyweight 160gsm archival cotton paper with natural deckle finish',
      'Compliant with diplomatic and boardroom archival retention protocols'
    ],
    dimensions: 'A4 (210×297mm) & Custom Certificate Formats (A3)',
    materials: '160gsm – 250gsm 100% Archival Cotton Rag Paper',
    finishes: 'Blind Debossing, Hot Foil Stamping, Micro-Embossing',
    turnaround: '24 – 48 Hours',
    realImage: '/assets/gallery/courtesy-visit-handshake.jpg',
    badge: 'Diplomatic & Sovereign Grade',
    specs: {
      resolution: 'Vector EPS / Strict Vector Die Cut',
      colorProfile: 'Pantone Metallic & CMYK',
      bleedMargin: 'Zero bleed inside decorative borders; 5mm margin',
      minOrder: '250 Sheets / Envelopes'
    }
  },

  // FLYERS
  {
    id: 'flyers-autoshow-session',
    title: 'Juba Auto Show Session Promotional Flier',
    category: 'Flyers',
    format: 'Handheld Event Leaflet & Press Briefing Poster',
    visualAidType: 'flyer-a5',
    shortDesc: 'Vibrant full-color promotional flyers engineered for high contrast under bright daylight and indoor lighting, featuring bold automotive typography and sponsor ribbons.',
    physicalVisualCue: 'High-gloss coated A5 paper handout featuring the official Juba Auto Show session graphics, vibrant teal gradients, and sponsor banners.',
    keyVisualAids: [
      'Ultra-glossy double-sided art paper with high color saturation',
      'Juba Auto Show session graphics with sponsor logos and event timeline',
      'Dual-side full bleed with razor-sharp vector typography',
      'Quick-response QR code box for instant digital pass registration'
    ],
    dimensions: 'A5 (148×210mm) & A4 (210×297mm)',
    materials: '170gsm – 250gsm Premium Gloss Coated Art Paper',
    finishes: 'Dual-Sided High-Gloss Aqueous Protective Coating',
    turnaround: '24 Hours Rush Service in Juba',
    realImage: '/assets/gallery/juba-autoshow-press-briefing.jpg',
    badge: 'Juba Auto Show Official Graphic',
    specs: {
      resolution: '300 DPI High Resolution',
      colorProfile: 'Rich Black CMYK (C:40 M:30 Y:30 K:100)',
      bleedMargin: '3mm all edges, 4mm safe text boundary',
      minOrder: '500 Copies'
    }
  },
  {
    id: 'flyers-trifold-brochure',
    title: 'Summit & Convention Tri-Fold 6-Panel Leaflet',
    category: 'Flyers',
    format: '6-Panel Accordion / Roll Fold Corporate Brochure',
    visualAidType: 'flyer-trifold',
    shortDesc: 'Precision 6-page folded marketing brochure providing structured multi-panel storytelling for summits, ministerial roundtables, and investment briefings.',
    physicalVisualCue: 'Standard A4 sheet machine-scored into three crisp panels that fold seamlessly into a pocketable DL format without cracking ink on the spine.',
    keyVisualAids: [
      'Machine-creased fold scores preventing paper fiber cracking on edges',
      '6 distinct reading panels: Cover, Executive Summary, 3-Panel Inside, Contact',
      'Crisp interior agenda layout with keynote speaker profiles and maps',
      'Matte thermal lamination resisting finger smudges during heavy handling'
    ],
    dimensions: 'Flat A4 (297×210mm) folded to DL (99×210mm)',
    materials: '150gsm – 250gsm Semi-Matte Silk Art Card',
    finishes: 'Precision Machine Scoring, Tri-Fold Creasing, Matte Lamination',
    turnaround: '24 – 48 Hours',
    realImage: '/assets/branding-printing/fliers-brochures.jpg',
    badge: 'Popular for Summits',
    specs: {
      resolution: '300 DPI',
      colorProfile: 'Coated FOGRA39 / ISO 12647',
      bleedMargin: '3mm outer bleed, offset fold panel margins (97/100/100mm)',
      minOrder: '250 Brochures'
    }
  },

  // BUSINESS CARDS
  {
    id: 'cards-luxury-gold-foil',
    title: 'Executive 450gsm Gold Foil Business Cards',
    category: 'Business Cards',
    format: 'Duplexed Heavyweight Luxury Executive Cards',
    visualAidType: 'card-gold-foil',
    shortDesc: 'Substantial 450gsm ultra-thick business cards featuring shimmering metallic gold foil stamping, beveled gilded edges, and deep navy velvet matte lamination.',
    physicalVisualCue: 'Weighty, non-bending 450gsm rigid card with reflective metallic gold foil typography and gold gilded edges that catch the light upon presentation.',
    keyVisualAids: [
      '450gsm rigid card thickness that does not flex or bend in hand',
      'Hot-stamped metallic gold foil with precision micro-registration',
      'Velvety soft-touch matte lamination on front and reverse sides',
      'Optional gold gilded edges for an ultra-prestigious executive impression'
    ],
    dimensions: '85×55mm (Standard Executive) or 90×50mm',
    materials: '450gsm Multi-Layer Duplexed Board',
    finishes: 'Hot Foil Stamping (Gold/Silver/Copper), Velvet Matte Lamination, Gilded Edges',
    turnaround: '48 Hours',
    realImage: '/assets/gallery/executive-at-work.jpg',
    badge: 'Executive & Ministerial Choice',
    specs: {
      resolution: 'Vector Linework for Foil Die (100% K vector overlay)',
      colorProfile: 'CMYK + Separate Foil Mask Layer',
      bleedMargin: '2mm perimeter bleed, 3.5mm safe text inset',
      minOrder: '200 Cards'
    }
  },
  {
    id: 'cards-spot-uv-nfc',
    title: 'Spot UV Gloss & Contactless Smart NFC Business Cards',
    category: 'Business Cards',
    format: 'Tactile Raised 3D Varnish & Integrated Contactless Profile',
    visualAidType: 'card-spot-uv',
    shortDesc: 'Modern tech-enabled business cards combining silky matte black texture with glossy raised 3D Spot UV patterns and an embedded tap-to-save digital profile.',
    physicalVisualCue: 'High-contrast textural contrast where clear glossy resin is raised against a silky matte surface, paired with an NFC contactless touch marker.',
    keyVisualAids: [
      'Raised 3D tactile Spot UV polymer creating dimensional texture',
      'Embedded contactless NFC chip transmitting digital vCard upon smartphone tap',
      'Scannable dynamic QR code fallback printed on the reverse panel',
      'Scratch-resistant anti-scuff matte surface lamination'
    ],
    dimensions: '85×55mm with Rounded Corner Options',
    materials: '400gsm Heavy Silk Cardboard or Matte PVC Core',
    finishes: 'Raised 3D Spot UV Varnish, Matte Lamination, Embedded NFC Antenna',
    turnaround: '48 – 72 Hours',
    realImage: '/assets/branding-printing/stickers-decals.jpg',
    badge: 'Smart Technology Integration',
    specs: {
      resolution: '300 DPI + 100% Vector Spot UV Mask Layer',
      colorProfile: 'CMYK + 1-Bit Spot Gloss Plate',
      bleedMargin: '2mm bleed, 3mm safe boundary from chip radius',
      minOrder: '100 Cards'
    }
  },

  // BANNERS
  {
    id: 'banners-rollup-cassette',
    title: 'Executive Roll-Up Pull-Up Banner (85×200cm)',
    category: 'Banners',
    format: 'Freestanding Aluminum Cassette Standing Banner',
    visualAidType: 'banner-rollup',
    shortDesc: 'Self-standing retractable pull-up banner housed inside a sleek heavy-duty anodized aluminum cassette, featuring anti-curl blockout graphic media.',
    physicalVisualCue: '2-meter tall upright standing display that pulls out smoothly from an aluminum floor cassette and anchors securely onto a three-section rear pole.',
    keyVisualAids: [
      'Anti-curl, zero-edge-wave synthetic media that stays completely flat',
      'Heavyweight aluminum cassette base with twin fold-out stabilizer feet',
      'Opaque blockout core layer preventing rear light silhouette bleed',
      'Delivered in a protective dual-zipper padded nylon carrying bag'
    ],
    dimensions: '850×2000mm (0.85m × 2.0m) & Wide 1000×2000mm',
    materials: '440gsm Grey-Back Blockout Polypropylene Film',
    finishes: 'Matte Anti-Reflective Lamination, Top Aluminum Clamp Rail',
    turnaround: 'Same Day / 24 Hours in Juba',
    realImage: '/assets/gallery/glc-2026-stage-branding.jpg',
    badge: 'Essential Summit Signage',
    specs: {
      resolution: '150 – 300 DPI at full scale',
      colorProfile: 'CMYK Large Format Eco-Solvent / UV Curable',
      bleedMargin: 'Zero side bleed, 100mm bottom bleed for base cassette mounting',
      minOrder: '1 Unit'
    }
  },
  {
    id: 'banners-media-backdrop',
    title: 'Summit Stage Step-and-Repeat Media Backdrop',
    category: 'Banners',
    format: 'Wide-Format Press Wall & Stage Interview Backdrop',
    visualAidType: 'banner-backdrop',
    shortDesc: 'Expansive 3×2.4m media interview backdrop featuring continuous sponsor logos engineered with zero glare under heavy TV studio spotlights and camera flashes.',
    physicalVisualCue: 'Wide-format matte stage wall displaying a disciplined grid of official event logos (such as GLC 2026 or Juba Auto Show) for dignitary photo ops.',
    keyVisualAids: [
      'Zero-glare matte surface preventing TV spotlight reflection during filming',
      'Seamless tension fabric eliminating center seams and panel wrinkles',
      'Precision step-and-repeat logo grid aligning with camera focal heights',
      'Collapsible lightweight aluminum pop-up frame with quick magnetic struts'
    ],
    dimensions: '3000×2400mm (3m × 2.4m) & Custom Stage Widths up to 6m',
    materials: '260gsm Heavyweight Seamless Polyester Tension Fabric',
    finishes: 'Anti-Glare Matte Dye-Sublimation, Reinforced Hemmed Edges & Eyelets',
    turnaround: '48 Hours',
    realImage: '/assets/gallery/glc-2026-stage-branding.jpg',
    badge: 'Ministerial Stage Standard',
    specs: {
      resolution: '150+ DPI at 1:1 Scale',
      colorProfile: 'CMYK Large Format Dye Sublimation',
      bleedMargin: '50mm wrap-around perimeter bleed for frame wrap',
      minOrder: '1 Complete System'
    }
  },
  {
    id: 'banners-teardrop-flag',
    title: 'Aerodynamic Outdoor Teardrop & Feather Flag (3.5m)',
    category: 'Banners',
    format: 'Curved Wind-Resistant Outdoor Promotional Flag',
    visualAidType: 'banner-teardrop',
    shortDesc: 'Dynamic outdoor advertising flags built with high-tensile carbon fiber poles and all-weather knitted polyester mesh that rotates 360° with the wind.',
    physicalVisualCue: 'Curved aerodynamic teardrop flag fluttering smoothly at hotel entrances or vehicle forecourts, mounted on a bearing spindle with water-fill base.',
    keyVisualAids: [
      'Dye-sublimation print with 95% reverse show-through for dual-side visibility',
      'Flexible carbon composite pole tip conforming to aerodynamic curve',
      '360° ball-bearing rotating spindle preventing banner entanglement',
      'Dual-anchor hardware: Cross base with water ring plus ground spike'
    ],
    dimensions: '3.5m Total Height (Graphic: 800×2800mm)',
    materials: '115gsm 100% Knitted Weather-Resistant Polyester Mesh',
    finishes: 'Reinforced Elastic Header Sleeve, Dual-Stitched Hemming',
    turnaround: '48 Hours',
    realImage: '/assets/branding-printing/banners-backdrops.jpg',
    badge: 'Outdoor Event Hallmark',
    specs: {
      resolution: '150 – 300 DPI on vector flag template',
      colorProfile: 'UV-Resistant Outdoor CMYK Sublimation',
      bleedMargin: '10mm all edges conforming to teardrop curve vector path',
      minOrder: '2 Flags'
    }
  }
];

interface PrintWorksPortfolioProps {
  onRequestQuote?: (serviceTitle: string) => void;
}

export const PrintWorksPortfolio: React.FC<PrintWorksPortfolioProps> = ({
  onRequestQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedSample, setSelectedSample] = useState<PortfolioSampleItem | null>(null);
  const [activeViewMode, setActiveViewMode] = useState<'schematic' | 'realistic'>('schematic');

  const categories: PortfolioCategory[] = ['All', 'Branding', 'Flyers', 'Business Cards', 'Banners'];

  const filteredSamples = PORTFOLIO_SAMPLES.filter((sample) => {
    if (activeCategory === 'All') return true;
    return sample.category === activeCategory;
  });

  const handleInquire = (sampleTitle: string) => {
    if (onRequestQuote) {
      onRequestQuote(`Print Works Portfolio: ${sampleTitle}`);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  /**
   * Renders high-fidelity SVG visual aid schematics for each service type
   */
  const renderVisualAidSvg = (type: PortfolioSampleItem['visualAidType'], isModal = false) => {
    const heightClass = isModal ? 'h-64 sm:h-80' : 'h-48';

    switch (type) {
      // 1. BRANDING IDENTITY SUITE
      case 'branding-suite':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#061220] via-[#0b1f36] to-[#071322] overflow-hidden`}>
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              {/* Soft ground shadow */}
              <ellipse cx="200" cy="205" rx="160" ry="14" fill="#000" fillOpacity="0.5" />
              
              {/* Folder (Left/Center background) */}
              <g transform="translate(40, 25)">
                <rect x="0" y="0" width="160" height="170" rx="8" fill="#0d243f" stroke="#00aeef" strokeWidth="1.5" />
                <path d="M 0 0 L 70 0 L 85 20 L 160 20 L 160 170 L 0 170 Z" fill="#132f52" />
                {/* Gold foil logo stamp */}
                <circle cx="80" cy="70" r="18" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M 72 70 L 80 62 L 88 70 L 80 78 Z" fill="#fbbf24" />
                <text x="80" y="105" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">CORPORATE FOLDER</text>
                <line x1="40" y1="120" x2="120" y2="120" stroke="#00aeef" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="80" y="132" fill="#94a3b8" fontSize="6" textAnchor="middle">Die-Cut 350gsm Silk</text>
              </g>

              {/* Letterhead (Center layered) */}
              <g transform="translate(130, 45)">
                <rect x="0" y="0" width="130" height="150" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.4))" />
                <rect x="12" y="14" width="24" height="24" rx="4" fill="#0c1a2e" />
                <circle cx="24" cy="26" r="6" fill="#00aeef" />
                <line x1="42" y1="20" x2="115" y2="20" stroke="#0c1a2e" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="42" y1="28" x2="95" y2="28" stroke="#00aeef" strokeWidth="1.5" strokeLinecap="round" />
                {/* Content lines */}
                <line x1="15" y1="52" x2="115" y2="52" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="15" y1="62" x2="110" y2="62" stroke="#cbd5e1" strokeWidth="1.2" />
                <line x1="15" y1="72" x2="115" y2="72" stroke="#cbd5e1" strokeWidth="1.2" />
                <line x1="15" y1="82" x2="105" y2="82" stroke="#cbd5e1" strokeWidth="1.2" />
                <line x1="15" y1="92" x2="115" y2="92" stroke="#cbd5e1" strokeWidth="1.2" />
                {/* Footer official seal watermark */}
                <circle cx="65" cy="115" r="16" fill="#00aeef" fillOpacity="0.08" stroke="#00aeef" strokeOpacity="0.2" strokeWidth="1" />
                <text x="65" y="118" fill="#0c1a2e" fontSize="5" fontWeight="bold" textAnchor="middle">120gsm BOND</text>
              </g>

              {/* Envelope (Right front foreground) */}
              <g transform="translate(210, 100)">
                <rect x="0" y="0" width="140" height="85" rx="5" fill="#0f2947" stroke="#38bdf8" strokeWidth="1.5" filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.5))" />
                <path d="M 0 0 L 70 45 L 140 0" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                {/* Stamp */}
                <rect x="112" y="10" width="18" height="22" rx="2" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="121" cy="21" r="5" fill="#fbbf24" fillOpacity="0.6" />
                {/* Address lines */}
                <line x1="40" y1="48" x2="100" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="40" y1="56" x2="90" y2="56" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="40" y1="64" x2="80" y2="64" stroke="#94a3b8" strokeWidth="1.5" />
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="105" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="67" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">BRAND IDENTITY SUITE</text>
            </svg>
          </div>
        );

      // 2. EMBOSSED STATIONERY & DIPLOMATIC SEAL
      case 'stationery-seal':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#0c1626] via-[#11243d] to-[#071322] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="205" rx="140" ry="12" fill="#000" fillOpacity="0.5" />
              {/* Document Sheet */}
              <g transform="translate(85, 20)">
                <rect x="0" y="0" width="230" height="185" rx="6" fill="#fcfaf7" stroke="#e2d8c9" strokeWidth="1.5" filter="drop-shadow(0px 12px 24px rgba(0,0,0,0.5))" />
                {/* Guilloche Security Border */}
                <rect x="8" y="8" width="214" height="169" rx="3" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="4 2" />
                <rect x="12" y="12" width="206" height="161" rx="2" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                {/* Embossed Coat of Arms / Crest */}
                <circle cx="115" cy="45" r="22" fill="#f5ede0" stroke="#c59b27" strokeWidth="1.5" />
                <path d="M 103 45 L 115 33 L 127 45 L 115 57 Z" fill="#d4af37" />
                <circle cx="115" cy="45" r="8" fill="#fff" />
                <text x="115" y="78" fill="#1e293b" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1">MINISTERIAL AUDIENCE</text>
                <text x="115" y="88" fill="#64748b" fontSize="6" textAnchor="middle">OFFICIAL GOVERNMENT COMMUNICATION</text>
                {/* Text lines */}
                <line x1="30" y1="104" x2="200" y2="104" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="30" y1="114" x2="195" y2="114" stroke="#cbd5e1" strokeWidth="1.2" />
                <line x1="30" y1="124" x2="200" y2="124" stroke="#cbd5e1" strokeWidth="1.2" />
                <line x1="30" y1="134" x2="180" y2="134" stroke="#cbd5e1" strokeWidth="1.2" />
                {/* Wax / Gold Foil Seal */}
                <g transform="translate(165, 130)">
                  <circle cx="18" cy="18" r="16" fill="#c59b27" stroke="#fbbf24" strokeWidth="1.5" />
                  <circle cx="18" cy="18" r="13" fill="#996515" />
                  <path d="M 12 18 L 18 12 L 24 18 L 18 24 Z" fill="#fbbf24" />
                  {/* Seal Ribbons */}
                  <path d="M 12 32 L 6 46 L 16 42 L 20 46 L 24 32 Z" fill="#996515" />
                </g>
              </g>
              {/* Technical Indicator Badge */}
              <rect x="20" y="10" width="120" height="18" rx="4" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1" />
              <text x="80" y="22" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">BLIND DEBOSSED & SEAL</text>
            </svg>
          </div>
        );

      // 3. JUBA AUTO SHOW A5 PROMO FLIER
      case 'flyer-a5':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#05111d] via-[#091a2e] to-[#040e19] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="210" rx="110" ry="12" fill="#000" fillOpacity="0.6" />
              {/* A5 Flyer in Perspective (Angle) */}
              <g transform="translate(120, 15)">
                {/* Outer Paper with Bleed Boundary indicator */}
                <rect x="0" y="0" width="160" height="195" rx="6" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1.5" filter="drop-shadow(0px 14px 28px rgba(0,0,0,0.6))" />
                
                {/* Header Banner - Juba Auto Show */}
                <rect x="0" y="0" width="160" height="55" rx="6" fill="url(#autoshowGrad)" />
                <defs>
                  <linearGradient id="autoshowGrad" x1="0" y1="0" x2="160" y2="55" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00aeef" />
                    <stop offset="1" stopColor="#0369a1" />
                  </linearGradient>
                </defs>
                <rect x="12" y="10" width="30" height="12" rx="3" fill="#0c1a2e" />
                <text x="27" y="18" fill="#00aeef" fontSize="7" fontWeight="900" textAnchor="middle">CBC</text>
                <text x="50" y="18" fill="#ffffff" fontSize="7" fontWeight="bold">PRESENTS</text>
                <text x="80" y="32" fill="#0c1a2e" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1">JUBA AUTO SHOW</text>
                <text x="80" y="44" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">PRESS BRIEFING SESSION</text>

                {/* Car Silhouette / Visual Graphic Area */}
                <rect x="12" y="62" width="136" height="55" rx="4" fill="#071322" stroke="#1e3a5f" strokeWidth="1" />
                {/* Sleek sports car silhouette path */}
                <path d="M 25 95 C 40 95, 50 82, 65 80 C 85 78, 105 78, 115 85 C 125 90, 132 95, 138 96 L 138 102 L 25 102 Z" fill="#00aeef" fillOpacity="0.85" />
                <circle cx="48" cy="102" r="8" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="118" cy="102" r="8" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="2" />
                <text x="80" y="74" fill="#38bdf8" fontSize="6" fontWeight="bold" textAnchor="middle">INCEPTION HALLMARK</text>

                {/* Event Schedule & Bullets */}
                <line x1="16" y1="126" x2="144" y2="126" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="135" x2="120" y2="135" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="16" y1="143" x2="135" y2="143" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                
                {/* QR Code and Venue Footer */}
                <rect x="16" y="152" width="30" height="30" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
                <rect x="20" y="156" width="10" height="10" fill="#0c1a2e" />
                <rect x="32" y="156" width="10" height="10" fill="#0c1a2e" />
                <rect x="20" y="168" width="10" height="10" fill="#0c1a2e" />
                <rect x="24" y="160" width="2" height="2" fill="#fff" />

                <text x="54" y="162" fill="#38bdf8" fontSize="6" fontWeight="bold">PYRAMID CONTINENTAL HOTEL</text>
                <text x="54" y="170" fill="#94a3b8" fontSize="5.5">Ministries Road Area • Juba</text>
                <text x="54" y="178" fill="#fbbf24" fontSize="5.5" fontWeight="bold">35+ Dealerships & Supercars</text>

                {/* Bleed Guide Marker Corner Marks */}
                <line x1="-4" y1="0" x2="-4" y2="12" stroke="#ef4444" strokeWidth="1" />
                <line x1="0" y1="-4" x2="12" y2="-4" stroke="#ef4444" strokeWidth="1" />
                <line x1="164" y1="0" x2="164" y2="12" stroke="#ef4444" strokeWidth="1" />
                <line x1="160" y1="-4" x2="148" y2="-4" stroke="#ef4444" strokeWidth="1" />
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="125" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="77" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">A5 PROMOTIONAL FLIER</text>
            </svg>
          </div>
        );

      // 4. TRI-FOLD BROCHURE
      case 'flyer-trifold':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#061424] via-[#0c223c] to-[#071322] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="205" rx="140" ry="12" fill="#000" fillOpacity="0.5" />
              {/* Tri-Fold 3 Panels Angled */}
              <g transform="translate(60, 30)">
                {/* Panel 1: Inside Left */}
                <path d="M 10 30 L 90 15 L 90 175 L 10 185 Z" fill="#0f2947" stroke="#25517f" strokeWidth="1.5" />
                <line x1="20" y1="40" x2="80" y2="28" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="52" x2="82" y2="40" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="20" y1="64" x2="78" y2="52" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="20" y="80" width="55" height="40" rx="3" fill="#08182b" stroke="#1d4069" strokeWidth="1" />

                {/* Panel 2: Inside Center */}
                <path d="M 90 15 L 180 5 L 180 165 L 90 175 Z" fill="#143459" stroke="#2c639e" strokeWidth="1.5" />
                <rect x="105" y="25" width="60" height="35" rx="3" fill="#091b30" stroke="#00aeef" strokeWidth="1" />
                <line x1="105" y1="72" x2="165" y2="72" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="105" y1="84" x2="160" y2="84" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="105" y1="96" x2="155" y2="96" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="105" y1="108" x2="165" y2="108" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />

                {/* Panel 3: Front Cover */}
                <path d="M 180 5 L 265 20 L 265 180 L 180 165 Z" fill="#1e4675" stroke="#38bdf8" strokeWidth="1.5" />
                <path d="M 180 5 L 265 20 L 265 60 L 180 45 Z" fill="#00aeef" />
                <text x="222" y="32" fill="#0c1a2e" fontSize="8" fontWeight="900" textAnchor="middle">CBC CONVENTION</text>
                <circle cx="222" cy="90" r="16" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1.2" />
                <text x="222" y="93" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">7th GLC</text>
                <line x1="192" y1="125" x2="252" y2="135" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="192" y1="138" x2="245" y2="146" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />

                {/* Crease fold lines */}
                <line x1="90" y1="15" x2="90" y2="175" stroke="#000" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3 2" />
                <line x1="180" y1="5" x2="180" y2="165" stroke="#000" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3 2" />
              </g>
              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="125" height="18" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="77" y="22" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">6-PANEL TRI-FOLD BROCHURE</text>
            </svg>
          </div>
        );

      // 5. LUXURY 450GSM GOLD FOIL BUSINESS CARD
      case 'card-gold-foil':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#06101c] via-[#0c1a2e] to-[#040a12] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="205" rx="140" ry="12" fill="#000" fillOpacity="0.6" />
              {/* Stacked Cards in Perspective */}
              {/* Bottom Card (Reverse side) */}
              <g transform="translate(60, 40) rotate(-6)">
                <rect x="0" y="0" width="190" height="110" rx="8" fill="#071322" stroke="#fbbf24" strokeWidth="1" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.5))" />
                <circle cx="95" cy="55" r="22" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M 85 55 L 95 45 L 105 55 L 95 65 Z" fill="#fbbf24" />
                <text x="95" y="90" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="2">CORPORATE BUSINESS CIRCLE</text>
              </g>

              {/* Top Card (Front side with Gold Foil typography) */}
              <g transform="translate(130, 60) rotate(4)">
                <rect x="0" y="0" width="200" height="115" rx="8" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1.8" filter="drop-shadow(0px 14px 28px rgba(0,0,0,0.7))" />
                {/* Gilded edge indicator highlight */}
                <rect x="2" y="2" width="196" height="111" rx="6" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.4" />

                {/* Gold Foil Logo */}
                <rect x="18" y="18" width="26" height="26" rx="4" fill="#071322" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx="31" cy="31" r="7" fill="#fbbf24" />
                <text x="31" y="34" fill="#0c1a2e" fontSize="7" fontWeight="900" textAnchor="middle">CBC</text>

                {/* Executive Name & Title in Gold Foil */}
                <text x="60" y="26" fill="#fbbf24" fontSize="10" fontWeight="900" letterSpacing="0.8">MANDELA NELSON</text>
                <text x="60" y="36" fill="#38bdf8" fontSize="7" fontWeight="bold" letterSpacing="0.5">MANAGING DIRECTOR</text>
                <text x="60" y="44" fill="#94a3b8" fontSize="6">Corporate Business Circle Secretariat</text>

                {/* Divider Line in Gold */}
                <line x1="18" y1="58" x2="182" y2="58" stroke="#fbbf24" strokeWidth="1" strokeOpacity="0.8" />

                {/* Contact details */}
                <text x="18" y="74" fill="#f8fafc" fontSize="6.5">📞 +211 922 666 050</text>
                <text x="18" y="86" fill="#f8fafc" fontSize="6.5">✉️ Info@corporatebusinesscircle.com</text>
                <text x="18" y="98" fill="#f8fafc" fontSize="6.5">📍 Ministries Road & Custom Area, Juba</text>

                {/* 450gsm Badge on card */}
                <rect x="135" y="82" width="48" height="18" rx="3" fill="#071322" stroke="#fbbf24" strokeWidth="1" />
                <text x="159" y="94" fill="#fbbf24" fontSize="6.5" fontWeight="bold" textAnchor="middle">450 GSM DUPLEX</text>
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="130" height="18" rx="4" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1" />
              <text x="80" y="22" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">450GSM GOLD FOIL CARD</text>
            </svg>
          </div>
        );

      // 6. SPOT UV & SMART NFC BUSINESS CARD
      case 'card-spot-uv':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#081320] via-[#0e1d32] to-[#060e19] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="205" rx="140" ry="12" fill="#000" fillOpacity="0.6" />
              <g transform="translate(100, 45)">
                {/* Matte Card base */}
                <rect x="0" y="0" width="200" height="120" rx="10" fill="#08101a" stroke="#00aeef" strokeWidth="1.5" filter="drop-shadow(0px 16px 32px rgba(0,0,0,0.7))" />

                {/* Glossy 3D Spot UV Geometric Pattern on left half */}
                <path d="M 0 0 L 100 0 L 60 120 L 0 120 Z" fill="#0d1b2e" />
                <circle cx="45" cy="40" r="28" fill="#132742" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="45" cy="40" r="20" fill="#1b365d" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.8" />
                
                {/* Contactless NFC Waves Icon (Spot UV Gloss effect) */}
                <g transform="translate(30, 25)">
                  <path d="M 12 6 C 18 12, 18 20, 12 26" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 18 2 C 26 10, 26 26, 18 34" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 24 -2 C 34 8, 34 34, 24 42" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Executive Typography */}
                <text x="105" y="32" fill="#ffffff" fontSize="9" fontWeight="bold">SMART EXECUTIVE</text>
                <text x="105" y="42" fill="#00aeef" fontSize="7" fontWeight="bold">NFC DIGITAL PROFILE</text>
                <line x1="105" y1="52" x2="185" y2="52" stroke="#1e3a5f" strokeWidth="1.5" />

                {/* QR Code and Tap Callout */}
                <rect x="105" y="60" width="36" height="36" rx="3" fill="#ffffff" />
                <rect x="109" y="64" width="10" height="10" fill="#000" />
                <rect x="127" y="64" width="10" height="10" fill="#000" />
                <rect x="109" y="82" width="10" height="10" fill="#000" />
                <rect x="113" y="68" width="2" height="2" fill="#fff" />

                <text x="148" y="72" fill="#38bdf8" fontSize="6.5" fontWeight="bold">TAP PHONE</text>
                <text x="148" y="82" fill="#94a3b8" fontSize="5.5">Instant Contact</text>
                <text x="148" y="90" fill="#94a3b8" fontSize="5.5">Save to iPhone/Android</text>

                {/* Bottom Badge */}
                <rect x="10" y="95" width="70" height="16" rx="3" fill="#0c1a2e" stroke="#00aeef" strokeWidth="0.8" />
                <text x="45" y="106" fill="#38bdf8" fontSize="6" fontWeight="bold" textAnchor="middle">3D SPOT UV GLOSS</text>
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="125" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="77" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">SPOT UV & NFC SMART CARD</text>
            </svg>
          </div>
        );

      // 7. ROLL-UP BANNER CASSETTE (85×200cm)
      case 'banner-rollup':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#06111e] via-[#0b1d33] to-[#071322] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="220" rx="90" ry="8" fill="#000" fillOpacity="0.6" />
              {/* Roll-up Banner Stand Assembly */}
              <g transform="translate(150, 15)">
                {/* Aluminum Base Cassette */}
                <rect x="-15" y="195" width="130" height="16" rx="4" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
                {/* Stabilizer Feet */}
                <rect x="-25" y="207" width="30" height="5" rx="2" fill="#64748b" />
                <rect x="95" y="207" width="30" height="5" rx="2" fill="#64748b" />

                {/* Vertical Support Pole (Rear) */}
                <line x1="50" y1="5" x2="50" y2="195" stroke="#cbd5e1" strokeWidth="3" />

                {/* Printed Vinyl Graphic Banner */}
                <rect x="5" y="10" width="90" height="185" rx="2" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1.5" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.5))" />
                
                {/* Banner Header - Corporate Business Circle */}
                <rect x="5" y="10" width="90" height="40" fill="#00aeef" />
                <circle cx="50" cy="24" r="8" fill="#0c1a2e" />
                <text x="50" y="27" fill="#00aeef" fontSize="6" fontWeight="900" textAnchor="middle">CBC</text>
                <text x="50" y="38" fill="#0c1a2e" fontSize="5.5" fontWeight="900" textAnchor="middle">CORPORATE BUSINESS CIRCLE</text>
                <text x="50" y="46" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">7TH GLOBAL LOGISTICS CONVENTION</text>

                {/* Banner Middle Graphics */}
                <rect x="12" y="58" width="76" height="42" rx="3" fill="#08182b" stroke="#1d4069" strokeWidth="0.8" />
                <path d="M 20 85 L 35 70 L 55 82 L 70 65 L 80 85 Z" fill="#00aeef" fillOpacity="0.6" />
                <circle cx="68" cy="66" r="4" fill="#fbbf24" />

                {/* Text Bullets on Banner */}
                <line x1="15" y1="110" x2="85" y2="110" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="15" y1="120" x2="80" y2="120" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="15" y1="128" x2="82" y2="128" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="15" y1="136" x2="75" y2="136" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                {/* Sponsor Logos Grid at bottom of Banner */}
                <rect x="12" y="150" width="76" height="35" rx="3" fill="#071526" />
                <text x="50" y="160" fill="#38bdf8" fontSize="4.5" fontWeight="bold" textAnchor="middle">OFFICIAL SPONSORS</text>
                <circle cx="25" cy="172" r="5" fill="#334155" />
                <circle cx="42" cy="172" r="5" fill="#334155" />
                <circle cx="58" cy="172" r="5" fill="#334155" />
                <circle cx="75" cy="172" r="5" fill="#334155" />

                {/* Top Aluminum Snap Rail */}
                <rect x="3" y="7" width="94" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.8" />
              </g>

              {/* Dimension Callout on side */}
              <line x1="135" y1="25" x2="135" y2="210" stroke="#00aeef" strokeWidth="1" strokeDasharray="3 3" />
              <text x="125" y="120" fill="#00aeef" fontSize="7" fontWeight="bold" transform="rotate(-90 125 120)" textAnchor="middle">850 × 2000 mm</text>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="130" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="80" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">ROLL-UP BANNER CASSETTE</text>
            </svg>
          </div>
        );

      // 8. SUMMIT MEDIA BACKDROP (3×2.4m)
      case 'banner-backdrop':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#061220] via-[#091d33] to-[#040e1a] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="210" rx="160" ry="12" fill="#000" fillOpacity="0.6" />
              {/* Media Step-and-Repeat Backdrop Wall */}
              <g transform="translate(60, 25)">
                {/* Modular Frame Outline */}
                <rect x="0" y="0" width="280" height="175" rx="6" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1.8" filter="drop-shadow(0px 14px 28px rgba(0,0,0,0.6))" />
                
                {/* Header Title Bar */}
                <rect x="0" y="0" width="280" height="30" rx="6" fill="#132c4a" />
                <text x="140" y="18" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">
                  7TH GLOBAL LOGISTICS CONVENTION 2026
                </text>
                <text x="140" y="26" fill="#00aeef" fontSize="6" fontWeight="bold" textAnchor="middle">
                  PYRAMID CONTINENTAL HOTEL • JUBA, SOUTH SUDAN
                </text>

                {/* Step-and-Repeat Grid */}
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2, 3, 4].map((col) => {
                    const x = 16 + col * 52;
                    const y = 40 + row * 32;
                    const isEven = (row + col) % 2 === 0;

                    return (
                      <g key={`${row}-${col}`} transform={`translate(${x}, ${y})`}>
                        <rect x="0" y="0" width="44" height="24" rx="3" fill={isEven ? '#0e233d' : '#071526'} stroke="#1e3a5f" strokeWidth="0.8" />
                        {isEven ? (
                          <>
                            <circle cx="12" cy="12" r="5" fill="#00aeef" />
                            <text x="27" y="14" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">CBC</text>
                          </>
                        ) : (
                          <>
                            <rect x="7" y="7" width="10" height="10" rx="2" fill="#fbbf24" />
                            <text x="27" y="14" fill="#94a3b8" fontSize="4.5" fontWeight="bold" textAnchor="middle">SSFFA</text>
                          </>
                        )}
                      </g>
                    );
                  })
                )}

                {/* Bottom Floor Skirt */}
                <rect x="0" y="165" width="280" height="10" fill="#00aeef" />
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="135" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="82" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">3×2.4M MEDIA STEP-AND-REPEAT</text>
            </svg>
          </div>
        );

      // 9. AERODYNAMIC TEARDROP FLAG (3.5m)
      case 'banner-teardrop':
        return (
          <div className={`relative w-full ${heightClass} flex items-center justify-center bg-gradient-to-br from-[#061220] via-[#091d33] to-[#040e1a] overflow-hidden`}>
            <svg viewBox="0 0 400 240" className="w-full h-full object-contain p-2" fill="none">
              <ellipse cx="200" cy="220" rx="80" ry="8" fill="#000" fillOpacity="0.6" />
              {/* Flag Base & Spindle */}
              <g transform="translate(180, 15)">
                {/* Ground Water Base */}
                <ellipse cx="20" cy="205" rx="30" ry="8" fill="#334155" stroke="#64748b" strokeWidth="1" />
                <rect x="16" y="195" width="8" height="12" fill="#94a3b8" />

                {/* Curved Carbon Fiber Pole */}
                <path d="M 20 200 L 20 60 C 20 20, 50 10, 80 15 C 100 20, 110 35, 105 55" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />

                {/* Teardrop Flag Fabric Wrap */}
                <path d="M 20 60 C 20 20, 50 10, 80 15 C 105 20, 115 45, 100 80 C 80 120, 20 185, 20 185 Z" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1.5" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.5))" />
                
                {/* Vertical Flag Graphics */}
                <text x="-120" y="55" fill="#ffffff" fontSize="9" fontWeight="900" transform="rotate(-90)" letterSpacing="1.5">
                  CORPORATE BUSINESS
                </text>
                <circle cx="55" cy="50" r="14" fill="#00aeef" />
                <text x="55" y="53" fill="#0c1a2e" fontSize="7" fontWeight="900" textAnchor="middle">CBC</text>
                <text x="55" y="70" fill="#fbbf24" fontSize="6" fontWeight="bold" textAnchor="middle">JUBA</text>
              </g>

              {/* Technical Indicator Badge */}
              <rect x="15" y="10" width="130" height="18" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <text x="80" y="22" fill="#00aeef" fontSize="7" fontWeight="bold" textAnchor="middle">3.5M TEARDROP FLAG BANNER</text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="print-works-portfolio" className="mt-16 pt-12 border-t border-slate-200">
      {/* Portfolio Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e] mb-2.5">
            <Printer className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Curated Physical Production Samples</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Print Works Portfolio
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Detailed visual aids and technical specifications for our primary printing lines: corporate branding systems, high-impact event flyers, luxury foil business cards, and wide-format summit banners.
          </p>
        </div>

        {/* Action Button: Inquire on Custom Print Run */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%20Print%20Team%2C%20I%20would%20like%20to%20view%20samples%20and%20request%20pricing%20for%20a%20custom%20print%20job.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Order Custom Print Run</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? PORTFOLIO_SAMPLES.length
              : PORTFOLIO_SAMPLES.filter((s) => s.category === cat).length;
          const isSelected = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#0c1a2e] text-white shadow-md ring-1 ring-[#00aeef]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] ${
                  isSelected ? 'bg-[#00aeef] text-[#0c1a2e] font-bold' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Grid Layout for Visual Samples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map((sample) => (
          <div
            key={sample.id}
            className="bg-[#fbfcfd] rounded-2xl border border-slate-200 hover:border-[#00aeef]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* TOP VISUAL AID STAGE */}
              <div
                className="relative cursor-pointer overflow-hidden group/stage h-48 bg-slate-900"
                onClick={() => {
                  setSelectedSample(sample);
                  setActiveViewMode('realistic');
                }}
                title={`Click to inspect visual aid for ${sample.title}`}
              >
                {sample.realImage ? (
                  <div className="relative w-full h-full overflow-hidden bg-slate-950">
                    <img
                      src={sample.realImage}
                      alt={sample.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/stage:scale-105"
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  </div>
                ) : (
                  /* SVG Visual Aid Schematic */
                  renderVisualAidSvg(sample.visualAidType, false)
                )}

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0c1a2e]/85 backdrop-blur-sm border border-[#00aeef]/40 text-[#00aeef] text-[10px] font-bold uppercase tracking-wider shadow">
                    {sample.category}
                  </span>
                  {sample.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-950/85 backdrop-blur-sm border border-amber-400/40 text-amber-300 text-[9px] font-bold uppercase tracking-wider">
                      {sample.badge}
                    </span>
                  )}
                </div>

                {/* Zoom Trigger Button on Hover */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/stage:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Identification Strip */}
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-[10px] text-slate-300 z-10">
                  <span className="font-semibold text-white truncate max-w-[210px]">
                    {sample.format}
                  </span>
                  <span className="text-[#00aeef] font-medium flex items-center gap-1 shrink-0">
                    <Eye className="w-3 h-3" /> Inspect Visual Aid
                  </span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 space-y-3.5">
                <div>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug">
                    {sample.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {sample.shortDesc}
                  </p>
                </div>

                {/* Physical Recognition Cue (Visual Marker) */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] space-y-1">
                  <div className="font-bold text-[#0c1a2e] flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#00aeef]" />
                    <span>How to Spot & Verify Quality:</span>
                  </div>
                  <p className="text-slate-600 leading-snug">
                    {sample.physicalVisualCue}
                  </p>
                </div>

                {/* Specifications List */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-semibold text-slate-700">Dimensions:</span>
                    <span className="text-right truncate ml-2 text-slate-800 font-medium">{sample.dimensions}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-semibold text-slate-700">Stock / Material:</span>
                    <span className="text-right truncate ml-2 text-slate-800 font-medium">{sample.materials}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-semibold text-slate-700">Finishes:</span>
                    <span className="text-right truncate ml-2 text-slate-800 font-medium">{sample.finishes}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-semibold text-slate-700">Turnaround:</span>
                    <span className="text-right font-bold text-[#00aeef]">{sample.turnaround}</span>
                  </div>
                </div>

                {/* Key Visual Markers Checklist */}
                <div className="space-y-1 pt-1">
                  {sample.keyVisualAids.slice(0, 3).map((marker, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                      <span className="leading-snug">{marker}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD ACTIONS */}
            <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedSample(sample);
                  setActiveViewMode(sample.realImage ? 'realistic' : 'schematic');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <Eye className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Inspect Spec</span>
              </button>

              <a
                href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%2C%20I%20would%20like%20to%20order%20printable%20samples%20for%3A%20${encodeURIComponent(sample.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                title="WhatsApp Quote"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILED INSPECTION LIGHTBOX MODAL */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in overflow-y-auto"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00aeef]">
                      {selectedSample.category} Visual Aid
                    </span>
                    {selectedSample.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-800 border border-amber-500/30 uppercase tracking-widest font-semibold">
                        {selectedSample.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0c1a2e]">
                    {selectedSample.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSample(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Close Inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Visual Aid Stage with View Switcher */}
              <div className="rounded-2xl border border-slate-800 overflow-hidden relative shadow-inner bg-[#071322]">
                {/* View Switcher if Real Image is available */}
                {selectedSample.realImage && (
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#0c1a2e]/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg">
                    <button
                      type="button"
                      onClick={() => setActiveViewMode('schematic')}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeViewMode === 'schematic'
                          ? 'bg-[#00aeef] text-[#0c1a2e] shadow-sm'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Vector Schematic
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveViewMode('realistic')}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 ${
                        activeViewMode === 'realistic'
                          ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                          : 'text-amber-300 hover:text-amber-200'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Authentic Graphic</span>
                    </button>
                  </div>
                )}

                {/* Render Selected View */}
                {activeViewMode === 'realistic' && selectedSample.realImage ? (
                  <div className="relative w-full min-h-[320px] flex items-center justify-center p-6 bg-gradient-to-br from-[#06111f] to-[#0a1829]">
                    <img
                      src={selectedSample.realImage}
                      alt={selectedSample.title}
                      className="max-h-[340px] w-auto object-contain rounded-xl shadow-2xl border border-slate-700/80"
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                      }}
                    />
                  </div>
                ) : (
                  renderVisualAidSvg(selectedSample.visualAidType, true)
                )}
              </div>

              {/* Physical Appearance Guidance */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <span className="font-bold text-[#0c1a2e] flex items-center gap-1.5 text-sm">
                  <Eye className="w-4 h-4 text-[#00aeef]" />
                  <span>Physical Identification & Verification Guide</span>
                </span>
                <p className="leading-relaxed">
                  {selectedSample.physicalVisualCue}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Dimensions</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{selectedSample.dimensions}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Paper / Substrate</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{selectedSample.materials}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Finishes & Effects</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{selectedSample.finishes}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Lead Time in Juba</div>
                  <div className="text-xs font-bold text-[#00aeef] mt-1">{selectedSample.turnaround}</div>
                </div>
              </div>

              {/* Pre-Press & Production Guidelines */}
              <div className="p-4 rounded-xl bg-[#0c1a2e] text-white border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00aeef] uppercase tracking-wider">
                  <Ruler className="w-4 h-4" />
                  <span>Pre-Press & Print Production Parameters</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-slate-300">
                    <span>Resolution Requirement:</span>
                    <strong className="text-white font-mono">{selectedSample.specs.resolution}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-slate-300">
                    <span>Color Profile:</span>
                    <strong className="text-white font-mono">{selectedSample.specs.colorProfile}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-slate-300">
                    <span>Bleed & Safe Zone:</span>
                    <strong className="text-white font-mono">{selectedSample.specs.bleedMargin}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-slate-300">
                    <span>Minimum Production Run:</span>
                    <strong className="text-[#00aeef] font-mono">{selectedSample.specs.minOrder}</strong>
                  </div>
                </div>
              </div>

              {/* Full Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Quality Control & Fabrication Markers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSample.keyVisualAids.map((aid, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                      <span className="leading-snug">{aid}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Turnkey production handled by CBC Creative & Print Shop in Juba
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%20Print%20Team%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(selectedSample.title)}%20(${encodeURIComponent(selectedSample.category)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    handleInquire(selectedSample.title);
                    setSelectedSample(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
                >
                  <span>Request Official Quotation</span>
                  <ArrowRight className="w-4 h-4 text-[#00aeef]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
