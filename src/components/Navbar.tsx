import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { ZeninLogo } from './ZeninLogo';
import { DownloadButton } from './DownloadButton';
import { appConfig } from '../config/appConfig';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Features', href: '#features' },
  { name: 'AI Planner', href: '#ai-planner' },
  { name: 'Focus', href: '#focus' },
  { name: 'Habits', href: '#habits' },
  { name: 'Download', href: '#download' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#172033]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-[#172033]/40 py-3'
          : 'bg-[#172033]/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ZONE 1: BRAND LOGO */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-lg transition-transform hover:scale-[1.02]"
            aria-label="Zenin OS Home"
          >
            <ZeninLogo size="md" />
          </a>

          {/* ZONE 2: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="text-sm font-medium text-[#B7C0D4] hover:text-[#E9ECF5] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6C63FF] rounded"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ZONE 3: ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <DownloadButton
              size="sm"
              variant="primary"
              label="Download App"
              showIcon={true}
            />
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-xl bg-[#263451] border border-white/10 text-[#E9ECF5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE ANIMATED MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E2940]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#E9ECF5] hover:bg-[#263451] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <DownloadButton
              size="md"
              variant="primary"
              label="Download Zenin OS (APK)"
              subtext="Version 1.0.0"
              className="w-full justify-center"
            />
          </div>
        </div>
      )}
    </header>
  );
};
