import React, { useState } from 'react';
import { CBC_CONTACT } from '../data/mockData';
import { PrintableVisualAid } from './PrintableVisualAid';
import { PrintWorksPortfolio } from './PrintWorksPortfolio';
import { 
  Palette, 
  Printer, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  Maximize2, 
  X, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Truck,
  Tag,
  Shirt,
  Image as ImageIcon,
  Eye,
  Info,
  FileCheck,
  Flag,
  Tv,
  Video,
  Play,
  Monitor,
  Box,
  Smartphone
} from 'lucide-react';

export interface PrintWorkItem {
  id: string;
  title: string;
  category: 'Fliers & Brochures' | 'Banners & Backdrops' | 'Stickers & Labels' | 'Apparel & Uniforms' | 'Architectural & Framing';
  shortDesc: string;
  printableType: string;
  visualCue: string;
  keyVisualMarkers: string[];
  specs: {
    dimensions: string;
    materials: string;
    finishes: string;
    turnaround: string;
  };
  features: string[];
  badge?: string;
  realExample?: {
    title: string;
    image: string;
    tag: string;
    description: string;
    badge?: string;
  };
}

export const PRINTING_WORKS: PrintWorkItem[] = [
  {
    id: 'fliers-brochures',
    title: 'Corporate Fliers & Tri-Fold Brochures',
    category: 'Fliers & Brochures',
    printableType: 'Handheld Event Leaflets & 6-Page Folded Brochures',
    shortDesc: 'Vibrant full-color promotional flyers, bi-fold and tri-fold corporate marketing brochures engineered for maximum visual recall.',
    visualCue: 'Identified as glossy full-color paper handouts (A5/A4 size) and folding 6-page tri-fold leaflets with crisp creases distributed at summits.',
    badge: 'Popular for Events',
    keyVisualMarkers: [
      'Glossy double-sided art paper with vivid promotional headlines and imagery',
      'Precision tri-fold 6-page accordion layout with clean score lines',
      'Standard A5 (148×210mm), A4 (210×297mm), and DL (99×210mm) formats',
      'QR code scan boxes, event schedule tables, and partner logo footers',
    ],
    specs: {
      dimensions: 'A5, A4, DL (99x210mm) & Custom Multi-Fold Formats',
      materials: '135gsm – 350gsm Premium Gloss & Silk Matte Art Paper',
      finishes: 'Thermal Gloss/Matte Lamination, Spot UV, Foil Stamping',
      turnaround: '24 – 48 Hours in Juba',
    },
    features: [
      'High-speed digital and industrial offset multi-color printing',
      'Double-sided high-opacity coated paper with zero bleed-through',
      'Precision scoring, folding, and bundled packaging for distributions',
      'Ideal for summit programs, product drops, and corporate leaflets',
    ],
    realExample: {
      title: 'Graphics for the Juba Auto Show Session',
      image: '/assets/gallery/juba-autoshow-press-briefing.jpg',
      tag: 'Printed Session Graphic & Flyer',
      description: 'Official promotional flier, session poster, and press briefing graphics designed and printed by Corporate Business Circle for the landmark Juba Auto Show session at Pyramid Continental Hotel.',
      badge: 'Juba Auto Show Session Graphics',
    },
  },
  {
    id: 'banners-backdrops',
    title: 'Roll-Up Banners, Teardrops & Stage Backdrops',
    category: 'Banners & Backdrops',
    printableType: 'Standing Display Signs, Roll-Ups, Teardrop Flags & Media Walls',
    shortDesc: 'Retractable pull-up banners, aerodynamic outdoor teardrop flags, and large-format conference media step-and-repeat backdrops.',
    visualCue: 'Identified as freestanding 2-meter tall pull-up retractable banners in aluminum cassettes, outdoor curved teardrop flags, and conference stage backdrops.',
    badge: 'Executive Standard',
    keyVisualMarkers: [
      'Retractable aluminum cassette floor base with rotating stabilizer feet',
      'Vertical 200cm tall anti-glare printed flex face designed for TV cameras',
      'Outdoor teardrop & feather flags on flexible carbon bow poles with water ballast rings',
      'Stage backdrop step-and-repeat media walls displaying repeating corporate sponsor logos',
    ],
    specs: {
      dimensions: '85x200cm / 120x200cm / 3m–5m Stage Walls',
      materials: 'Heavy-Duty 510gsm Tear-proof PVC & Tension Fabric',
      finishes: 'UV-Resistant Anti-Glare Inks, Reinforced Eyelets',
      turnaround: 'Same-Day / 24 Hours Delivery',
    },
    features: [
      'Retractable aluminum cartridge base with padded travel carry bag',
      'Outdoor wind-resistant teardrop & feather flags with heavy cross-bases',
      'Seamless media conference backdrops (like Global Logistics Convention 2026)',
      'Photographic anti-glare finish designed for TV camera flash and press photography',
    ],
    realExample: {
      title: 'GLC 2026 Stage & Podium Branding Backdrop',
      image: '/assets/gallery/glc-2026-stage-branding.jpg',
      tag: 'Summit Stage Wall & Backdrop',
      description: 'Televised stage wall and podium branding engineered by CBC for live high-definition television coverage at the 7th Global Logistics Convention.',
      badge: 'Official Stage Branding',
    },
  },
  {
    id: 'stickers-decals',
    title: 'Custom Die-Cut Vinyl Stickers & Packaging Labels',
    category: 'Stickers & Labels',
    printableType: 'Self-Adhesive Waterproof Decals & Product Bottle Wraps',
    shortDesc: 'Precision laser die-cut waterproof vinyl stickers, commercial product labels, beverage bottle wraps, and vehicle fleet decals.',
    visualCue: 'Identified as peel-and-stick vinyl decals cut to custom contour shapes (round, crest, badge) and waterproof wrap-around product labels on water bottles.',
    badge: '100% Waterproof',
    keyVisualMarkers: [
      'Peel-off backing wax paper revealing high-tack adhesive layer',
      'Precision laser contour cutting to any shape (circle, shield, star, custom logo)',
      'Waterproof and scratch-resistant gloss or matte laminate surface',
      'Wrap-around commercial beverage bottle and food packaging labels',
    ],
    specs: {
      dimensions: 'Custom Shape Laser Die-Cut (Any Diameter / Size)',
      materials: 'Waterproof Polypropylene (PP) & Cast Vehicle Vinyl',
      finishes: 'Gloss Lamination, Matte Texture, Clear Transparent, Holographic',
      turnaround: '24 – 48 Hours in Juba',
    },
    features: [
      'Resistant to water, ice buckets, sun exposure, and friction scratches',
      'Commercial packaging labels for mineral water bottles and juice containers',
      'Vehicle and corporate fleet branding decals with residue-free removal',
      'Asset tracking QR-codes, tamper-evident warranty seals, and barcode labels',
    ],
    realExample: {
      title: 'Waterproof Die-Cut Decals & Packaging Wraps',
      image: '/assets/branding-printing/stickers-decals.jpg',
      tag: 'Waterproof Commercial Decals',
      description: 'Custom contour die-cut waterproof vinyl stickers and commercial labels designed and precision-cut by CBC for beverage bottles, packaging, and vehicle fleet branding.',
      badge: '100% Waterproof Decals',
    },
  },
  {
    id: 'apparel-uniforms',
    title: 'Custom Corporate Apparel & African Fabric Uniforms',
    category: 'Apparel & Uniforms',
    printableType: 'Wearable Printables, Tailored African Fabric Shirts, Polos & Caps',
    shortDesc: 'Tailored corporate African printed fabric shirts, dresses, embroidered executive polo shirts, and conference delegate caps.',
    visualCue: 'Identified as tailored button-up shirts featuring vibrant African wax print (kitenge/Ankara) motifs, embroidered pique polo shirts, and conference delegate caps.',
    badge: 'Tailored Excellence',
    keyVisualMarkers: [
      'Bespoke tailored button-up shirts in colorful African geometric wax print fabric',
      'Executive collared polo shirts with embroidered corporate chest emblems',
      'Structured 6-panel baseball caps with raised 3D embroidered logos',
      'Woven conference neck lanyards with transparent PVC delegate badge pouches',
    ],
    specs: {
      dimensions: 'Full Size Range (S, M, L, XL, 2XL, 3XL) & Custom Tailoring',
      materials: 'Authentic African Wax Print Fabric & 100% Pique Cotton',
      finishes: 'High-Density Thread Embroidery & Direct-to-Film (DTF) Color Print',
      turnaround: '3 – 5 Days for Bulk Corporate Orders',
    },
    features: [
      'Bespoke branded African print corporate shirts and dresses for teams (as showcased with AMTL)',
      'Executive collared polo shirts with embroidered corporate emblems',
      'Color-fast, breathable, and pre-shrunk fabrics designed for Juba weather',
      'Complete conference packages: custom uniforms, branded caps, and lanyards',
    ],
    realExample: {
      title: 'CBC Branded Corporate Uniforms',
      image: '/assets/gallery/branded-team-apparel.jpg',
      tag: 'Executive Conference Wear',
      description: 'Official corporate team uniforms with custom African fabric detailing, embroidered emblems and conference caps.',
      badge: 'Corporate Team Apparel',
    },
  },
  {
    id: 'architectural-framing',
    title: 'Architectural Masterplan & Institutional Plaques',
    category: 'Architectural & Framing',
    printableType: 'Boardroom Displays, Gilded Hardwood Frames & Engraved Brass Plaques',
    shortDesc: 'Executive gilded presentation frames, architectural renders, recognition plaques, and commemorative institutional awards.',
    visualCue: 'Identified as large-format architectural blueprints mounted inside solid dark mahogany gilded frames with museum acrylic and engraved brass plaques.',
    badge: 'Executive Presentation',
    keyVisualMarkers: [
      'Solid dark mahogany/walnut hardwood outer frame with gold inner bead molding',
      'Archival off-white beveled passe-partout museum matboard',
      'High-resolution architectural site plan / blueprint drawing under acrylic glass',
      'Polished brass commemorative plaque with engraved typography and corner screws',
    ],
    specs: {
      dimensions: 'A3, A2, A1, A0 & Custom Boardroom Sizes',
      materials: 'Solid Polished Hardwood, Metal Accents & Gilded Moldings',
      finishes: 'Anti-Reflective Museum Acrylic Glass, Brass Engraved Plate',
      turnaround: '48 – 72 Hours',
    },
    features: [
      'Official presentation displays (like the "Proposed Juba Auto Show Center" masterplan)',
      'High-resolution archival photographic print on heavyweight metallic luster stock',
      'Institutional VIP handover framing for Ministers, Ambassadors, and Managing Directors',
      'Boardroom architectural wall displays and milestone commemorative plaques',
    ],
    realExample: {
      title: 'Executive Presentation Framing & Plaque',
      image: '/assets/gallery/framed-memento-presentation.jpg',
      tag: 'Gilded Frame & Masterplan Presentation',
      description: 'Museum-grade mahogany gilded presentation framing and engraved commemorative brass plaque (such as the Proposed Juba Auto Show Center masterplan).',
      badge: 'Executive Presentation',
    },
  },
];

