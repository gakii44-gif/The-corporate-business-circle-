import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  layout?: 'horizontal' | 'stacked' | 'icon-only';
  className?: string;
}

/**
 * Official Corporate Business Circle (CBC) Emblem Icon
 * Consists of 4 dark brown / charcoal parallel diagonal bars (left wing)
 * and 4 vibrant cyan / azure blue ascending diagonal bars (right wing).
 */
export const CBCEmblemIcon: React.FC<{
  className?: string;
  variant?: 'light' | 'dark';
}> = ({ className = 'w-10 h-10', variant = 'light' }) => {
  const isDark = variant === 'dark';
  const brownColor = isDark ? '#d49b6a' : '#3d281c';
  const cyanColor = isDark ? '#38bdf8' : '#00aeef';

  return (
    <svg
      viewBox="0 0 300 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Corporate Business Circle Official Emblem"
    >
      {/* Left Wing - 4 Parallel Brown Bars (Slanting down-right with horizontal top/bottom cuts) */}
      <g fill={brownColor}>
        {/* Bar 1 (Leftmost) */}
        <polygon points="20,105 38,105 84,205 66,205" />
        {/* Bar 2 */}
        <polygon points="46,105 64,105 110,205 92,205" />
        {/* Bar 3 */}
        <polygon points="72,105 90,105 136,205 118,205" />
        {/* Bar 4 */}
        <polygon points="98,105 116,105 162,205 144,205" />
      </g>

      {/* Right Wing - 4 Parallel Cyan Bars (Slanting up-right with stepped horizontal top/bottom cuts) */}
      <g fill={cyanColor}>
        {/* Bar 1 (Inner) */}
        <polygon points="166,35 184,35 128,142 110,142" />
        {/* Bar 2 */}
        <polygon points="196,35 214,35 146,168 128,168" />
        {/* Bar 3 */}
        <polygon points="226,35 244,35 164,194 146,194" />
        {/* Bar 4 (Outermost Peak) */}
        <polygon points="256,35 274,35 182,220 164,220" />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  layout = 'horizontal',
  className = '',
}) => {
  const isDark = variant === 'dark';

  const sizeConfigs = {
    sm: {
      icon: 'w-6 h-6 sm:w-7 sm:h-7',
      title: 'text-xs sm:text-sm font-black leading-tight',
      sub: 'text-[9px] tracking-wider',
      gap: 'gap-2 sm:gap-2.5',
    },
    md: {
      icon: 'w-7 h-7 sm:w-9 sm:h-9',
      title: 'text-xs sm:text-base font-black leading-tight',
      sub: 'text-[9px] sm:text-[10px] tracking-wider',
      gap: 'gap-2 sm:gap-3',
    },
    lg: {
      icon: 'w-10 h-10 sm:w-12 sm:h-12',
      title: 'text-base sm:text-xl font-black leading-tight',
      sub: 'text-xs tracking-wider',
      gap: 'gap-3 sm:gap-3.5',
    },
    xl: {
      icon: 'w-16 h-16 sm:w-20 sm:h-20',
      title: 'text-xl sm:text-3xl font-black leading-tight',
      sub: 'text-xs sm:text-sm tracking-widest',
      gap: 'gap-3.5 sm:gap-4',
    },
  }[size];

  if (layout === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <CBCEmblemIcon className={sizeConfigs.icon} variant={variant} />
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${sizeConfigs.gap} select-none ${className}`}>
        <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-105">
          <CBCEmblemIcon className={sizeConfigs.icon} variant={variant} />
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`font-sans tracking-tight uppercase ${sizeConfigs.title} ${
              isDark ? 'text-white' : 'text-[#0c1a2e]'
            }`}
          >
            Corporate Business Circle
          </span>
          {showTagline && (
            <span
              className={`font-sans uppercase font-bold text-[#00aeef] mt-1 ${sizeConfigs.sub}`}
            >
              The Cycle of Great Minds
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${sizeConfigs.gap} select-none group ${className}`}>
      {/* CBC Official Emblem Badge */}
      <div
        className={`relative flex-shrink-0 p-1 sm:p-1.5 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-105 ${
          isDark
            ? 'bg-[#112239] border border-slate-700/80 shadow-sm'
            : 'bg-white border border-slate-200 shadow-sm'
        }`}
      >
        <CBCEmblemIcon className={sizeConfigs.icon} variant={variant} />
      </div>

      {/* Typography Lockup: CBC on small mobile, Corporate Business Circle on larger */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-sans tracking-tight uppercase font-black ${sizeConfigs.title} ${
            isDark ? 'text-white' : 'text-[#0c1a2e]'
          }`}
        >
          <span className="sm:hidden">CBC</span>
          <span className="hidden sm:inline">Corporate Business Circle</span>
        </span>
        {showTagline && (
          <span
            className={`font-sans tracking-wider uppercase font-semibold text-[#00aeef] hidden sm:block ${sizeConfigs.sub}`}
          >
            The Cycle of Great Minds
          </span>
        )}
      </div>
    </div>
  );
};
