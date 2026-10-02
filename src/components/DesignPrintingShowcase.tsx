import React, { useState } from 'react';
import { CBC_CONTACT } from '../data/mockData';
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
  Image as ImageIcon
} from 'lucide-react';

export interface PrintWorkItem {
  id: string;
  title: string;
  category: 'Fliers & Brochures' | 'Banners & Backdrops' | 'Stickers & Labels' | 'Apparel & Uniforms' | 'Architectural & Framing';
  shortDesc: string;
  image: string;
  specs: {
    dimensions: string;
    materials: string;
    finishes: string;
    turnaround: string;
  };
  features: string[];
  badge?: string;
}

export const PRINTING_WORKS: PrintWorkItem[] = [
  {
    id: 'fliers-brochures',
    title: 'Corporate Fliers & Tri-Fold Brochures',
    category: 'Fliers & Brochures',
    shortDesc: 'Vibrant full-color promotional flyers, bi-fold and tri-fold corporate marketing brochures engineered for maximum visual recall.',
    image: '/assets/branding-printing/fliers-brochures.jpg',
    badge: 'Popular for Events',
    specs: {
      dimensions: 'A5, A4, DL (99x210mm) & Custom Formats',
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
  },
  {
    id: 'banners-backdrops',
    title: 'Roll-Up Banners, Teardrops & Stage Backdrops',
    category: 'Banners & Backdrops',
    shortDesc: 'Retractable pull-up banners, aerodynamic outdoor teardrop flags, and large-format conference media step-and-repeat backdrops.',
    image: '/assets/branding-printing/banners-backdrops.jpg',
    badge: 'Executive Standard',
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
  },
  {
    id: 'stickers-decals',
    title: 'Custom Die-Cut Vinyl Stickers & Packaging Labels',
    category: 'Stickers & Labels',
    shortDesc: 'Precision laser die-cut waterproof vinyl stickers, commercial product labels, beverage bottle wraps, and vehicle fleet decals.',
    image: '/assets/branding-printing/stickers-decals.jpg',
    badge: '100% Waterproof',
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
  },
  {
    id: 'apparel-uniforms',
    title: 'Custom Corporate Apparel & African Fabric Uniforms',
    category: 'Apparel & Uniforms',
    shortDesc: 'Tailored corporate African printed fabric shirts, dresses, embroidered executive polo shirts, and conference delegate caps.',
    image: '/assets/branding-printing/apparel-uniforms.jpg',
    badge: 'Tailored Excellence',
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
  },
  {
    id: 'architectural-framing',
    title: 'Architectural Masterplan & Institutional Plaques',
    category: 'Architectural & Framing',
    shortDesc: 'Executive gilded presentation frames, architectural renders, recognition plaques, and commemorative institutional awards.',
    image: '/assets/branding-printing/framing-displays.jpg',
    badge: 'Executive Presentation',
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
  },
];

interface DesignPrintingShowcaseProps {
  onRequestQuote?: (serviceTitle: string) => void;
}

export const DesignPrintingShowcase: React.FC<DesignPrintingShowcaseProps> = ({
  onRequestQuote,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [previewItem, setPreviewItem] = useState<PrintWorkItem | null>(null);

  const filters = [
    'All',
    'Fliers & Brochures',
    'Banners & Backdrops',
    'Stickers & Labels',
    'Apparel & Uniforms',
    'Architectural & Framing',
  ];

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
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Printer className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Turnkey Production & Brand Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Design, Brand, and Printing Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From high-impact promotional fliers, pull-up banners, and waterproof die-cut stickers 
            to custom corporate African fabric uniforms and executive architectural masterplan displays.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === f
                  ? 'bg-[#0c1a2e] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f === 'All' ? 'All Printing Works (5)' : f}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#fbfcfd] rounded-2xl border border-slate-200 hover:border-[#00aeef]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom Trigger */}
                <div 
                  className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setPreviewItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 text-[#0c1a2e] text-xs font-bold backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5 text-[#00aeef]" />
                      <span>Inspect High-Res Print</span>
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0c1a2e]/90 backdrop-blur-xs border border-[#00aeef]/30 text-[10px] font-bold uppercase tracking-wider text-[#00aeef]">
                      {item.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/40 text-white text-[10px] font-semibold backdrop-blur-xs">
                    {item.category}
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
                  className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>

                <button
                  onClick={() => handleInquire(item.title)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-[#0c1a2e] hover:bg-[#152a47] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Bid</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00aeef]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Production Capabilities Bar */}
        <div className="bg-[#0c1a2e] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-[#00aeef] text-xs font-bold uppercase tracking-wider">
              Commercial Print Infrastructure
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Industrial Print Press & Rapid Turnaround in South Sudan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate dedicated commercial offset machines, high-resolution large-format plotters, 
              precision laser contour cutters, and automated embroidery lines in Juba to guarantee on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#00aeef] text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>24–48 Hour Rush</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Emergency printing capabilities in Juba for corporate press events and last-minute summit rollouts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#00aeef] text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Color Calibration</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                CMYK & Pantone color matching ensuring exact corporate brand guidelines across fliers, banners, and stickers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#00aeef] text-xs font-bold">
                <Tag className="w-4 h-4" />
                <span>Bulk Corporate Tiers</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Competitive volume discounting for enterprise orders exceeding 5,000+ fliers or 50+ event banners.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#00aeef] text-xs font-bold">
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

      {/* Lightbox Modal for Print Preview */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00aeef]">
                  {previewItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#0c1a2e]">
                  {previewItem.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={previewItem.image}
                alt={previewItem.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Specifications:</span> {previewItem.specs.dimensions} · {previewItem.specs.materials} · {previewItem.specs.finishes}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20CBC%2C%20I%20would%20like%20to%20order%3A%20${encodeURIComponent(previewItem.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase"
                >
                  WhatsApp Quote
                </a>
                <button
                  onClick={() => {
                    const item = previewItem;
                    setPreviewItem(null);
                    handleInquire(item.title);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase"
                >
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
