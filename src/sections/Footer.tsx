import React, { useState } from 'react';
import { ZeninLogo } from '../components/ZeninLogo';
import { LegalModal } from '../components/LegalModal';
import { appConfig } from '../config/appConfig';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#1E2940] border-t border-white/10 pt-16 pb-12 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            
            {/* Logo & Tagline */}
            <div className="space-y-2">
              <ZeninLogo size="md" />
              <p className="text-sm text-[#8490A8]">
                Your personal productivity OS.
              </p>
            </div>

            {/* Navigation & Legal Links */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-[#B7C0D4]">
              <a
                href="#features"
                onClick={e => handleNavClick(e, '#features')}
                className="hover:text-[#E9ECF5] transition-colors"
              >
                Features
              </a>
              <a
                href="#ai-planner"
                onClick={e => handleNavClick(e, '#ai-planner')}
                className="hover:text-[#E9ECF5] transition-colors"
              >
                AI Planner
              </a>
              <a
                href="#focus"
                onClick={e => handleNavClick(e, '#focus')}
                className="hover:text-[#E9ECF5] transition-colors"
              >
                Focus
              </a>
              <a
                href="#habits"
                onClick={e => handleNavClick(e, '#habits')}
                className="hover:text-[#E9ECF5] transition-colors"
              >
                Habits
              </a>
              <a
                href="#download"
                onClick={e => handleNavClick(e, '#download')}
                className="hover:text-[#E9ECF5] transition-colors"
              >
                Download
              </a>
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-[#E9ECF5] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-[#E9ECF5] transition-colors cursor-pointer"
              >
                Terms
              </button>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8490A8] gap-4">
            <div>
              © 2026 Zenin OS. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <span>Release v{appConfig.version} (Android)</span>
              <span>·</span>
              <span>{appConfig.license}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};
