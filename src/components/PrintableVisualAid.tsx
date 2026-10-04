import React from 'react';

interface PrintableVisualAidProps {
  category: 'Fliers & Brochures' | 'Banners & Backdrops' | 'Stickers & Labels' | 'Apparel & Uniforms' | 'Architectural & Framing';
  variant?: 'card' | 'expanded';
  className?: string;
}

export const PrintableVisualAid: React.FC<PrintableVisualAidProps> = ({
  category,
  variant = 'card',
  className = '',
}) => {
  const isExpanded = variant === 'expanded';

  switch (category) {
    case 'Fliers & Brochures':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none bg-gradient-to-br from-[#071322] via-[#0d213a] to-[#08182b] ${className}`}>
          {/* Subtle grid paper background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <svg
            viewBox="0 0 520 280"
            className={`w-full h-full object-contain ${isExpanded ? 'max-h-[380px]' : 'max-h-[220px]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Glow */}
            <circle cx="260" cy="140" r="130" fill="#00aeef" fillOpacity="0.08" />

            {/* TRI-FOLD BROCHURE (Left & Center) */}
            <g transform="translate(45, 25)">
              {/* Drop Shadow */}
              <ellipse cx="140" cy="225" rx="140" ry="14" fill="#000" fillOpacity="0.45" />

              {/* Panel 3: Left Inside Fold (Perspective angled) */}
              <path
                d="M 20 50 L 95 30 L 95 210 L 20 220 Z"
                fill="#0f2642"
                stroke="#1e446d"
                strokeWidth="1.5"
              />
              {/* Text lines mockup on Panel 3 */}
              <line x1="32" y1="65" x2="82" y2="52" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="32" y1="80" x2="85" y2="67" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="32" y1="95" x2="80" y2="82" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="32" y1="110" x2="85" y2="97" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="32" y="125" width="50" height="30" rx="3" fill="#1e3a5f" />

              {/* Panel 2: Center Inside Fold */}
              <path
                d="M 95 30 L 180 20 L 180 200 L 95 210 Z"
                fill="#153356"
                stroke="#295585"
                strokeWidth="1.5"
              />
              {/* Graphic on Center Panel */}
              <rect x="108" y="40" width="60" height="45" rx="4" fill="#0c1a2e" stroke="#00aeef" strokeWidth="1" />
              <path d="M 115 70 L 130 52 L 145 65 L 160 48 L 168 70 Z" fill="#00aeef" fillOpacity="0.5" />
              <circle cx="155" cy="48" r="4" fill="#fbbf24" />
              {/* Content lines */}
              <line x1="108" y1="100" x2="168" y2="100" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="108" y1="115" x2="165" y2="115" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="108" y1="128" x2="160" y2="128" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="108" y1="141" x2="168" y2="141" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="108" y1="154" x2="150" y2="154" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

              {/* Panel 1: Main Front Cover (Facing viewer with prominent branding) */}
              <path
                d="M 180 20 L 265 35 L 265 215 L 180 200 Z"
                fill="#1e4069"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              {/* Cover Header Banner */}
              <path d="M 180 20 L 265 35 L 265 75 L 180 60 Z" fill="#00aeef" />
              <text x="222" y="48" fill="#0c1a2e" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">
                CORPORATE
              </text>
              <text x="222" y="59" fill="#0c1a2e" fontSize="7" fontWeight="bold" textAnchor="middle">
                BUSINESS CIRCLE
              </text>

              {/* Cover Photo Mockup */}
              <path d="M 190 75 L 255 85 L 255 135 L 190 125 Z" fill="#0a1628" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="222" cy="100" r="14" fill="#00aeef" fillOpacity="0.2" />
              <text x="222" y="104" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">CBC</text>

              {/* Cover Title & Bullets */}
              <line x1="192" y1="145" x2="252" y2="155" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="192" y1="158" x2="245" y2="166" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="192" y1="170" x2="250" y2="178" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

              {/* Fold Crease Shadow Lines */}
              <line x1="95" y1="30" x2="95" y2="210" stroke="#000" strokeWidth="2" strokeOpacity="0.35" />
              <line x1="180" y1="20" x2="180" y2="200" stroke="#000" strokeWidth="2" strokeOpacity="0.35" />

              {/* Tag: Tri-Fold Brochure */}
              <rect x="75" y="218" width="130" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="140" y="232" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                TRI-FOLD BROCHURE (6-PAGE)
              </text>
            </g>

            {/* SINGLE-SHEET PROMOTIONAL FLIER (Right Side, Overlapping) */}
            <g transform="translate(325, 20)">
              {/* Flier Shadow */}
              <rect x="8" y="15" width="145" height="205" rx="6" fill="#000" fillOpacity="0.4" transform="rotate(4 80 115)" />

              {/* Flier Card Sheet (A5 Format, Glossy) */}
              <rect
                x="0"
                y="0"
                width="145"
                height="205"
                rx="6"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                transform="rotate(4 72 102)"
              />

              {/* Flier Content with transform */}
              <g transform="rotate(4 72 102)">
                {/* Header Graphic Block */}
                <path d="M 0 6 Q 0 0 6 0 L 139 0 Q 145 0 145 6 L 145 65 L 0 50 Z" fill="#0c1a2e" />
                <circle cx="28" cy="25" r="14" fill="#00aeef" />
                <text x="28" y="29" fill="#0c1a2e" fontSize="9" fontWeight="900" textAnchor="middle">CBC</text>
                <text x="48" y="22" fill="#ffffff" fontSize="8.5" fontWeight="bold">JUBA AUTO SHOW</text>
                <text x="48" y="32" fill="#38bdf8" fontSize="7" fontWeight="bold">SESSION GRAPHICS & FLIER</text>

                {/* Promotional Badge */}
                <rect x="96" y="42" width="44" height="15" rx="3" fill="#e11d48" />
                <text x="118" y="53" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">PRESS BRIEF</text>

                {/* Flier Headline */}
                <rect x="12" y="70" width="120" height="6" rx="2" fill="#0f172a" />
                <rect x="12" y="80" width="100" height="5" rx="2" fill="#334155" />

                {/* Photo Grid Placeholder on Flyer */}
                <rect x="12" y="93" width="56" height="42" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
                <path d="M 16 128 L 28 112 L 40 124 L 52 108 L 64 128 Z" fill="#94a3b8" />
                <circle cx="54" cy="106" r="3" fill="#fbbf24" />

                <rect x="74" y="93" width="58" height="42" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
                <line x1="80" y1="103" x2="124" y2="103" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                <line x1="80" y1="113" x2="120" y2="113" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="80" y1="123" x2="116" y2="123" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />

                {/* Event Schedule Bullet Points */}
                <circle cx="16" cy="148" r="2.5" fill="#00aeef" />
                <rect x="22" y="146" width="108" height="4" rx="1.5" fill="#475569" />
                <circle cx="16" cy="158" r="2.5" fill="#00aeef" />
                <rect x="22" y="156" width="98" height="4" rx="1.5" fill="#475569" />
                <circle cx="16" cy="168" r="2.5" fill="#00aeef" />
                <rect x="22" y="166" width="104" height="4" rx="1.5" fill="#475569" />

                {/* Footer Bar with QR Code mockup */}
                <rect x="0" y="180" width="145" height="25" rx="0" fill="#0c1a2e" />
                <rect x="10" y="184" width="16" height="16" rx="2" fill="#ffffff" />
                <rect x="12" y="186" width="4" height="4" fill="#0c1a2e" />
                <rect x="20" y="186" width="4" height="4" fill="#0c1a2e" />
                <rect x="12" y="194" width="4" height="4" fill="#0c1a2e" />
                <rect x="17" y="191" width="3" height="3" fill="#0c1a2e" />
                <text x="32" y="195" fill="#ffffff" fontSize="7" fontWeight="bold">Juba, South Sudan</text>
                <text x="32" y="202" fill="#38bdf8" fontSize="6">corporatebusinesscircle.com</text>
              </g>

              {/* Tag: A5 / A4 Promotional Flier */}
              <rect x="2" y="222" width="138" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="71" y="236" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                A5 / A4 PROMOTIONAL FLIER
              </text>
            </g>

            {/* Spec Label Top-Right */}
            <g transform="translate(18, 14)">
              <rect width="118" height="22" rx="11" fill="#112239" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="11" cy="11" r="4" fill="#10b981" />
              <text x="21" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
                PRINTABLE WORKS
              </text>
            </g>
          </svg>
        </div>
      );

    case 'Banners & Backdrops':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none bg-gradient-to-br from-[#071322] via-[#0d213a] to-[#08182b] ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <svg
            viewBox="0 0 520 280"
            className={`w-full h-full object-contain ${isExpanded ? 'max-h-[380px]' : 'max-h-[220px]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Stage Lights */}
            <circle cx="160" cy="40" r="80" fill="#00aeef" fillOpacity="0.12" />
            <circle cx="380" cy="40" r="70" fill="#fbbf24" fillOpacity="0.08" />

            {/* Stage Floor Line & Shadows */}
            <ellipse cx="160" cy="245" rx="85" ry="10" fill="#000" fillOpacity="0.5" />
            <ellipse cx="370" cy="242" rx="45" ry="8" fill="#000" fillOpacity="0.4" />

            {/* 1. ROLL-UP / PULL-UP RETRACTABLE BANNER (Left Side) */}
            <g transform="translate(100, 20)">
              {/* Aluminum Top Bar */}
              <rect x="15" y="8" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.8" />
              <circle cx="18" cy="11" r="1.5" fill="#0f172a" />
              <circle cx="102" cy="11" r="1.5" fill="#0f172a" />

              {/* Vertical Support Pole behind */}
              <line x1="60" y1="14" x2="60" y2="215" stroke="#94a3b8" strokeWidth="3" />

              {/* Main Banner Graphic Face (85 x 200cm proportion) */}
              <rect
                x="18"
                y="14"
                width="84"
                height="198"
                rx="1"
                fill="#0c1a2e"
                stroke="#1e3a5f"
                strokeWidth="1"
              />

              {/* Banner Top Header */}
              <rect x="18" y="14" width="84" height="42" fill="#112239" />
              <circle cx="60" cy="30" r="10" fill="#00aeef" />
              <text x="60" y="34" fill="#0c1a2e" fontSize="7" fontWeight="900" textAnchor="middle">CBC</text>
              <text x="60" y="48" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">
                GLOBAL LOGISTICS
              </text>
              <text x="60" y="54" fill="#38bdf8" fontSize="4.5" fontWeight="bold" textAnchor="middle">
                CONVENTION 2026
              </text>

              {/* Gold Accent Band */}
              <rect x="18" y="56" width="84" height="3" fill="#fbbf24" />

              {/* Banner Body Visuals */}
              <rect x="23" y="65" width="74" height="38" rx="2" fill="#152843" stroke="#00aeef" strokeWidth="0.8" />
              <text x="60" y="82" fill="#f8fafc" fontSize="6" fontWeight="bold" textAnchor="middle">
                PYRAMID HOTEL
              </text>
              <text x="60" y="90" fill="#94a3b8" fontSize="5" textAnchor="middle">
                JUBA, SOUTH SUDAN
              </text>
              <rect x="36" y="94" width="48" height="6" rx="2" fill="#00aeef" />
              <text x="60" y="99" fill="#0c1a2e" fontSize="4.5" fontWeight="bold" textAnchor="middle">
                25-27 AUGUST 2026
              </text>

              {/* Key Speakers / Logos Row */}
              <circle cx="34" cy="118" r="6" fill="#334155" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="51" cy="118" r="6" fill="#334155" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="69" cy="118" r="6" fill="#334155" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="86" cy="118" r="6" fill="#334155" stroke="#38bdf8" strokeWidth="0.8" />

              {/* Topic lines */}
              <rect x="25" y="132" width="70" height="3" rx="1.5" fill="#f8fafc" />
              <rect x="25" y="138" width="60" height="2.5" rx="1" fill="#94a3b8" />
              <rect x="25" y="143" width="65" height="2.5" rx="1" fill="#94a3b8" />
              <rect x="25" y="148" width="55" height="2.5" rx="1" fill="#94a3b8" />

              {/* Partner Logos Strip at bottom of banner */}
              <rect x="18" y="175" width="84" height="22" fill="#081220" />
              <text x="60" y="182" fill="#94a3b8" fontSize="4" fontWeight="bold" textAnchor="middle">
                OFFICIAL SPONSORS
              </text>
              <rect x="24" y="186" width="14" height="8" rx="1" fill="#1e293b" />
              <rect x="42" y="186" width="16" height="8" rx="1" fill="#1e293b" />
              <rect x="62" y="186" width="16" height="8" rx="1" fill="#1e293b" />
              <rect x="82" y="186" width="14" height="8" rx="1" fill="#1e293b" />

              {/* Retractable Base Cartridge (Silver aluminum casing) */}
              <rect x="10" y="210" width="100" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <rect x="15" y="212" width="90" height="2" fill="#cbd5e1" />
              <ellipse cx="60" cy="217" rx="4" ry="2" fill="#64748b" />

              {/* Swivel Feet / Base Stabilizers */}
              <path d="M 5 224 L 35 224 L 30 227 L 0 227 Z" fill="#94a3b8" />
              <path d="M 85 224 L 115 224 L 120 227 L 90 227 Z" fill="#94a3b8" />

              {/* Tag Label */}
              <rect x="2" y="235" width="116" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="60" y="249" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                PULL-UP BANNER (85×200CM)
              </text>
            </g>

            {/* 2. OUTDOOR TEARDROP & FEATHER FLAG BANNER (Center-Right) */}
            <g transform="translate(250, 15)">
              {/* Flexible Curved Bow Pole */}
              <path
                d="M 60 225 L 60 70 Q 60 15 105 15 Q 140 15 140 50 Q 140 100 70 170 Z"
                fill="#00aeef"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />

              {/* Inner Graphic Print on Flag */}
              <path
                d="M 65 65 Q 65 25 105 25 Q 130 25 130 55 Q 130 95 72 160 Z"
                fill="#0c1a2e"
              />
              <circle cx="102" cy="48" r="9" fill="#fbbf24" />
              <text x="102" y="51" fill="#0c1a2e" fontSize="6" fontWeight="bold" textAnchor="middle">CBC</text>

              {/* Vertical Text on Flag */}
              <text
                x="88"
                y="95"
                fill="#ffffff"
                fontSize="8"
                fontWeight="900"
                letterSpacing="1.5"
                transform="rotate(65 88 95)"
              >
                EVENTS
              </text>

              {/* Main Pole */}
              <line x1="58" y1="18" x2="58" y2="230" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />

              {/* Heavy Ground Cross Base */}
              <path d="M 40 230 L 76 230 L 72 233 L 44 233 Z" fill="#334155" />
              <path d="M 58 225 L 58 234" stroke="#0f172a" strokeWidth="4" />
              {/* Water donut ring stabilizer */}
              <ellipse cx="58" cy="229" rx="16" ry="4" fill="#64748b" fillOpacity="0.7" />

              {/* Tag Label */}
              <rect x="8" y="240" width="102" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="59" y="254" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                TEARDROP FLAG (3.5M)
              </text>
            </g>

            {/* 3. STEP & REPEAT MEDIA BACKDROP WALL (Right Background) */}
            <g transform="translate(370, 45)">
              {/* Media Backdrop Wall Frame */}
              <rect x="0" y="0" width="125" height="150" rx="3" fill="#0f1d33" stroke="#38bdf8" strokeWidth="1.2" />

              {/* Grid of repeating sponsor logos (Step & Repeat) */}
              <g fill="#38bdf8" fillOpacity="0.4" fontSize="6" fontWeight="bold">
                <text x="20" y="25" textAnchor="middle">CBC</text>
                <text x="60" y="25" textAnchor="middle">GLC</text>
                <text x="100" y="25" textAnchor="middle">CBC</text>

                <text x="40" y="45" textAnchor="middle">SPONSOR</text>
                <text x="80" y="45" textAnchor="middle">MEDIA</text>

                <text x="20" y="65" textAnchor="middle">CBC</text>
                <text x="60" y="65" textAnchor="middle">GLC</text>
                <text x="100" y="65" textAnchor="middle">CBC</text>

                <text x="40" y="85" textAnchor="middle">VIP</text>
                <text x="80" y="85" textAnchor="middle">JUBA</text>

                <text x="20" y="105" textAnchor="middle">CBC</text>
                <text x="60" y="105" textAnchor="middle">GLC</text>
                <text x="100" y="105" textAnchor="middle">CBC</text>

                <text x="40" y="125" textAnchor="middle">2026</text>
                <text x="80" y="125" textAnchor="middle">SUMMIT</text>
              </g>

              {/* Aluminum Telescopic Frame Stand feet */}
              <line x1="10" y1="150" x2="10" y2="165" stroke="#94a3b8" strokeWidth="2.5" />
              <line x1="115" y1="150" x2="115" y2="165" stroke="#94a3b8" strokeWidth="2.5" />
              <ellipse cx="10" cy="165" rx="12" ry="2.5" fill="#64748b" />
              <ellipse cx="115" cy="165" rx="12" ry="2.5" fill="#64748b" />

              {/* Tag Label */}
              <rect x="0" y="180" width="125" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="62" y="194" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                MEDIA BACKDROP WALL (3×2.4M)
              </text>
            </g>

            {/* Top Indicator */}
            <g transform="translate(18, 14)">
              <rect width="118" height="22" rx="11" fill="#112239" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="11" cy="11" r="4" fill="#38bdf8" />
              <text x="21" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
                BANNERS & STANDS
              </text>
            </g>
          </svg>
        </div>
      );

    case 'Stickers & Labels':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none bg-gradient-to-br from-[#071322] via-[#0d213a] to-[#08182b] ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <svg
            viewBox="0 0 520 280"
            className={`w-full h-full object-contain ${isExpanded ? 'max-h-[380px]' : 'max-h-[220px]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Glow */}
            <circle cx="200" cy="140" r="110" fill="#10b981" fillOpacity="0.08" />
            <circle cx="380" cy="140" r="90" fill="#00aeef" fillOpacity="0.08" />

            {/* 1. DIE-CUT CIRCULAR & SHIELD VINYL STICKERS (Peeling Off Backing Sheet) */}
            <g transform="translate(40, 20)">
              {/* Backing Release Sheet (Wax Paper) */}
              <rect x="0" y="0" width="220" height="210" rx="8" fill="#152843" stroke="#254770" strokeWidth="1.5" />
              {/* Grid marks on backing paper */}
              <line x1="20" y1="0" x2="20" y2="210" stroke="#1e3a5f" strokeDasharray="3 3" />
              <line x1="70" y1="0" x2="70" y2="210" stroke="#1e3a5f" strokeDasharray="3 3" />
              <line x1="120" y1="0" x2="120" y2="210" stroke="#1e3a5f" strokeDasharray="3 3" />
              <line x1="170" y1="0" x2="170" y2="210" stroke="#1e3a5f" strokeDasharray="3 3" />

              {/* Sticker 1: Circular Die-Cut Sticker with Peel Effect */}
              <g transform="translate(60, 60)">
                {/* Sticker Drop Shadow */}
                <circle cx="45" cy="45" r="42" fill="#000" fillOpacity="0.35" />

                {/* Main Sticker Body */}
                <circle cx="45" cy="45" r="42" fill="#0c1a2e" stroke="#00aeef" strokeWidth="2.5" />
                <circle cx="45" cy="45" r="36" fill="#112239" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />

                {/* Sticker Graphic */}
                <text x="45" y="38" fill="#38bdf8" fontSize="12" fontWeight="900" textAnchor="middle">
                  CBC
                </text>
                <text x="45" y="49" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.8">
                  PREMIUM QUALITY
                </text>
                <text x="45" y="58" fill="#fbbf24" fontSize="5.5" fontWeight="bold" textAnchor="middle">
                  100% WATERPROOF
                </text>

                {/* Peel Corner (Curling off backing showing adhesive) */}
                <path
                  d="M 68 18 C 76 26 84 38 87 45 L 68 45 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />
                <path d="M 68 45 L 87 45 C 80 50 72 48 68 45 Z" fill="#94a3b8" />
              </g>

              {/* Sticker 2: Contour Die-Cut Badge Sticker (Bottom Right) */}
              <g transform="translate(130, 115)">
                <rect x="0" y="0" width="75" height="75" rx="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <rect x="5" y="5" width="65" height="65" rx="12" fill="#0c1a2e" />
                <path d="M 37 15 L 43 28 L 57 30 L 47 40 L 49 54 L 37 47 L 25 54 L 27 40 L 17 30 L 31 28 Z" fill="#fbbf24" />
                <text x="37" y="65" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                  AUTHENTIC
                </text>
              </g>

              {/* Tag Label */}
              <rect x="35" y="220" width="150" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="110" y="234" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                DIE-CUT VINYL STICKERS (ANY SHAPE)
              </text>
            </g>

            {/* 2. COMMERCIAL BOTTLE / PACKAGING WRAP LABEL (Right Side) */}
            <g transform="translate(320, 20)">
              {/* Product Bottle Mockup */}
              {/* Bottle Cap */}
              <rect x="68" y="15" width="24" height="14" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
              <line x1="72" y1="18" x2="72" y2="26" stroke="#ffffff" strokeOpacity="0.4" />
              <line x1="76" y1="18" x2="76" y2="26" stroke="#ffffff" strokeOpacity="0.4" />
              <line x1="80" y1="18" x2="80" y2="26" stroke="#ffffff" strokeOpacity="0.4" />
              <line x1="84" y1="18" x2="84" y2="26" stroke="#ffffff" strokeOpacity="0.4" />

              {/* Bottle Neck */}
              <path d="M 72 29 L 70 50 L 50 75 L 50 205 Q 80 215 110 205 L 110 75 L 90 50 L 88 29 Z" fill="#0f294a" fillOpacity="0.6" stroke="#38bdf8" strokeWidth="1" />
              {/* Liquid Water Level */}
              <path d="M 52 100 L 108 100 L 108 203 Q 80 212 52 203 Z" fill="#0284c7" fillOpacity="0.25" />

              {/* THE WRAP-AROUND PRODUCT LABEL (Highlight) */}
              <rect x="47" y="105" width="66" height="75" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* Label Top Blue Header */}
              <rect x="47" y="105" width="66" height="24" fill="#0c1a2e" />
              <circle cx="80" cy="117" r="7" fill="#00aeef" />
              <text x="80" y="120" fill="#0c1a2e" fontSize="5" fontWeight="900" textAnchor="middle">CBC</text>

              {/* Product Name */}
              <text x="80" y="138" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">
                NILE WATER
              </text>
              <text x="80" y="145" fill="#0284c7" fontSize="5" fontWeight="bold" textAnchor="middle">
                PREMIUM 500ML
              </text>

              {/* Barcode Mockup */}
              <rect x="52" y="152" width="26" height="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
              <line x1="56" y1="155" x2="56" y2="167" stroke="#000" strokeWidth="1" />
              <line x1="59" y1="155" x2="59" y2="167" stroke="#000" strokeWidth="1.5" />
              <line x1="63" y1="155" x2="63" y2="167" stroke="#000" strokeWidth="1" />
              <line x1="67" y1="155" x2="67" y2="167" stroke="#000" strokeWidth="2" />
              <line x1="72" y1="155" x2="72" y2="167" stroke="#000" strokeWidth="1" />

              {/* Nutritional / Specs Table */}
              <line x1="84" y1="154" x2="108" y2="154" stroke="#64748b" strokeWidth="1" />
              <line x1="84" y1="159" x2="105" y2="159" stroke="#64748b" strokeWidth="1" />
              <line x1="84" y1="164" x2="108" y2="164" stroke="#64748b" strokeWidth="1" />
              <line x1="84" y1="169" x2="102" y2="169" stroke="#64748b" strokeWidth="1" />

              {/* Tag Label */}
              <rect x="15" y="220" width="130" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="80" y="234" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                PRODUCT BOTTLE WRAP LABEL
              </text>
            </g>

            {/* Top Indicator */}
            <g transform="translate(18, 14)">
              <rect width="128" height="22" rx="11" fill="#112239" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="11" cy="11" r="4" fill="#10b981" />
              <text x="21" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
                VINYL STICKERS & LABELS
              </text>
            </g>
          </svg>
        </div>
      );

    case 'Apparel & Uniforms':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none bg-gradient-to-br from-[#071322] via-[#0d213a] to-[#08182b] ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <svg
            viewBox="0 0 520 280"
            className={`w-full h-full object-contain ${isExpanded ? 'max-h-[380px]' : 'max-h-[220px]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Glow */}
            <circle cx="170" cy="130" r="100" fill="#f59e0b" fillOpacity="0.08" />
            <circle cx="360" cy="130" r="90" fill="#00aeef" fillOpacity="0.08" />

            {/* 1. TAILORED AFRICAN FABRIC BUTTON-UP SHIRT (Left Side) */}
            <g transform="translate(50, 20)">
              {/* Shirt Shadow */}
              <ellipse cx="110" cy="220" rx="90" ry="12" fill="#000" fillOpacity="0.4" />

              {/* Shirt Body Outline */}
              <path
                d="M 65 30 L 30 75 L 55 90 L 70 65 L 70 205 L 150 205 L 150 65 L 165 90 L 190 75 L 155 30 Q 110 40 65 30 Z"
                fill="#0f2642"
                stroke="#1e446d"
                strokeWidth="1.5"
              />

              {/* African Ankara / Kitenge Pattern Overlays (Geometric corporate motifs) */}
              <g fill="#f59e0b" fillOpacity="0.85">
                <polygon points="80,70 95,85 80,100 65,85" />
                <polygon points="140,70 155,85 140,100 125,85" />
                <polygon points="80,130 95,145 80,160 65,145" />
                <polygon points="140,130 155,145 140,160 125,145" />
                <polygon points="80,175 95,190 80,205 65,190" />
                <polygon points="140,175 155,190 140,205 125,190" />
              </g>
              <g fill="#00aeef" fillOpacity="0.85">
                <circle cx="110" cy="85" r="7" />
                <circle cx="110" cy="145" r="7" />
                <circle cx="110" cy="190" r="6" />
              </g>

              {/* Collar Detail */}
              <path d="M 75 30 L 110 55 L 100 32 Z" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" />
              <path d="M 145 30 L 110 55 L 120 32 Z" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" />

              {/* Button Placket */}
              <rect x="106" y="55" width="8" height="150" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="110" cy="75" r="2" fill="#ffffff" />
              <circle cx="110" cy="105" r="2" fill="#ffffff" />
              <circle cx="110" cy="135" r="2" fill="#ffffff" />
              <circle cx="110" cy="165" r="2" fill="#ffffff" />

              {/* Embroidered Left Pocket with Crest */}
              <rect x="125" y="90" width="22" height="24" rx="2" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="1" />
              <circle cx="136" cy="100" r="4" fill="#fbbf24" />
              <text x="136" y="109" fill="#38bdf8" fontSize="4.5" fontWeight="bold" textAnchor="middle">CBC</text>

              {/* Tag Label */}
              <rect x="25" y="230" width="170" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="110" y="244" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                CUSTOM AFRICAN WAX PRINT SHIRT
              </text>
            </g>

            {/* 2. CORPORATE PIQUE EMBROIDERED POLO & CAP (Right Side) */}
            <g transform="translate(290, 20)">
              {/* Executive Polo Shirt */}
              <g transform="translate(0, 50)">
                <path
                  d="M 50 15 L 20 45 L 38 58 L 50 40 L 50 145 L 120 145 L 120 40 L 132 58 L 150 45 L 120 15 Q 85 24 50 15 Z"
                  fill="#0c1a2e"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                {/* Ribbed Contrast Collar */}
                <path d="M 55 16 L 85 36 L 75 18 Z" fill="#00aeef" />
                <path d="M 115 16 L 85 36 L 95 18 Z" fill="#00aeef" />

                {/* 2-Button Placket */}
                <rect x="81" y="36" width="8" height="35" fill="#152843" stroke="#38bdf8" strokeWidth="0.8" />
                <circle cx="85" cy="45" r="1.5" fill="#ffffff" />
                <circle cx="85" cy="58" r="1.5" fill="#ffffff" />

                {/* High-Density Chest Embroidery */}
                <circle cx="104" cy="55" r="6" fill="#fbbf24" />
                <text x="104" y="58" fill="#0c1a2e" fontSize="5" fontWeight="bold" textAnchor="middle">CBC</text>
                <text x="104" y="68" fill="#ffffff" fontSize="4" fontWeight="bold" textAnchor="middle">SOUTH SUDAN</text>
              </g>

              {/* Branded Conference Cap (Top Right) */}
              <g transform="translate(45, 0)">
                {/* Cap Dome */}
                <path
                  d="M 15 45 Q 45 10 75 45 Z"
                  fill="#112239"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                {/* Cap Visor / Peak */}
                <path
                  d="M 15 45 Q 0 48 -10 55 Q 30 65 75 45 Z"
                  fill="#00aeef"
                  stroke="#0284c7"
                  strokeWidth="1"
                />
                {/* Embroidered Front Logo */}
                <circle cx="45" cy="32" r="5" fill="#fbbf24" />
                <text x="45" y="35" fill="#0c1a2e" fontSize="4.5" fontWeight="bold" textAnchor="middle">CBC</text>
                {/* Top Button */}
                <circle cx="45" cy="22" r="2.5" fill="#00aeef" />
              </g>

              {/* Conference Lanyard & PVC Delegate Badge */}
              <g transform="translate(130, 75)">
                {/* Blue Woven Lanyard Ribbon */}
                <path d="M 0 0 Q 15 30 20 60 Q 25 30 40 0" stroke="#00aeef" strokeWidth="4" fill="none" />
                {/* Metal Clip */}
                <rect x="17" y="58" width="6" height="8" rx="1" fill="#cbd5e1" />
                {/* Clear PVC Badge Pouch */}
                <rect x="5" y="65" width="30" height="42" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                <rect x="5" y="65" width="30" height="12" fill="#0c1a2e" />
                <text x="20" y="74" fill="#38bdf8" fontSize="4" fontWeight="bold" textAnchor="middle">DELEGATE</text>
                <rect x="10" y="82" width="20" height="3" fill="#0f172a" />
                <rect x="12" y="88" width="16" height="2" fill="#64748b" />
                <rect x="14" y="93" width="12" height="10" fill="#00aeef" fillOpacity="0.4" />
              </g>

              {/* Tag Label */}
              <rect x="5" y="230" width="170" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="90" y="244" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                EMBROIDERED POLO, CAP & LANYARD
              </text>
            </g>

            {/* Top Indicator */}
            <g transform="translate(18, 14)">
              <rect width="138" height="22" rx="11" fill="#112239" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="11" cy="11" r="4" fill="#f59e0b" />
              <text x="21" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
                APPAREL & UNIFORMS
              </text>
            </g>
          </svg>
        </div>
      );

    case 'Architectural & Framing':
      return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none bg-gradient-to-br from-[#071322] via-[#0d213a] to-[#08182b] ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00aeef_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <svg
            viewBox="0 0 520 280"
            className={`w-full h-full object-contain ${isExpanded ? 'max-h-[380px]' : 'max-h-[220px]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Spotlight */}
            <circle cx="260" cy="110" r="120" fill="#fbbf24" fillOpacity="0.08" />

            {/* 1. GILDED EXECUTIVE BOARDROOM PRESENTATION FRAME */}
            <g transform="translate(90, 15)">
              {/* Frame Drop Shadow */}
              <rect x="5" y="5" width="340" height="205" rx="6" fill="#000" fillOpacity="0.5" />

              {/* Solid Hardwood Outer Molding (Mahogany / Dark Walnut) */}
              <rect
                x="0"
                y="0"
                width="340"
                height="205"
                rx="6"
                fill="#2c1810"
                stroke="#d97706"
                strokeWidth="2.5"
              />

              {/* Inner Gilded Gold Inset Bead */}
              <rect x="12" y="12" width="316" height="181" rx="3" fill="#1a0c06" stroke="#fbbf24" strokeWidth="1.5" />

              {/* Beveled Museum Passe-Partout Matboard (Off-white / Cream) */}
              <rect x="22" y="22" width="296" height="161" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

              {/* Architectural Blueprint Window */}
              <rect x="42" y="36" width="256" height="115" fill="#0a2540" stroke="#0284c7" strokeWidth="1" />
              {/* Blueprint Blueprint Grid Lines */}
              <g stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3">
                <line x1="42" y1="55" x2="298" y2="55" />
                <line x1="42" y1="75" x2="298" y2="75" />
                <line x1="42" y1="95" x2="298" y2="95" />
                <line x1="42" y1="115" x2="298" y2="115" />
                <line x1="42" y1="135" x2="298" y2="135" />

                <line x1="80" y1="36" x2="80" y2="151" />
                <line x1="120" y1="36" x2="120" y2="151" />
                <line x1="160" y1="36" x2="160" y2="151" />
                <line x1="200" y1="36" x2="200" y2="151" />
                <line x1="240" y1="36" x2="240" y2="151" />
                <line x1="280" y1="36" x2="280" y2="151" />
              </g>

              {/* Architectural Site Plan Schematics */}
              <rect x="65" y="55" width="80" height="60" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="165" y="65" width="90" height="50" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="105,45 155,45 145,55 95,55" fill="#fbbf24" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1" />
              <circle cx="210" cy="90" r="18" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="145" y1="85" x2="165" y2="85" stroke="#f8fafc" strokeWidth="1.5" />

              {/* Title Block in Blueprint Corner */}
              <rect x="180" y="120" width="112" height="28" fill="#07182b" stroke="#38bdf8" strokeWidth="0.8" />
              <text x="236" y="130" fill="#38bdf8" fontSize="5.5" fontWeight="bold" textAnchor="middle">
                PROPOSED JUBA AUTO SHOW ARENA
              </text>
              <text x="236" y="137" fill="#ffffff" fontSize="4.5" textAnchor="middle">
                ARCHITECTURAL MASTERPLAN (1:200)
              </text>
              <text x="236" y="144" fill="#fbbf24" fontSize="4" textAnchor="middle">
                COMMISSIONED BY CORPORATE BUSINESS CIRCLE
              </text>

              {/* Compass Rose */}
              <circle cx="58" cy="138" r="8" fill="none" stroke="#38bdf8" strokeWidth="0.8" />
              <polygon points="58,131 60,138 56,138" fill="#e11d48" />
              <polygon points="58,145 60,138 56,138" fill="#ffffff" />
              <text x="58" y="130" fill="#e11d48" fontSize="4" fontWeight="bold" textAnchor="middle">N</text>

              {/* 2. BRASS ENGRAVED DEDICATION PLAQUE (Bottom Center of Matboard) */}
              <g transform="translate(100, 158)">
                {/* Plaque Shadow */}
                <rect x="2" y="2" width="140" height="20" rx="2" fill="#000" fillOpacity="0.3" />

                {/* Brushed Brass Metal Plaque */}
                <rect x="0" y="0" width="140" height="20" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                {/* 4 Corner Screws */}
                <circle cx="4" cy="4" r="1.2" fill="#92400e" />
                <circle cx="136" cy="4" r="1.2" fill="#92400e" />
                <circle cx="4" cy="16" r="1.2" fill="#92400e" />
                <circle cx="136" cy="16" r="1.2" fill="#92400e" />

                {/* Engraved Plaque Text */}
                <text x="70" y="9" fill="#78350f" fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
                  INSTITUTIONAL PRESENTATION PLAQUE
                </text>
                <text x="70" y="16" fill="#78350f" fontSize="4.5" fontWeight="bold" textAnchor="middle">
                  EXECUTIVE COMMEMORATIVE AWARD • JUBA, SOUTH SUDAN
                </text>
              </g>

              {/* Glass Reflection Highlight */}
              <path
                d="M 30 25 L 140 25 L 45 180 L 25 180 Z"
                fill="#ffffff"
                fillOpacity="0.06"
              />

              {/* Tag Label */}
              <rect x="65" y="215" width="210" height="20" rx="4" fill="#0c1a2e" stroke="#38bdf8" strokeWidth="1" />
              <text x="170" y="229" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                ARCHITECTURAL FRAMING & BRASS PLAQUE
              </text>
            </g>

            {/* Top Indicator */}
            <g transform="translate(18, 14)">
              <rect width="148" height="22" rx="11" fill="#112239" stroke="#00aeef" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="11" cy="11" r="4" fill="#fbbf24" />
              <text x="21" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
                ARCHITECTURAL & FRAMING
              </text>
            </g>
          </svg>
        </div>
      );
  }
};
