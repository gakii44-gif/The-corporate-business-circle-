import React, { useState, useMemo } from 'react';
import { CBC_CLIENT_CATEGORIES, CBC_CLIENTS_LIST } from '../data/clientsData';
import { CBCClient } from '../types';
import { 
  Building2, 
  Handshake, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Search,
  ExternalLink,
  Zap,
  Cpu,
  Building,
  Landmark,
  Radio,
  Signal,
  Shield,
  Car,
  Hotel,
  Wine,
  Film,
  Plane,
  Anchor,
  Printer,
  Grid,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface PartnersSectionProps {
  onPartnerWithUs?: () => void;
  onContactUs?: () => void;
  onOpenPartnershipInquiry?: () => void;
  onDownloadProspectus?: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onPartnerWithUs,
  onContactUs,
  onOpenPartnershipInquiry,
  onDownloadProspectus,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grid');
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handlePartnerClick = onPartnerWithUs || onOpenPartnershipInquiry;
  const handleContactClick = onContactUs || onDownloadProspectus;

  const handleImageError = (clientId: string) => {
    setFailedLogos((prev) => ({ ...prev, [clientId]: true }));
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'energy':
        return Zap;
      case 'technology':
        return Cpu;
      case 'construction':
        return Building;
      case 'insurance':
        return ShieldCheck;
      case 'financial':
        return Landmark;
      case 'printing':
        return Printer;
      case 'advertising-media':
        return Radio;
      case 'telecommunications':
        return Signal;
      case 'security':
        return Shield;
      case 'auto':
        return Car;
      case 'hospitality':
        return Hotel;
      case 'government':
        return Building2;
      case 'beverages':
        return Wine;
      case 'entertainment':
        return Film;
      case 'travel':
        return Plane;
      case 'clearing-forwarding':
        return Anchor;
      default:
        return Building2;
    }
  };

  // Filtered clients list
  const filteredClients = useMemo(() => {
    return CBC_CLIENTS_LIST.filter((client) => {
      if (activeCategory === 'featured' && !client.featured) return false;
      if (activeCategory !== 'all' && activeCategory !== 'featured' && client.categoryId !== activeCategory) {
        return false;
      }
      if (searchTerm.trim() === '') return true;
      const term = searchTerm.toLowerCase();
      const matchesName = client.name.toLowerCase().includes(term);
      const matchesCat = client.categoryName.toLowerCase().includes(term);
      const matchesDesc = client.description ? client.description.toLowerCase().includes(term) : false;
      return matchesName || matchesCat || matchesDesc;
    });
  }, [activeCategory, searchTerm]);

  // Generate clean initials for corporate monogram
  const getInitials = (name: string) => {
    const cleaned = name
      .replace(/Co\.?\s*Ltd\.?/gi, '')
      .replace(/Limited/gi, '')
      .replace(/South Sudan/gi, '')
      .replace(/\(Solar\)/gi, '')
      .replace(/\(NRA\)/gi, '')
      .trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <section 
      id="partners" 
      className="py-20 lg:py-28 bg-[#fbfcfd] text-slate-900 border-t border-slate-200"
      aria-label="Our Clients and Institutional Network"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Handshake className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Institutional Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            OUR CLIENTS
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-800">
            Trusted by businesses, organizations and brands.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The Corporate Business Circle convenes top-tier multinationals, banking institutions,
            statutory revenue authorities, telecommunications operators, and leading regional brands across South Sudan and Africa.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by client name, bank, energy, media, or sector..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00aeef]/40 focus:border-[#00aeef] transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* View Switch & Category Navigation */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/80">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0c1a2e] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Logo Grid</span>
              </button>
              <button
                onClick={() => setViewMode('grouped')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  viewMode === 'grouped'
                    ? 'bg-white text-[#0c1a2e] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>By Sector</span>
              </button>
            </div>

            {/* Total Count Metrics */}
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <span className="font-bold text-[#0c1a2e]">{filteredClients.length}</span>
              <span>of {CBC_CLIENTS_LIST.length} clients shown</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>17 Industry Sectors</span>
            </div>
          </div>

          {/* Sector Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#0c1a2e] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Clients ({CBC_CLIENTS_LIST.length})
            </button>

            <button
              onClick={() => setActiveCategory('featured')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'featured'
                  ? 'bg-[#00aeef] text-[#0c1a2e] shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#00aeef]" />
              <span>Verified Brand Logos</span>
            </button>

            {CBC_CLIENT_CATEGORIES.map((cat) => {
              const count = CBC_CLIENTS_LIST.filter(c => c.categoryId === cat.id).length;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0c1a2e] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.category.replace(' Companies', '').replace(' Industry', '')} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode 1: Unified Logo Card Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-16">
            {filteredClients.map((client) => {
              const CategoryIcon = getCategoryIcon(client.categoryId);
              const hasValidLogo = client.logo && !failedLogos[client.id];
              const initials = getInitials(client.name);

              return (
                <div
                  key={client.id}
                  className="group relative bg-white rounded-xl border border-slate-200 hover:border-[#00aeef]/60 hover:shadow-md transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between"
                >
                  <div>
                    {/* Official Logo Slot with Fixed Proportions */}
                    <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2 rounded-lg bg-slate-50/70 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all overflow-hidden mb-3">
                      {hasValidLogo ? (
                        <img
                          src={client.logo}
                          alt={`${client.name} official logo`}
                          className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={() => handleImageError(client.id)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center p-1">
                          <div className="w-10 h-10 rounded-lg bg-[#0c1a2e]/5 border border-slate-200/80 flex items-center justify-center text-[#0c1a2e] font-serif font-bold text-sm tracking-wider group-hover:bg-[#0c1a2e] group-hover:text-white transition-colors">
                            {initials}
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#00aeef]" />
                            <span>Client</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Company Name */}
                    <h3 
                      className="text-xs sm:text-sm font-semibold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug line-clamp-2 mb-1"
                      title={client.name}
                    >
                      {client.name}
                    </h3>

                    {/* Category Label */}
                    <div className="text-[11px] text-slate-500 font-medium line-clamp-1">
                      {client.categoryName.replace(' Companies', '').replace(' Industry', '')}
                    </div>

                    {/* Optional Short Description */}
                    {client.description && (
                      <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {client.description}
                      </p>
                    )}
                  </div>

                  {/* Optional Website Link Affordance */}
                  {client.websiteUrl && (
                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-[#00aeef] transition-colors"
                        aria-label={`Visit official website for ${client.name}`}
                      >
                        <span>Official Website</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Grouped by Industry Sectors */}
        {viewMode === 'grouped' && (
          <div className="space-y-12 mb-16">
            {CBC_CLIENT_CATEGORIES.map((cat) => {
              const clientsInCat = CBC_CLIENTS_LIST.filter(c => c.categoryId === cat.id);
              if (clientsInCat.length === 0) return null;
              const Icon = getCategoryIcon(cat.id);

              return (
                <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-[#0c1a2e]">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-slate-500 max-w-xl">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full w-fit">
                      {clientsInCat.length} Organizations
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {clientsInCat.map((client) => {
                      const hasValidLogo = client.logo && !failedLogos[client.id];
                      const initials = getInitials(client.name);

                      return (
                        <div
                          key={client.id}
                          className="group relative bg-[#fbfcfd] rounded-xl border border-slate-200 hover:border-[#00aeef]/60 hover:shadow-md transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between"
                        >
                          <div>
                            <div className="h-20 w-full flex items-center justify-center p-2 rounded-lg bg-white border border-slate-100 group-hover:border-slate-200 transition-all overflow-hidden mb-2.5">
                              {hasValidLogo ? (
                                <img
                                  src={client.logo}
                                  alt={`${client.name} official logo`}
                                  className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                                  loading="lazy"
                                  onError={() => handleImageError(client.id)}
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-center p-1">
                                  <div className="w-8 h-8 rounded-lg bg-[#0c1a2e]/5 border border-slate-200/80 flex items-center justify-center text-[#0c1a2e] font-serif font-bold text-xs tracking-wider group-hover:bg-[#0c1a2e] group-hover:text-white transition-colors">
                                    {initials}
                                  </div>
                                  <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                                    Verified
                                  </span>
                                </div>
                              )}
                            </div>

                            <h4 
                              className="text-xs font-semibold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug line-clamp-2"
                              title={client.name}
                            >
                              {client.name}
                            </h4>

                            {client.description && (
                              <p className="text-[10px] text-slate-400 line-clamp-1 mt-1">
                                {client.description}
                              </p>
                            )}
                          </div>

                          {client.websiteUrl && (
                            <div className="pt-2 mt-2 border-t border-slate-100">
                              <a
                                href={client.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-[#00aeef] transition-colors"
                              >
                                <span>Website</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State for Search */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 mb-16">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0c1a2e] mb-1">No matching clients found</h3>
            <p className="text-xs text-slate-500 mb-4">
              Try searching with another company name or resetting your industry filter.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="px-4 py-2 rounded-lg bg-[#0c1a2e] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Highlight Banner: Institutional Partnership Invitation */}
        <div className="bg-[#0c1a2e] text-white rounded-2xl p-8 sm:p-12 border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112239] border border-slate-700 text-[11px] font-bold uppercase tracking-widest text-[#00aeef]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CYCLE OF GREAT MINDS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              Collaborate With a Respected Corporate Organization in South Sudan & Africa
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              We collaborate with corporate enterprises, trade attachés, industry associations, and government bodies
              to facilitate strategic marketing, high-impact events, media placement, and institutional partnerships.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handlePartnerClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>PARTNER WITH US</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#112239] hover:bg-[#152a47] border border-slate-700 hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center"
              >
                CONTACT SECRETARIAT
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
