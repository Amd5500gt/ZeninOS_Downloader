import React, { useId } from 'react';

interface ZeninVectorIconProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
}

/**
 * Official Zenin OS Adaptive Vector Icon
 * Converted directly from Android Vector Drawable (512x512, scale 0.76)
 */
export const ZeninVectorIcon: React.FC<ZeninVectorIconProps> = ({
  className = '',
  size = 48,
  glow = false,
}) => {
  const uniqueId = useId().replace(/:/g, '_');

  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none ${glow ? 'drop-shadow-[0_0_24px_rgba(108,99,255,0.45)]' : ''} ${className}`}
    >
      <defs>
        {/* Upper Kinetic Blade Gradient */}
        <linearGradient
          id={`upperBladeGrad_${uniqueId}`}
          x1="116"
          y1="145"
          x2="402"
          y2="205"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0" stopColor="#6C63FF" />
          <stop offset="0.38" stopColor="#27C7B8" />
          <stop offset="0.72" stopColor="#FF6B35" />
          <stop offset="1.0" stopColor="#FFD84D" />
        </linearGradient>

        {/* Central Energy Core Gradient */}
        <linearGradient
          id={`energyCoreGrad_${uniqueId}`}
          x1="386"
          y1="158"
          x2="136"
          y2="352"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0" stopColor="#9B8CFF" />
          <stop offset="0.34" stopColor="#D000FF" />
          <stop offset="0.68" stopColor="#6C63FF" />
          <stop offset="1.0" stopColor="#00C8FF" />
        </linearGradient>

        {/* Lower Kinetic Blade Gradient */}
        <linearGradient
          id={`lowerBladeGrad_${uniqueId}`}
          x1="113"
          y1="362"
          x2="396"
          y2="308"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0" stopColor="#00E5D4" />
          <stop offset="0.34" stopColor="#00BFFF" />
          <stop offset="0.68" stopColor="#6C63FF" />
          <stop offset="1.0" stopColor="#9B8CFF" />
        </linearGradient>
      </defs>

      <g transform="translate(256 256) scale(0.76) translate(-256 -256)">
        {/* AMBIENT RING */}
        <path
          d="M256,82 A174,174 0 1,1 256,430 A174,174 0 1,1 256,82 Z"
          fill="none"
          stroke="#6C63FF"
          strokeWidth="7"
          strokeOpacity="0.55"
        />

        {/* UPPER KINETIC BLADE */}
        <path
          d="M116,150 C158,130 208,117 258,116 C315,115 365,127 402,151 C390,169 373,184 350,194 C319,208 284,215 246,215 H199 C162,215 132,191 116,150 Z"
          fill={`url(#upperBladeGrad_${uniqueId})`}
        />

        {/* CENTRAL ENERGY CORE */}
        <path
          d="M386,157 C394,163 393,174 383,184 L232,322 C207,345 174,355 136,352 C145,327 162,302 185,281 C207,261 231,244 258,226 L349,166 C363,157 377,153 386,157 Z"
          fill={`url(#energyCoreGrad_${uniqueId})`}
        />

        {/* LOWER KINETIC BLADE */}
        <path
          d="M396,363 C358,386 309,398 256,399 C202,400 151,388 113,362 C125,345 143,331 166,320 C196,306 230,299 269,299 H313 C351,299 380,324 396,363 Z"
          fill={`url(#lowerBladeGrad_${uniqueId})`}
        />

        {/* TOP PRECISION NODE */}
        <circle cx="402" cy="151" r="4.5" fill="#E9ECF5" />

        {/* BOTTOM PRECISION NODE */}
        <circle cx="113" cy="362" r="4.5" fill="#E9ECF5" />
      </g>
    </svg>
  );
};
