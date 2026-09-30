import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { DownloadCard } from '../components/DownloadCard';
import { ShieldCheck, Cpu, HardDriveDownload, Sparkles } from 'lucide-react';
import { appConfig } from '../config/appConfig';

export const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="DIRECT INSTALLATION"
          title="Ready to build a better day?"
          subtitle="Download Zenin OS and turn your daily goals into a system."
        />

        {/* Premium Download Card */}
        <DownloadCard />

        {/* Installation Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 text-left">
          
          <div className="p-4 rounded-2xl bg-[#1E2940]/60 border border-white/5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#27C7B8]/15 flex items-center justify-center text-[#27C7B8] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#E9ECF5] uppercase tracking-wide">
                Direct APK
              </h4>
              <p className="text-xs text-[#8490A8] mt-0.5">
                Safe, signed package ready for standard Android installation.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1E2940]/60 border border-white/5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#9B8CFF]/15 flex items-center justify-center text-[#9B8CFF] shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#E9ECF5] uppercase tracking-wide">
                Local-First
              </h4>
              <p className="text-xs text-[#8490A8] mt-0.5">
                Fast on-device performance with zero network latency required.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1E2940]/60 border border-white/5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFB86B]/15 flex items-center justify-center text-[#FFB86B] shrink-0">
              <HardDriveDownload className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#E9ECF5] uppercase tracking-wide">
                Compact Size
              </h4>
              <p className="text-xs text-[#8490A8] mt-0.5">
                Lightweight {appConfig.fileSize} footprint optimized for battery efficiency.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
