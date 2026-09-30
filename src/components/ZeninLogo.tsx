import React from 'react';
import { ZeninVectorIcon } from './ZeninVectorIcon';

interface ZeninLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const ZeninLogo: React.FC<ZeninLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconPixelSizes = {
    sm: 28,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const containerSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Zenin OS Adaptive Vector Icon */}
      <div className={`relative ${containerSizes[size]} shrink-0 flex items-center justify-center`}>
        <ZeninVectorIcon size={iconPixelSizes[size]} glow={size === 'lg' || size === 'xl'} />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-tight text-[#E9ECF5] ${textSizes[size]}`}>
            ZENIN <span className="text-[#9B8CFF]">OS</span>
          </span>
        </div>
      )}
    </div>
  );
};