export interface CreativeImpressionItem {
  id: string;
  title: string;
  subtitle: string;
  category: '3D Spatial & Stalls' | 'Stage & LED Sets' | 'Lobby & Interior' | 'Broadcast Motion Graphics';
  type: 'image' | 'broadcast_video';
  image: string;
  client: string;
  medium: string;
  shortDesc: string;
  highlights: string[];
  toolsUsed: string[];
  deliverables: string;
  badge?: string;
  scenes?: { title: string; desc: string; iconLabel: string }[];
}

export const CREATIVE_IMPRESSIONS: CreativeImpressionItem[] = [
  {
    id: 'glc-exhibition-booth',
    title: '3D Exhibition Booth & Trade Stall Render',
    subtitle: '7th Global Logistics Convention 2026',
    category: '3D Spatial & Stalls',
    type: 'image',
    image: '/assets/gallery/glc-2026-exhibition-booth.jpg',
    client: 'CBC Secretariat & South Sudan Freight Forwarders Association (SSFFA)',
    medium: '3D Photorealistic Architectural Staging & Trade Stall Visualization',
    shortDesc: 'Turnkey architectural trade booth design featuring heavy cargo transport graphics, dual overhead lighting gantries, curved entrance arch, and cylindrical branded reception counter.',
    highlights: [
      'Photorealistic 3D lighting, surface reflections & shadow simulation',
      'Dual overhead floodlight gantries with structural trussing and downlights',
      'Integrated logistics freight backdrop with transport aircraft & heavy freight truck',
      'Flanking "Juba, South Sudan Welcomes" retractable pull-up rollups with sponsor badges',
    ],
    toolsUsed: ['3D Architectural Modeling', 'Blender / Cinema 4D', 'Adobe Illustrator', 'V-Ray Rendering'],
    deliverables: 'Scale fabrication blueprints, 3D architectural renders, and vinyl wrap cut files',
    badge: '3D Exhibition Stall',
  },
  {
    id: 'glc-main-stage',
    title: '3D Main Stage & LED Panel Session Architecture',
    subtitle: 'Global Logistics Convention 2026 High-Level Stage',
    category: 'Stage & LED Sets',
    type: 'image',
    image: '/assets/gallery/glc-2026-panel-session.jpg',
    client: 'Ministry of Transport, SSFFA & CBC',
    medium: 'Conference Stage Architecture & 3D Staging Layout',
    shortDesc: 'Realistic 3D stage layout featuring wide-format central LED screen graphics, presidential armchair arrangements, branded stage skirting, and dual sponsor step-and-repeat media wings.',
    highlights: [
      'Full-width high-definition LED backdrop with custom event graphics',
      'Ministerial armchair arrangement & stage sightline optimization',
      'Continuous branded fabric skirt wrap along the stage perimeter',
      'Integrated acrylic speaker rostrum and side media interview wings',
    ],
    toolsUsed: ['3D Stage Design', 'High-Res LED Asset Creation', '3ds Max', 'Adobe Creative Suite'],
    deliverables: '3D staging mockups, LED pixel map templates, and custom skirt print layouts',
    badge: 'Main Stage Set',
  },
  {
    id: 'glc-registration-area',
    title: '3D Registration Area & Lobby Reception Wrap',
    subtitle: 'Pyramid Continental Hotel Entrance Foyer',
    category: 'Lobby & Interior',
    type: 'image',
    image: '/assets/gallery/glc-2026-registration-area.jpg',
    client: '7th Global Logistics Convention 2026',
    medium: 'Interior Branding & Architectural Wrap Render',
    shortDesc: 'Architectural 3D concept for the delegate registration hub at Pyramid Continental Hotel, complete with curved counter vinyl wrap, dramatic uplighting, and roll-up signage under presidential portraits.',
    highlights: [
      'Seamless curved reception counter adhesive wrap rendering',
      'Atmospheric magenta and cyan LED uplighting simulation',
      'Placement protocol under official presidential & ministerial portraits',
      'High-traffic entrance flow management & directional signage',
    ],
    toolsUsed: ['Interior Architectural Visualization', 'Adobe Illustrator', 'Cinema 4D', 'Photoshop'],
    deliverables: 'Architectural render, counter wrap die-lines, and hotel lobby signage plan',
    badge: 'Registration Wrap',
  },
  {
    id: 'glc-stage-podium',
    title: '3D Stage Podium & Media Wing Backdrops',
    subtitle: 'Summit Speaker Presentation Rig with Lighting',
    category: 'Stage & LED Sets',
    type: 'image',
    image: '/assets/gallery/glc-2026-stage-branding.jpg',
    client: 'CBC Creative Team Production',
    medium: 'Rostrum & Presentation Wall Visualization',
    shortDesc: 'Vertical 3D presentation podium with high-contrast event graphics, targeted stage wash spotlights, national flag protocol placement, and sponsor step-and-repeat banner.',
    highlights: [
      'Custom fabricated acrylic speaker rostrum with event insignia',
      'Targeted blue and red stage wash pin-spotlights',
      'Official South Sudan national flag protocol integration',
      'Sponsor logos step-and-repeat media wing for TV cameras',
    ],
    toolsUsed: ['3D Modeling', 'Stage Lighting Rig Visualization', 'Adobe Illustrator'],
    deliverables: 'Podium fabrication blueprints, decal vinyl cutouts, and lighting plot',
    badge: 'Speaker Rostrum',
  },
  {
    id: 'nca-broadcast-motion-graphics',
    title: 'NCA e-Services Television Commercial & Motion Graphics',
    subtitle: 'National Television Broadcast Campaign Aired on SSBC',
    category: 'Broadcast Motion Graphics',
    type: 'broadcast_video',
    image: '/assets/gallery/glc-2026-registration-area.jpg',
    client: 'National Communication Authority (NCA) • Republic of South Sudan',
    medium: 'Broadcast 2D/3D Motion Graphics & Explainer Animation',
    shortDesc: 'Official televised digital campaign and animated commercial designed and produced by the CBC Creative Team for the National Communication Authority. Aired nationally on SSBC (South Sudan Broadcasting Corporation) to champion South Sudan’s digital transformation.',
    highlights: [
      'Nationally broadcast on SSBC (South Sudan Broadcasting Corporation) Television',
      'Promotes the landmark NCA e-Services Platform ("Go Digital", "Make Payments Anytime, Anywhere")',
      'Core campaign messages: "No More Delays", "No More Hidden Processes", "Accessible at Your Fingertips"',
      'High-energy character & UI motion graphics: Mobile money, card swipes, smartphone login, and portal workflows',
      'Official campaign slogan: "Digital Transformation for Efficient, Transparent and Accessible Services"',
    ],
    toolsUsed: ['After Effects Motion Graphics', 'Vector Character Animation', 'Broadcast Sound Mastering', 'Illustrator Asset Design'],
    deliverables: 'HD 1080p Broadcast Masters for SSBC TV, Social Media Cutdowns & Poster Keyframes',
    badge: 'SSBC Broadcast Commercial',
    scenes: [
      { title: 'One Payment! Go Digital', desc: 'Animation showing credit cards, mobile wallets, and contactless POS terminals transitioning cash into digital receipts.', iconLabel: 'Go Digital' },
      { title: 'NCA e-Services Platform', desc: 'Secure One-Login citizen portal interface for streamlined national communications compliance.', iconLabel: 'e-Services' },
      { title: 'Apply • Renew • Pay Anytime', desc: 'Seamless mobile document processing allowing citizens and enterprises to transact from anywhere in South Sudan.', iconLabel: 'Anytime' },
      { title: 'No More Delays & Hidden Steps', desc: 'Visual hourglass transition demonstrating radical reduction of bureaucracy and elimination of queue times.', iconLabel: 'Transparent' },
      { title: 'Accessible at Your Fingertips', desc: 'Sleek smartphone UI simulation showing instant licensing and compliance status on mobile.', iconLabel: 'Mobile First' },
      { title: 'Digital Transformation', desc: 'National mandate: "Digital Transformation for Efficient, Transparent and Accessible Services" with official Republic of South Sudan insignia.', iconLabel: 'National Impact' },
    ],
  },
];

