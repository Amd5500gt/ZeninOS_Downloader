import React, { useState } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import { appConfig } from '../config/appConfig';

interface DownloadButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'glass';
  label?: string;
  showIcon?: boolean;
  subtext?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  className = '',
  size = 'md',
  variant = 'primary',
  label = 'Download Zenin OS',
  showIcon = true,
  subtext,
}) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'initiating' | 'started'>('idle');

  const handleClick = () => {
    setDownloadState('initiating');
    setTimeout(() => {
      setDownloadState('started');
      setTimeout(() => {
        setDownloadState('idle');
      }, 3500);
    }, 450);
  };

  const sizeClasses = {
    sm: 'py-2 px-3.5 text-xs',
    md: 'py-2.5 px-5 text-sm',
    lg: 'py-3.5 px-7 text-base font-semibold',
  };

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = 'bg-gradient-to-r from-[#6C63FF] to-[#9B8CFF] text-[#E9ECF5] shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/40 hover:from-[#766EFF] hover:to-[#A79AFF] active:scale-[0.98] border border-white/15';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-[#263451] hover:bg-[#2D3B59] text-[#E9ECF5] border border-white/10 hover:border-white/20 active:scale-[0.98]';
  } else {
    variantClasses = 'bg-white/5 hover:bg-white/10 text-[#E9ECF5] border border-white/10 hover:border-white/20 backdrop-blur-md active:scale-[0.98]';
  }

  const renderContent = () => {
    if (downloadState === 'initiating') {
      return (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-[#E9ECF5]" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Downloading...</span>
        </span>
      );
    }
    if (downloadState === 'started') {
      return (
        <span className="flex items-center gap-2 text-[#27C7B8]">
          <Check className="w-4 h-4" />
          <span>Download started</span>
        </span>
      );
    }
    return (
      <span className="flex items-center gap-2">
        {showIcon && <Download className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />}
        <span className="truncate">{label}</span>
      </span>
    );
  };

  return (
    <div className="inline-flex flex-col items-start">
      <a
        href={appConfig.apkDownloadUrl}
        download={appConfig.apkFilename}
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${sizeClasses[size]} ${variantClasses} ${className}`}
        aria-label={`Download ${appConfig.name} APK version ${appConfig.version}`}
      >
        {renderContent()}
      </a>
      {subtext && (
        <span className="text-[11px] text-[#8490A8] mt-1.5 pl-1 flex items-center gap-1.5">
          <span>{subtext}</span>
          <span className="w-1 h-1 rounded-full bg-[#8490A8]/50"></span>
          <span>{appConfig.fileSize}</span>
        </span>
      )}
    </div>
  );
};
