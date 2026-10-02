import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CBC_CONTACT } from '../data/mockData';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Handshake,
  UserPlus, 
  ChevronRight,
  Globe,
  Camera,
  Facebook
} from 'lucide-react';

interface NavbarProps {
  onOpenMembershipModal: () => void;
  onOpenEventModal?: () => void;
  onOpenProspectusModal: () => void;
  onOpenEhsModal?: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMembershipModal,
  onOpenProspectusModal,
  onOpenEhsModal,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', mobileLabel: 'ABOUT CBC' },
    { id: 'services', label: 'Services', mobileLabel: 'SERVICES' },
    { id: 'dignitary-milestones', label: 'VIP Milestones', mobileLabel: 'VIP MILESTONES' },
    { id: 'partners', label: 'Clients & Network', mobileLabel: 'CLIENTS & NETWORK' },
    { id: 'events', label: 'Events', mobileLabel: 'EVENTS' },
    { id: 'event-highlights', label: 'Media', mobileLabel: 'BROADCAST & MEDIA' },
    { id: 'why-cbc', label: 'Why CBC', mobileLabel: 'WHY CBC' },
    { id: 'gallery', label: 'Gallery', mobileLabel: 'GALLERY' },
    { id: 'contact', label: 'Contact', mobileLabel: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Secretariat Contact Bar (Desktop Only) */}
      <div className="bg-[#060e1a] text-slate-300 text-xs border-b border-slate-800/80 px-4 py-1.5 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#00aeef]/20 text-[#00aeef] border border-[#00aeef]/40">
              SECRETARIAT
            </span>
            <span className="text-slate-300 font-medium">
              Corporate Solutions for Enterprises in South Sudan & Africa
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300 text-[11px]">
            <a
              href={`mailto:${CBC_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-[#00aeef] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>{CBC_CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CBC_CONTACT.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#00aeef] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>{CBC_CONTACT.phonePrimary}</span>
            </a>
            <a
              href={CBC_CONTACT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-white transition-colors pl-2 border-l border-slate-700"
              title="Official Facebook Page"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
            </a>
            <a
              href={`https://wa.me/${CBC_CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors pl-2 border-l border-slate-700 font-semibold"
              title="Chat on WhatsApp"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Compact 25% height reduction on mobile */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c1a2e]/98 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-slate-800'
            : 'bg-[#0c1a2e] py-2.5 sm:py-3.5 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00aeef] rounded"
              aria-label="Corporate Business Circle Home"
            >
              <Logo variant="dark" size="sm" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium tracking-normal transition-all ${
                      isActive
                        ? 'text-[#00aeef] bg-slate-800/90 font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action: Primary Button PARTNER WITH US */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenMembershipModal}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0c1a2e] bg-[#00aeef] hover:bg-[#38bdf8] rounded-md shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 group"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Header Right: [PARTNER WITH US] + [HAMBURGER] */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenMembershipModal}
                className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0c1a2e] bg-[#00aeef] hover:bg-[#38bdf8] rounded-md transition-all"
              >
                Partner With Us
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00aeef]"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1a2e] border-t border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Main Navigation Hierarchy */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-[#00aeef] bg-slate-800/90 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{link.mobileLabel}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                );
              })}
            </div>

            {/* Separate CTA Buttons */}
            <div className="pt-4 mt-3 border-t border-slate-800 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('events');
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Attend an Event</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMembershipModal();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0c1a2e] bg-[#00aeef] hover:bg-[#38bdf8] rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Handshake className="w-3.5 h-3.5" />
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Compact Contact Footer within Drawer */}
            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00aeef] flex-shrink-0" />
                <a href={`mailto:${CBC_CONTACT.email}`} className="hover:text-[#00aeef] truncate">
                  {CBC_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00aeef] flex-shrink-0" />
                <a href={`tel:${CBC_CONTACT.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white">
                  {CBC_CONTACT.phonePrimary}
                </a>
                <span className="text-slate-600">•</span>
                <a 
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