interface DesignPrintingShowcaseProps {
  onRequestQuote?: (serviceTitle: string) => void;
}

export const DesignPrintingShowcase: React.FC<DesignPrintingShowcaseProps> = ({
  onRequestQuote,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeIdentifierId, setActiveIdentifierId] = useState<string>('fliers-brochures');
  const [previewItem, setPreviewItem] = useState<PrintWorkItem | null>(null);
  const [selectedImpression, setSelectedImpression] = useState<CreativeImpressionItem | null>(null);
  const [impressionFilter, setImpressionFilter] = useState<string>('All');
  const [stageViewMode, setStageViewMode] = useState<'schematic' | 'real'>('real');
  const [modalViewMode, setModalViewMode] = useState<'schematic' | 'real'>('real');

  const filters = [
    'All',
    'Fliers & Brochures',
    'Banners & Backdrops',
    'Stickers & Labels',
    'Apparel & Uniforms',
    'Architectural & Framing',
  ];

  const activeIdentifierItem = PRINTING_WORKS.find((p) => p.id === activeIdentifierId) || PRINTING_WORKS[0];

  const filteredItems = PRINTING_WORKS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const handleInquire = (itemTitle: string) => {
    if (onRequestQuote) {
      onRequestQuote(`Design, Brand, and Printing: ${itemTitle}`);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="design-printing" 
      className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden"
      aria-label="Design, Brand and Commercial Printing Works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Printer className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Turnkey Industrial Printing & Brand Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Design, Brand, and Printing Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore our physical printable products: high-impact promotional fliers, pull-up banners & teardrops, 
            waterproof die-cut stickers, custom African wax uniforms, and framed architectural masterplans.
          </p>
        </div>

        {/* VISUAL AID PRINTABLE IDENTIFICATION GUIDE (Main Visual Aid Segment) */}
        <div className="mb-16 bg-[#0c1a2e] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Guide Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00aeef] mb-1.5">
                <Eye className="w-4 h-4 text-[#00aeef]" />
                <span>Visual Aid & Printable Identifier</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                How to Identify Each Printable Work
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Click any printable category below to inspect its visual structure, dimensions, and physical identification markers.
              </p>
            </div>

            {/* Quick WhatsApp Inquiry */}
            <a
              href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%2C%20I%20would%20like%20to%20order%20printable%20materials%3A%20${encodeURIComponent(activeIdentifierItem.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shrink-0 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire: {activeIdentifierItem.category}</span>
            </a>
          </div>

          {/* Interactive Printable Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 my-6 relative z-10">
            {PRINTING_WORKS.map((work) => {
              const isSelected = activeIdentifierId === work.id;
              return (
                <button
                  key={work.id}
                  onClick={() => {
                    setActiveIdentifierId(work.id);
                    setStageViewMode('real');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#152843] border-[#00aeef] shadow-lg shadow-[#00aeef]/10 ring-1 ring-[#00aeef]'
                      : 'bg-[#081322] border-slate-800 hover:bg-[#0e1d33] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#00aeef] text-[#0c1a2e]' : 'bg-slate-800 text-[#00aeef]'}`}>
                      {work.category === 'Fliers & Brochures' && <Printer className="w-4 h-4" />}
                      {work.category === 'Banners & Backdrops' && <Layers className="w-4 h-4" />}
                      {work.category === 'Stickers & Labels' && <Tag className="w-4 h-4" />}
                      {work.category === 'Apparel & Uniforms' && <Shirt className="w-4 h-4" />}
                      {work.category === 'Architectural & Framing' && <ImageIcon className="w-4 h-4" />}
                    </span>
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-[#00aeef]' : 'text-slate-500'}`}>
                      #{work.category === 'Fliers & Brochures' ? '01' : work.category === 'Banners & Backdrops' ? '02' : work.category === 'Stickers & Labels' ? '03' : work.category === 'Apparel & Uniforms' ? '04' : '05'}
                    </span>
                  </div>
                  <div className={`text-xs font-bold leading-tight line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {work.category}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                    {work.specs.dimensions.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Visual Aid Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10 pt-2">
            {/* Visual Graphic Display */}
            <div className="lg:col-span-7 bg-[#071322] rounded-2xl border border-slate-700/80 overflow-hidden relative min-h-[340px] flex items-center justify-center shadow-inner group">
              {/* Top View Mode Switcher */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#0c1a2e]/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg">
                <button
                  type="button"
                  onClick={() => setStageViewMode('schematic')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    stageViewMode === 'schematic'
                      ? 'bg-[#00aeef] text-[#0c1a2e] shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Vector Schematic
                </button>
                {activeIdentifierItem.realExample && (
                  <button
                    type="button"
                    onClick={() => setStageViewMode('real')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 ${
                      stageViewMode === 'real'
                        ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                        : 'text-amber-300 hover:text-amber-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{activeIdentifierItem.id === 'fliers-brochures' ? 'Juba Auto Show Graphic' : 'Real Graphic'}</span>
                  </button>
                )}
              </div>

              {/* Display Content: Schematic or Authentic Session Graphic */}
              {stageViewMode === 'real' && activeIdentifierItem.realExample ? (
                <div className="relative w-full h-full min-h-[340px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#06111f] via-[#0b1c31] to-[#071322]">
                  <div
                    className="relative max-h-[300px] max-w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black/40 group/photo cursor-pointer"
                    onClick={() => {
                      setPreviewItem(activeIdentifierItem);
                      setModalViewMode('real');
                    }}
                  >
                    <img
                      src={activeIdentifierItem.realExample.image}
                      alt={activeIdentifierItem.realExample.title}
                      className="max-h-[300px] w-auto object-contain mx-auto transition-transform duration-500 group-hover/photo:scale-105"
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 text-left">
                      <span className="inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-wider mb-1">
                        {activeIdentifierItem.realExample.badge || 'Session Production'}
                      </span>
                      <h5 className="text-xs font-bold text-white leading-tight">
                        {activeIdentifierItem.realExample.title}
                      </h5>
                      <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                        {activeIdentifierItem.realExample.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <PrintableVisualAid category={activeIdentifierItem.category} variant="expanded" />
              )}

              {/* Zoom Trigger Button */}
              <button
                onClick={() => {
                  setPreviewItem(activeIdentifierItem);
                  setModalViewMode('real');
                }}
                className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-black/60 hover:bg-[#00aeef] text-white hover:text-[#0c1a2e] transition-colors border border-white/10"
                title="Expand Visual Aid"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800 z-20">
                <span className="font-semibold text-slate-300 truncate">Format: {activeIdentifierItem.printableType}</span>
                <span className="text-[#00aeef] shrink-0 font-medium">Click to inspect</span>
              </div>
            </div>

            {/* Visual Identification Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-[#102035] rounded-2xl p-5 sm:p-6 border border-slate-700">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00aeef] bg-[#0c1a2e] px-2.5 py-1 rounded border border-[#00aeef]/30">
                    Visual Recognition Guide
                  </span>
                  <span className="text-xs text-slate-400">
                    Turnaround: <strong className="text-white">{activeIdentifierItem.specs.turnaround}</strong>
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                  {activeIdentifierItem.title}
                </h4>

                {/* Physical Appearance Description */}
                <div className="p-3.5 rounded-xl bg-[#0a1727] border-l-4 border-[#00aeef] text-xs text-slate-200 leading-relaxed">
                  <strong className="text-[#00aeef] block mb-0.5">Physical Appearance:</strong>
                  {activeIdentifierItem.visualCue}
                </div>

                {/* Authentic Session Visual Aid Callout */}
                {activeIdentifierItem.realExample && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/30 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Authentic Session Visual Aid:</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setStageViewMode('real');
                        }}
                        className="text-[10px] font-bold text-amber-300 hover:text-white underline"
                      >
                        View Graphic →
                      </button>
                    </div>
                    <p className="text-slate-200 text-[11px] leading-relaxed">
                      <strong className="text-amber-200">{activeIdentifierItem.realExample.title}:</strong> {activeIdentifierItem.realExample.description}
                    </p>
                  </div>
                )}

                {/* Key Visual Markers Checklist */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    How to Spot & Identify this Printable:
                  </div>
                  <div className="space-y-1.5">
                    {activeIdentifierItem.keyVisualMarkers.map((marker, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                        <span className="leading-snug">{marker}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Specs & Action */}
              <div className="pt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400">
                  <span>Material: </span>
                  <span className="text-white font-medium">{activeIdentifierItem.specs.materials.split('&')[0]}</span>
                </div>

                <button
                  onClick={() => handleInquire(activeIdentifierItem.title)}
                  className="px-4 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation for Catalog */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a2e]">
              Printable Works Catalog
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Every item below includes its visual aid, technical specifications, and production lead times.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFilter === f
                    ? 'bg-[#0c1a2e] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f === 'All' ? 'All (5)' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid with Prominent Visual Aids on EVERY Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#fbfcfd] rounded-2xl border border-slate-200 hover:border-[#00aeef]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* VISUAL AID ILLUSTRATION AT TOP OF CARD */}
                <div 
                  className="relative h-52 w-full overflow-hidden cursor-pointer bg-slate-900 border-b border-slate-800"
                  onClick={() => {
                    setPreviewItem(item);
                    setModalViewMode('real');
                  }}
                  title={`Click to inspect visual aid for ${item.title}`}
                >
                  {item.realExample ? (
                    <img
                      src={item.realExample.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                      }}
                    />
                  ) : (
                    <PrintableVisualAid category={item.category} variant="card" />
                  )}

                  {/* Format Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#0c1a2e]/80 backdrop-blur-sm border border-[#00aeef]/40 text-[#00aeef] text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/40 text-emerald-300 text-[9px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    {item.realExample && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-950/80 backdrop-blur-sm border border-amber-500/40 text-amber-300 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.id === 'fliers-brochures' ? 'Juba Auto Show Graphic' : 'Real Graphic'}
                      </span>
                    )}
                  </div>

                  {/* Expand / Inspect Visual Aid Icon */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Visual Aid Indicator Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-[10px] text-slate-300 z-10">
                    <span className="font-semibold text-white truncate max-w-[200px]">
                      {item.printableType.split('•')[0]}
                    </span>
                    <span className="text-[#00aeef] font-medium flex items-center gap-1 shrink-0">
                      <Eye className="w-3 h-3" /> Inspect Visual Aid
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Visual Aid Identification Callout */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] space-y-1">
                    <div className="font-bold text-[#0c1a2e] flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#00aeef]" />
                      <span>Visual Identification Marker:</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      {item.visualCue}
                    </p>
                  </div>

                  {/* Specifications Matrix */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-[11px] space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Dimensions:</span>
                      <span className="text-right truncate ml-2 text-slate-800 font-medium">{item.specs.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Materials:</span>
                      <span className="text-right truncate ml-2 text-slate-800 font-medium">{item.specs.materials}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Finishes:</span>
                      <span className="text-right truncate ml-2 text-slate-800 font-medium">{item.specs.finishes}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Turnaround:</span>
                      <span className="text-right font-bold text-[#00aeef]">{item.specs.turnaround}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%2C%20I%20would%20like%20to%20order%20and%20request%20pricing%20for%3A%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>

                <button
                  onClick={() => handleInquire(item.title)}
                  className="px-4 py-2.5 rounded-lg bg-[#0c1a2e] hover:bg-[#152843] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                >
                  <span>Order</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00aeef]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PRINT WORKS PORTFOLIO COMPONENT */}
        <PrintWorksPortfolio onRequestQuote={onRequestQuote} />

        {/* GRAPHIC WORK IMPRESSIONS DONE BY CBC CREATIVE TEAM */}
        <div id="creative-impressions" className="mb-16 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e] mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>CBC Creative Team Showcase</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0c1a2e] tracking-tight">
                Graphic Work Impressions Done by CBC Creative Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Turnkey 3D photorealistic architectural staging, trade exhibition booth renders, stage & LED panel architecture, and national television broadcast motion graphics engineered by Corporate Business Circle.
              </p>
            </div>

            {/* Inquire on Custom Creative Impressions */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%20Creative%20Team%2C%20I%20would%20like%20to%20commission%20a%203D%20graphic%20impression%2C%20stage%20render%2C%20or%20broadcast%20motion%20graphics.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
              >
                <Sparkles className="w-4 h-4" />
                <span>Commission Creative Work</span>
              </a>
            </div>
          </div>

          {/* Filter Bar for Impressions */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
            {(['All', '3D Spatial & Stalls', 'Stage & LED Sets', 'Lobby & Interior', 'Broadcast Motion Graphics'] as const).map((filterCat) => (
              <button
                key={filterCat}
                type="button"
                onClick={() => setImpressionFilter(filterCat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  impressionFilter === filterCat
                    ? 'bg-[#0c1a2e] text-white shadow-sm ring-1 ring-[#00aeef]/40'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filterCat === 'All' ? `All Impressions (${CREATIVE_IMPRESSIONS.length})` : filterCat}
              </button>
            ))}
          </div>

          {/* Creative Impressions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATIVE_IMPRESSIONS
              .filter((imp) => impressionFilter === 'All' || imp.category === impressionFilter)
              .map((item) => {
                const isVideo = item.type === 'broadcast_video';

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                      isVideo 
                        ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0c1a2e] via-[#10243d] to-[#071322] text-white border-amber-400/40 shadow-xl'
                        : 'bg-[#fbfcfd] border-slate-200 hover:border-[#00aeef]/60 shadow-xs hover:shadow-xl text-slate-900'
                    }`}
                  >
                    <div>
                      {/* Image / Video Header Banner */}
                      <div 
                        className={`relative w-full overflow-hidden cursor-pointer ${
                          isVideo ? 'h-64 sm:h-72 bg-slate-950 border-b border-amber-400/20' : 'h-56 bg-slate-900 border-b border-slate-200'
                        }`}
                        onClick={() => setSelectedImpression(item)}
                      >
                        {isVideo ? (
                          <div className="relative w-full h-full p-4 flex flex-col justify-between bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:20px_20px]">
                            {/* TV Frame Mockup Top Bar */}
                            <div className="flex items-center justify-between z-10">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest shadow">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                SSBC BROADCAST
                              </span>
                              <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-amber-400/30">
                                Motion Graphics Campaign
                              </span>
                            </div>

                            {/* Center Animated TV Graphic Mockup */}
                            <div className="my-auto text-center space-y-2 py-4">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#00aeef] text-xs font-mono font-bold">
                                <Monitor className="w-3.5 h-3.5" />
                                <span>NCA e-Services Commercial</span>
                              </div>
                              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight">
                                "Go Digital • No More Delays"
                              </h4>
                              <p className="text-xs text-slate-300 max-w-md mx-auto">
                                National digital transformation campaign designed & animated for South Sudan Broadcasting Corporation TV.
                              </p>
                            </div>

                            {/* Bottom Strip: Key Message Tags */}
                            <div className="flex items-center justify-between text-[11px] text-slate-300 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10 z-10">
                              <span className="truncate font-semibold text-amber-300">Client: National Communication Authority</span>
                              <span className="text-[#00aeef] font-bold shrink-0 flex items-center gap-1">
                                <Play className="w-3 h-3 fill-current" /> Inspect Campaign
                              </span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 z-10">
                              <span className="px-2.5 py-1 rounded-md bg-[#0c1a2e]/80 backdrop-blur-sm border border-[#00aeef]/40 text-[#00aeef] text-[10px] font-bold uppercase tracking-wider shadow">
                                {item.category}
                              </span>
                            </div>

                            {/* Zoom Icon */}
                            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#00aeef] text-[#0c1a2e] shadow-lg">
                              <Maximize2 className="w-4 h-4" />
                            </div>

                            {/* Bottom Title Bar */}
                            <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between text-[11px]">
                              <span className="font-semibold truncate max-w-[220px]">{item.medium.split('&')[0]}</span>
                              <span className="text-[#00aeef] shrink-0 font-medium flex items-center gap-1">
                                <Eye className="w-3 h-3" /> Inspect 3D
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Content Details */}
                      <div className="p-5 space-y-3.5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              isVideo ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {item.badge}
                            </span>
                            <span className={`text-[10px] ${isVideo ? 'text-slate-400' : 'text-slate-500'}`}>
                              {item.client.split('•')[0]}
                            </span>
                          </div>
                          <h4 className={`text-base sm:text-lg font-serif font-bold leading-snug ${
                            isVideo ? 'text-white' : 'text-[#0c1a2e]'
                          }`}>
                            {item.title}
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${
                            isVideo ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {item.shortDesc}
                          </p>
                        </div>

                        {/* Video Campaign Scenes (If video) */}
                        {isVideo && item.scenes && (
                          <div className="space-y-2 pt-2 border-t border-slate-700/60">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                              Commercial Narrative & Core Scenes:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {item.scenes.slice(0, 4).map((sc, sIdx) => (
                                <div key={sIdx} className="p-2 rounded-lg bg-black/40 border border-slate-700/80">
                                  <div className="font-bold text-[#00aeef] text-[11px]">{sc.title}</div>
                                  <div className="text-[10px] text-slate-300 line-clamp-1">{sc.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Highlight Markers */}
                        {!isVideo && (
                          <div className="space-y-1.5 pt-1">
                            {item.highlights.slice(0, 3).map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                                <span className="leading-snug">{hl}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tools Tags */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {item.toolsUsed.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[9px] font-semibold px-2 py-0.5 rounded-md ${
                                isVideo
                                  ? 'bg-[#152a45] text-slate-300 border border-slate-700'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200'
                              }`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className={`p-5 pt-0 border-t ${isVideo ? 'border-slate-800' : 'border-slate-100'} flex items-center gap-2 mt-4`}>
                      <button
                        type="button"
                        onClick={() => setSelectedImpression(item)}
                        className={`flex-1 py-2 px-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                          isVideo
                            ? 'bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e]'
                            : 'bg-[#0c1a2e] hover:bg-[#152843] text-white'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Details</span>
                      </button>

                      <a
                        href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%20Creative%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20creative%20impression%20like%3A%20${encodeURIComponent(item.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                        title="WhatsApp Inquiry"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Quality Standards & Trust Badges */}
        <div className="bg-[#0c1a2e] text-white rounded-2xl p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00aeef]">
                <ShieldCheck className="w-4 h-4" />
                <span>Precision Color Fidelity</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                CMYK & Pantone color matching ensuring exact corporate brand guidelines across fliers, banners, and stickers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00aeef]">
                <Clock className="w-4 h-4" />
                <span>Enterprise Volume Scale</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Competitive volume discounting for enterprise orders exceeding 5,000+ fliers or 50+ event banners.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00aeef]">
                <Truck className="w-4 h-4" />
                <span>Nationwide Logistics</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Door-to-door delivery across Juba metropolitan and state capitals through our regional freight linkages.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Expanded Visual Aid & Printable Inspection */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in overflow-y-auto"
          onClick={() => setPreviewItem(null)}
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
                      {previewItem.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Visual Aid Inspection
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0c1a2e]">
                    {previewItem.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* View Switcher Bar in Modal */}
            {previewItem.realExample && (
              <div className="flex items-center justify-center gap-2 p-2.5 bg-slate-900 border-b border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalViewMode('schematic')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    modalViewMode === 'schematic'
                      ? 'bg-[#00aeef] text-[#0c1a2e] shadow-sm'
                      : 'text-slate-400 hover:text-white bg-slate-800/80'
                  }`}
                >
                  Vector Schematic Diagram
                </button>
                <button
                  type="button"
                  onClick={() => setModalViewMode('real')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    modalViewMode === 'real'
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                      : 'text-amber-300 hover:text-amber-200 bg-slate-800/80'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{previewItem.id === 'fliers-brochures' ? 'Graphics for Juba Auto Show Session' : 'Authentic Printed Production'}</span>
                </button>
              </div>
            )}

            {/* EXPANDED VISUAL AID GRAPHIC DISPLAY */}
            <div className="relative w-full bg-slate-950 min-h-[300px] flex items-center justify-center overflow-hidden border-b border-slate-800 p-4">
              {modalViewMode === 'real' && previewItem.realExample ? (
                <div className="flex flex-col items-center justify-center max-w-lg p-2 animate-in fade-in">
                  <div className="relative max-h-[360px] rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-black/60">
                    <img
                      src={previewItem.realExample.image}
                      alt={previewItem.realExample.title}
                      className="max-h-[360px] w-auto object-contain mx-auto"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                      }}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider mb-1">
                      {previewItem.realExample.badge || 'Session Production'}
                    </span>
                    <h5 className="text-sm font-bold text-white">{previewItem.realExample.title}</h5>
                    <p className="text-xs text-slate-300 max-w-md mx-auto mt-0.5">{previewItem.realExample.description}</p>
                  </div>
                </div>
              ) : (
                <PrintableVisualAid category={previewItem.category} variant="expanded" />
              )}
            </div>

            {/* Modal Body: How to Identify & Specs */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
              {/* Authentic Session Graphic Callout in Modal */}
              {previewItem.realExample && (
                <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Authentic Session Visual Aid:</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalViewMode('real')}
                      className="text-[11px] font-bold text-amber-300 hover:text-white underline"
                    >
                      View Real Graphic →
                    </button>
                  </div>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    <strong className="text-amber-200">{previewItem.realExample.title}:</strong> {previewItem.realExample.description}
                  </p>
                </div>
              )}

              {/* Visual Recognition Guide */}
              <div className="p-4 rounded-2xl bg-[#0c1a2e] text-white border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00aeef]">
                  <Eye className="w-4 h-4" />
                  <span>How to Identify this Printable Format:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {previewItem.visualCue}
                </p>
              </div>

              {/* Identification Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Visual Features & Anatomy:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {previewItem.keyVisualMarkers.map((marker, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                      <span className="leading-snug">{marker}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Technical Production Specifications:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Dimensions</span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">{previewItem.specs.dimensions}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Materials</span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">{previewItem.specs.materials}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Finishes</span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">{previewItem.specs.finishes}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Turnaround</span>
                    <span className="font-bold text-[#00aeef] mt-0.5 block">{previewItem.specs.turnaround}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Ready to print:</span> Fast-track dispatch available throughout Juba & South Sudan states.
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%2C%20I%20would%20like%20to%20order%20and%20request%20pricing%20for%3A%20${encodeURIComponent(previewItem.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>
                <button
                  onClick={() => {
                    const item = previewItem;
                    setPreviewItem(null);
                    handleInquire(item.title);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Creative Impressions by CBC Creative Team */}
      {selectedImpression && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in overflow-y-auto"
          onClick={() => setSelectedImpression(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedImpression.type === 'broadcast_video'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-[#0c1a2e] text-[#00aeef]'
                }`}>
                  {selectedImpression.type === 'broadcast_video' ? <Tv className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00aeef]">
                      {selectedImpression.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      CBC Creative Team Impression
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0c1a2e]">
                    {selectedImpression.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImpression(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Presentation Display */}
            {selectedImpression.type === 'broadcast_video' ? (
              <div className="relative w-full bg-gradient-to-br from-[#06111f] via-[#0c1a2e] to-[#081322] border-b border-slate-800 p-6 text-white">
                <div className="max-w-2xl mx-auto space-y-4">
                  {/* Top Broadcast Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest shadow">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      BROADCAST TELEVISION COMMERCIAL • SSBC
                    </span>
                    <span className="text-xs text-amber-300 font-bold">
                      National Communication Authority
                    </span>
                  </div>

                  {/* Main TV Frame Screen */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-black/80 shadow-2xl p-6 text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#00aeef] text-xs font-mono font-bold">
                      <Monitor className="w-4 h-4" />
                      <span>SSBC Television Spot: "Go Digital"</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      NCA e-Services Digital Transformation
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      "Digital Transformation for Efficient, Transparent, and Accessible Services" — Conceived, designed, animated, and mastered by CBC Creative Team for the National Communication Authority.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] text-amber-300 font-semibold">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10">Card & Mobile Money POS</span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10">Single Sign-On Portal</span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10">Instant Digital Verification</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full bg-slate-950 min-h-[340px] max-h-[480px] flex items-center justify-center overflow-hidden border-b border-slate-800 p-4">
                <img
                  src={selectedImpression.image}
                  alt={selectedImpression.title}
                  className="max-h-[440px] w-auto object-contain mx-auto rounded-xl shadow-2xl"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/gallery/glc-2026-stage-branding.jpg';
                  }}
                />
              </div>
            )}

            {/* Modal Body: Narrative, Highlights & Technical Production */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
              {/* Client & Medium Banner */}
              <div className="p-4 rounded-2xl bg-[#0c1a2e] text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00aeef] block">
                    Commissioned Client / Partner:
                  </span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {selectedImpression.client}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Creative Medium:
                  </span>
                  <span className="text-xs text-amber-300 font-semibold mt-0.5 block">
                    {selectedImpression.medium}
                  </span>
                </div>
              </div>

              {/* Campaign Story & Breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Concept & Execution Overview:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedImpression.shortDesc}
                </p>
              </div>

              {/* Storyboard / Scenes (If video campaign) */}
              {selectedImpression.scenes && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Broadcast Motion Graphics Storyboard & Keyframes:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedImpression.scenes.map((scene, scIdx) => (
                      <div key={scIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#0c1a2e]">{scene.title}</span>
                          <span className="text-[9px] font-bold uppercase text-[#00aeef] px-1.5 py-0.5 rounded bg-[#00aeef]/10">
                            {scene.iconLabel}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {scene.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Technical & Production Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedImpression.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Software Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Final Deliverables</span>
                  <span className="text-xs font-semibold text-slate-800">{selectedImpression.deliverables}</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Software & Pipeline</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedImpression.toolsUsed.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">CBC Creative Team:</span> Ready to architect bespoke 3D staging, spatial renders, and broadcast campaigns.
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%20Creative%20Team%2C%20I%20would%20like%20to%20discuss%20commissioning%20work%20similar%20to%3A%20${encodeURIComponent(selectedImpression.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const item = selectedImpression;
                    setSelectedImpression(null);
                    handleInquire(`CBC Creative Team Impression: ${item.title}`);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
