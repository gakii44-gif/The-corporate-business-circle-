import React, { useState, useRef, useEffect } from 'react';
import { CBC_CONTACT } from '../data/mockData';
import { 
  MessageSquare, 
  MapPin, 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Phone,
  Sparkles
} from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyPhoneNumber = async () => {
    const phoneNumber = CBC_CONTACT.phonePrimary; // '+211 929 115 924'
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneNumber);
      } else {
        // Fallback for browsers or iframe environments with restricted clipboard permissions
        const textarea = document.createElement('textarea');
        textarea.value = phoneNumber;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setIsCopied(true);

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch (err) {
      console.warn('Clipboard copy error:', err);
    }
  };

  return (
    <aside 
      aria-label="Quick WhatsApp Contact" 
      className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] max-w-xs bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150 mb-1">
          {/* Header */}
          <div className="bg-[#0c1a2e] text-white p-3.5 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Corporate Business Circle
                </h4>
                <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Secretariat Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Quick Contact Card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 space-y-2.5 bg-slate-50 text-xs">
            {/* WhatsApp & Secretariat Hotline Box */}
            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-bold text-[#0c1a2e] text-xs flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Executive Secretariat</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  {CBC_CONTACT.phonePrimary}
                </span>
              </div>

              <p className="text-slate-600 text-[11px] leading-relaxed">
                Connect directly for executive partnerships, summit logistics, or B2B linkages.
              </p>

              {/* Action Buttons Row */}
              <div className="space-y-1.5 pt-1">
                {/* Primary WhatsApp Chat CTA */}
                <a
                  href={`https://wa.me/${CBC_CONTACT.whatsapp}?text=Hello%20Corporate%20Business%20Circle%20Secretariat%2C%20I%20would%20like%20to%20inquire%20about%20partnerships%20and%20events.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Open WhatsApp Chat</span>
                </a>

                {/* Copy Phone Number Button with Dynamic Visual Feedback Animation */}
                <button
                  type="button"
                  onClick={handleCopyPhoneNumber}
                  className={`w-full py-1.5 px-3 rounded-md border font-semibold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-[0.98] ${
                    isCopied
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200/90 border-slate-300 text-slate-700 hover:text-[#0c1a2e]'
                  }`}
                  aria-label="Copy Secretariat Phone Number"
                  title={`Copy ${CBC_CONTACT.phonePrimary} to clipboard`}
                >
                  {isCopied ? (
                    <span className="flex items-center gap-1.5 animate-in zoom-in-95 duration-150">
                      <Check className="w-3.5 h-3.5 stroke-[2.5] text-white" />
                      <span className="font-bold">Number Copied to Clipboard!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Phone Number</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Visual Feedback Notification Banner (Animated when copied) */}
              {isCopied && (
                <div className="p-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] flex items-center justify-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Sparkles className="w-3 h-3 text-emerald-600 animate-spin" />
                  <span className="font-medium">
                    <strong className="font-bold">{CBC_CONTACT.phonePrimary}</strong> copied ready to paste
                  </span>
                </div>
              )}
            </div>

            {/* Pinned Location Shortcut */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0c1a2e] text-[11px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#00aeef]" />
                  <span>Juba Headquarters</span>
                </span>
                <span className="text-[10px] text-slate-400">Bowker Blvd</span>
              </div>
              <p className="text-slate-600 text-[10px] truncate">
                {CBC_CONTACT.address}
              </p>
              <div className="pt-1">
                <a
                  href={CBC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-2.5 rounded-md bg-[#0c1a2e] hover:bg-[#152843] text-white font-medium text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#00aeef]" />
                  <span>Open Google Maps Pin</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button - Compact 44px on mobile, 48px on desktop */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Toggle WhatsApp quick contact"
          title="Chat with CBC Secretariat on WhatsApp"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageSquare className="w-5 h-5 fill-current" />
          )}
        </button>
      </div>
    </aside>
  );
};
