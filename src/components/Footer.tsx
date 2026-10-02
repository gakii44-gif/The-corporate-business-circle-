import React, { useState } from 'react';
import { Logo } from './Logo';
import { CBC_CONTACT } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Globe, 
  Facebook,
  CheckCircle2,
  Lock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenMembershipModal: () => void;
  onOpenProspectusModal: () => void;
  onOpenPrivacyModal?: () => void;
  onOpenEhsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenMembershipModal,
  onOpenProspectusModal,
  onOpenPrivacyModal,
  onOpenEhsModal,
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail.trim()) {
      setSubscribed(true);
      setSubscriberEmail('');
    }
  };

  return (
    <footer className="bg-[#060e1a] text-slate-400 text-xs border-t border-slate-800" aria-label="Footer">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <div className="inline-block px-2.5 py-1 rounded bg-[#00aeef]/10 border border-[#00aeef]/30 text-[#00aeef] text-[10px] font-bold uppercase tracking-wider">
              &ldquo;The Cycle of Great Minds&rdquo;
            </div>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Providing corporate solutions to corporate companies operating in South Sudan and Africa at large.
              Started in 2022 with the Juba Auto Show; officially registered on the 20th of September 2023.
            </p>

            {/* Social & Media Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CBC_CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#1877F2] hover:bg-[#1877F2] text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                title="Follow Corporate Business Circle on Facebook"
                aria-label="Official Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span className="text-[11px] font-semibold">Facebook</span>
              </a>

              <a
                href={`https://wa.me/${CBC_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                title="Contact CBC Secretariat on WhatsApp"
                aria-label="Official WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-[11px] font-semibold">WhatsApp</span>
              </a>

              <a
                href={CBC_CONTACT.social.pixieset}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00aeef] hover:bg-[#00aeef] hover:text-[#0c1a2e] text-slate-300 transition-all flex items-center gap-1.5"
                title="View Official GLC Photo Gallery on Pixieset"
                aria-label="Official Media Album on Pixieset"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[11px] font-semibold">Media Album</span>
              </a>
            </div>

            <div className="pt-3 text-slate-400 text-[11px] space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                <a
                  href={CBC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#00aeef] transition-colors leading-relaxed"
                  title="View pinned location on Google Maps"
                >
                  <span>{CBC_CONTACT.address}</span>
                  <span className="ml-1.5 text-[10px] text-[#00aeef] font-semibold underline">
                    (Google Maps Pin)
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00aeef]" />
                <a href={`mailto:${CBC_CONTACT.email}`} className="text-[#00aeef] hover:underline font-medium">
                  {CBC_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00aeef]" />
                <a href={`tel:${CBC_CONTACT.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white">
                  {CBC_CONTACT.phonePrimary}
                </a>
                <span className="text-slate-500">•</span>
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wide uppercase text-[#00aeef]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left text-white font-semibold"
                >
                  Corporate Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('design-printing')}
                  className="hover:text-[#00aeef] transition-colors text-left text-slate-300"
                >
                  Design, Brand & Printing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About CBC & History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-white transition-colors text-left"
                >
                  Clients & Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors text-left"
                >
                  Events & Auto Show
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('event-highlights')}
                  className="hover:text-white transition-colors text-left"
                >
                  Video Broadcasts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-cbc')}
                  className="hover:text-white transition-colors text-left"
                >
                  Why Corporate Business Circle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors text-[#00aeef] text-left"
                >
                  Summit Photos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Services Suite (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wide uppercase text-[#00aeef]">
              Services Spectrum
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Marketing (Product, Social Media, Activation)</li>
              <li>Business Proposal Writing & Tenders</li>
              <li>Corporate Media Engagement & PR</li>
              <li>Public Relation Strategies</li>
              <li>Capacity Building & Training</li>
              <li>General Events Management</li>
              <li>
                <button 
                  onClick={() => onNavigate('design-printing')}
                  className="hover:text-[#00aeef] transition-colors text-left text-white font-medium"
                >
                  Design, Brand, and Printing (Fliers, Banners, Stickers) →
                </button>
              </li>
              <li>Company Brand Ambassadors Signings</li>
              <li>Jingle Production & Adverts</li>
              <li>Outside Catering & VIP Dining</li>
              <li>General Supply & Logistics</li>
            </ul>
          </div>

          {/* Col 4: Dispatch & Standards (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wide uppercase text-[#00aeef]">
              Corporate Governance
            </h4>
            <p className="text-[11px] text-slate-300">
              We uphold the highest levels of honesty, creativity, sustainability, accountability, and humility.
            </p>
            {onOpenEhsModal && (
              <button
                onClick={onOpenEhsModal}
                className="w-full py-2 px-3 text-left rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00aeef] text-xs text-[#00aeef] flex items-center justify-between transition-colors"
              >
                <span>Environment & Health Policy</span>
                <span className="text-[10px] text-slate-400">View EHS</span>
              </button>
            )}

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed to CBC Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <input
                  type="email"
                  required
                  placeholder="corporate@company.com"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00aeef]"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#00aeef] hover:bg-[#38bdf8] text-[#0c1a2e] font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Subscribe to Dispatch
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar with Registration & Privacy Link */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} Corporate Business Circle (CBC). All rights reserved.
            </div>
            <div className="text-[10px] text-slate-400">
              Republic of South Sudan • Officially Registered 20th September 2023 • Ministry of Justice & Constitutional Affairs
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {onOpenEhsModal && (
              <button
                onClick={onOpenEhsModal}
                className="hover:text-white transition-colors"
              >
                EHS Policy
              </button>
            )}

            {onOpenPrivacyModal && (
              <button
                onClick={onOpenPrivacyModal}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Privacy & Protection Policy</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-[#00aeef] transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

