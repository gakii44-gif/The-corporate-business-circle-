import React, { useState } from 'react';
import { CBC_SERVICES, CBC_CONTACT } from '../data/mockData';
import { CBCService } from '../types';
import { ServiceSpecificationModal } from './ServiceSpecificationModal';
import { 
  Megaphone, 
  FileText, 
  Tv, 
  ShieldAlert, 
  GraduationCap, 
  CalendarRange, 
  Palette, 
  Users, 
  Headphones, 
  Utensils, 
  Truck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
  onOpenProspectusModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
  onOpenProspectusModal,
}) => {
  const [selectedService, setSelectedService] = useState<CBCService>(CBC_SERVICES[0]);
  const [specificationModalService, setSpecificationModalService] = useState<CBCService | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'All' | 'Marketing & Media' | 'Events & PR' | 'Corporate Support'>('All');

  // Map icon name to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return Megaphone;
      case 'FileText':
        return FileText;
      case 'Tv':
        return Tv;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'GraduationCap':
        return GraduationCap;
      case 'CalendarRange':
        return CalendarRange;
      case 'Palette':
        return Palette;
      case 'Users':
        return Users;
      case 'Headphones':
        return Headphones;
      case 'Utensils':
        return Utensils;
      case 'Truck':
        return Truck;
      default:
        return Sparkles;
    }
  };

  const filterService = (service: CBCService) => {
    if (activeCategoryFilter === 'All') return true;
    if (activeCategoryFilter === 'Marketing & Media') {
      return ['marketing', 'corporate-media-engagement', 'jingle-production-adverts', 'design-brand-printing', 'brand-ambassadors-signings'].includes(service.id);
    }
    if (activeCategoryFilter === 'Events & PR') {
      return ['general-events-management', 'public-relation-strategies', 'outside-catering'].includes(service.id);
    }
    if (activeCategoryFilter === 'Corporate Support') {
      return ['business-proposal-writing', 'capacity-building-training', 'general-supply'].includes(service.id);
    }
    return true;
  };

  const filteredServices = CBC_SERVICES.filter(filterService);

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8f9fb] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <Layers className="w-4 h-4 text-[#00aeef]" />
            <span>Corporate Solutions Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            Our Corporate Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We use our experience in dealing with Corporate Companies to ensure that we provide
            tailor-made Business Solutions that enable companies to achieve both their short-term
            and long-term visions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(['All', 'Marketing & Media', 'Events & PR', 'Corporate Support'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategoryFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategoryFilter === filter
                    ? 'bg-[#0c1a2e] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Interactive Solution Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Scrollable / Selectable List of Services */}
          <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredServices.map((service) => {
              const Icon = getIcon(service.iconName);
              const isSelected = selectedService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0c1a2e] text-white border-[#00aeef] shadow-lg translate-x-1'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#00aeef] text-[#0c1a2e]'
                          : 'bg-slate-100 text-slate-700 group-hover:text-[#00aeef]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-serif font-bold leading-tight">
                          {service.title}
                        </h4>
                        {service.badge && (
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              isSelected
                                ? 'bg-[#00aeef]/20 text-[#00aeef] border border-[#00aeef]/40'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-[11px] line-clamp-1 mt-0.5 ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform flex-shrink-0 ml-2 ${
                      isSelected
                        ? 'text-[#00aeef] translate-x-1'
                        : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Display Card */}
          <div className="lg:col-span-7 bg-[#0c1a2e] text-white rounded-2xl p-8 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00aeef] bg-[#152843] px-3 py-1 rounded border border-[#00aeef]/30">
                      Tailored Corporate Solution
                    </span>
                    {selectedService.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white pt-2">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Tagline & Detailed Overview */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#00aeef]">
                  {selectedService.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Sub-Services Highlight (if applicable, e.g. Marketing) */}
              {selectedService.subServices && selectedService.subServices.length > 0 && (
                <div className="p-4 rounded-xl bg-[#152843] border border-slate-700 space-y-2.5">
                  <div className="text-xs uppercase font-bold text-[#00aeef] tracking-wider">
                    Core Specializations:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {selectedService.subServices.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#0c1a2e] border border-slate-700 text-white font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef]"></span>
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              <div className="space-y-3 pt-1">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Key Corporate Deliverables & Value Points:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00aeef] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Row */}
              <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Ready to deploy this solution for your enterprise?
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setSpecificationModalService(selectedService)}
                    className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 border border-white/10"
                    title="View detailed specifications and deliverables"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#00aeef]" />
                    <span>View Specifications</span>
                  </button>

                  <a
                    href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%2C%20I%20would%20like%20to%20inquire%20about%20your%20service%3A%20${encodeURIComponent(selectedService.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <button
                    onClick={() => handleInquire(selectedService.title)}
                    className="px-5 py-2.5 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11 Services Grid Quick-Summary for Scannability */}
        <div className="mt-8 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#00aeef]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
              <Sparkles className="w-3 h-3 text-[#00aeef]" />
              <span>Interactive Service Catalog</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a2e]">
              Complete 11-Service Spectrum
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any service card below to open its comprehensive specification dossier, deliverables, pillars, and SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CBC_SERVICES.map((serv, idx) => {
              const Icon = getIcon(serv.iconName);
              const isCurrentlySelected = selectedService.id === serv.id;

              return (
                <div
                  key={serv.id}
                  onClick={() => {
                    setSelectedService(serv);
                    setSpecificationModalService(serv);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedService(serv);
                      setSpecificationModalService(serv);
                    }
                  }}
                  className={`p-4 sm:p-5 rounded-xl bg-white border transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[#00aeef] ${
                    isCurrentlySelected 
                      ? 'border-[#00aeef] shadow-md ring-1 ring-[#00aeef]/30' 
                      : 'border-slate-200 hover:border-[#00aeef]/70 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Subtle top indicator for index */}
                  <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-300 group-hover:text-[#00aeef] transition-colors">
                    #{String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#00aeef] group-hover:text-[#0c1a2e] transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    {serv.badge && (
                      <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#00aeef] bg-[#00aeef]/10 px-2 py-0.5 rounded border border-[#00aeef]/20">
                        {serv.badge}
                      </span>
                    )}

                    <h4 className="text-sm font-serif font-bold text-[#0c1a2e] group-hover:text-[#00aeef] transition-colors leading-snug">
                      {serv.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {serv.shortDescription}
                    </p>

                    <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3 h-3 text-[#00aeef]" />
                      <span>{serv.deliverables.length} Key Specifications Included</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00aeef] group-hover:text-[#0c1a2e] transition-colors">
                    <span className="group-hover:underline">View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Specification Modal */}
      <ServiceSpecificationModal
        isOpen={specificationModalService !== null}
        service={specificationModalService}
        onClose={() => setSpecificationModalService(null)}
        onSelectServiceForInquiry={handleInquire}
        onSelectServiceChange={(newService) => {
          setSpecificationModalService(newService);
          setSelectedService(newService);
        }}
      />
    </section>
  );
};
