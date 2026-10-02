import React, { useEffect } from 'react';
import { CBCService } from '../types';
import { CBC_SERVICES, CBC_CONTACT } from '../data/mockData';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Send,
  Sparkles,
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
  Truck
} from 'lucide-react';

interface ServiceSpecificationModalProps {
  isOpen: boolean;
  service: CBCService | null;
  onClose: () => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
  onSelectServiceChange?: (service: CBCService) => void;
}

export const ServiceSpecificationModal: React.FC<ServiceSpecificationModalProps> = ({
  isOpen,
  service,
  onClose,
  onSelectServiceForInquiry,
  onSelectServiceChange,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  // Find index in CBC_SERVICES
  const currentIndex = CBC_SERVICES.findIndex((s) => s.id === service.id);
  const totalServices = CBC_SERVICES.length;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalServices) % totalServices;
    if (onSelectServiceChange) {
      onSelectServiceChange(CBC_SERVICES[prevIndex]);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalServices;
    if (onSelectServiceChange) {
      onSelectServiceChange(CBC_SERVICES[nextIndex]);
    }
  };

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

  const Icon = getIcon(service.iconName);

  const handleInquireClick = () => {
    onClose();
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.title);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Corporate Business Circle Secretariat, I would like to inquire about specifications and corporate proposal for: "${service.title}".`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-spec-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 text-slate-900 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00aeef]">
                  Specification Dossier
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[11px] font-semibold text-slate-500">
                  Service {currentIndex + 1} of {totalServices}
                </span>
              </div>
              <h2 id="service-spec-title" className="text-lg sm:text-xl font-serif font-bold text-[#0c1a2e] leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Next / Prev Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded text-slate-600 hover:text-[#0c1a2e] hover:bg-white transition-colors"
                title="Previous Service"
                aria-label="Previous Service"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded text-slate-600 hover:text-[#0c1a2e] hover:bg-white transition-colors"
                title="Next Service"
                aria-label="Next Service"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close specification modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-8 flex-1 overflow-y-auto">
          
          {/* Tagline & Badge Banner */}
          <div className="bg-gradient-to-r from-[#0c1a2e] to-[#152a47] rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#00aeef]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-2 max-w-2xl">
              {service.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#00aeef] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{service.badge}</span>
                </div>
              )}
              <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                {service.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {service.shortDescription}
              </p>
            </div>
          </div>

          {/* Detailed Scope of Work */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              01. Scope of Work & Strategic Execution
            </h4>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>{service.fullDescription}</p>
            </div>
          </div>

          {/* Sub-services / Focus Areas (if available) */}
          {service.subServices && service.subServices.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                02. Core Service Pillars & Workstreams
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.subServices.map((sub, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-md bg-[#00aeef]/10 text-[#00aeef] flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#0c1a2e] leading-snug">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications & Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              03. Detailed Deliverables & Specifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00aeef]/50 transition-colors flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0c1a2e] block mb-0.5">
                      Specification Component #{idx + 1}
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Showcase Callout for Design, Brand, and Printing */}
          {service.id === 'design-brand-printing' && (
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#0c1a2e]/5 to-[#00aeef]/10 border border-[#00aeef]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0c1a2e] text-[#00aeef] flex items-center justify-center flex-shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0c1a2e]">
                    Commercial Printing Works & Photography Showcase
                  </h5>
                  <p className="text-[11px] text-slate-600">
                    Inspect high-resolution fliers, pull-up banners, die-cut stickers, tailored corporate uniforms, and architectural displays.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  const el = document.getElementById('design-printing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#0c1a2e] hover:bg-[#152a47] text-white text-xs font-bold whitespace-nowrap flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>View Printing Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00aeef]" />
              </button>
            </div>
          )}

          {/* Operational Quality Standards & Protocol */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              04. Institutional Quality Standards & SLA
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c1a2e]">
                  <Clock className="w-4 h-4 text-[#00aeef]" />
                  <span>Rapid Turnaround</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Fast-track project initiation within 48–72 hours with milestone schedules and proof-of-work reporting.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c1a2e]">
                  <MapPin className="w-4 h-4 text-[#00aeef]" />
                  <span>National Coverage</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  On-ground operational logistics across Juba and major regional state capitals in South Sudan.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c1a2e]">
                  <ShieldCheck className="w-4 h-4 text-[#00aeef]" />
                  <span>Compliance & NDA</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Governed under strict institutional confidentiality agreements, EHS policies, and statutory compliance.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions & Navigation */}
        <div className="sticky bottom-0 z-20 px-5 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrev}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Service</span>
            </button>
            <button
              onClick={handleNext}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Next Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={handleInquireClick}
              className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Proposal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
