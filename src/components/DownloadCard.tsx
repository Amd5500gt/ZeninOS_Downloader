import React, { useState } from 'react';
import { ShieldCheck, Smartphone, Check, ArrowRight, ExternalLink, Download } from 'lucide-react';
import { ZeninLogo } from './ZeninLogo';
import { DownloadButton } from './DownloadButton';
import { appConfig } from '../config/appConfig';

export const DownloadCard: React.FC = () => {
  const [showPlayNotice, setShowPlayNotice] = useState(false);

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#1E2940] to-[#263451] p-6 sm:p-10 border border-white/15 shadow-2xl shadow-[#172033]/90 max-w-2xl mx-auto overflow-hidden text-center">
      {/* Ambient background accents */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#6C63FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#27C7B8]/15 blur-3xl pointer-events-none" />

      {/* Top OS Pill */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <ZeninLogo size="lg" showText={false} />
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E9ECF5] tracking-tight">
        {appConfig.name}
      </h3>
      
      <p className="text-sm font-medium text-[#9B8CFF] mt-1">
        {appConfig.tagline}
      </p>

      {/* Metadata Specification Grid */}
      <div className="grid grid-cols-3 gap-3 my-7 py-4 px-3 rounded-2xl bg-[#172033]/60 border border-white/5">
        <div>
          <span className="text-[11px] text-[#8490A8] uppercase tracking-wider block font-semibold">
            Platform
          </span>
          <span className="text-sm font-bold text-[#E9ECF5] mt-0.5 block">
            Android
          </span>
        </div>
        <div className="border-x border-white/10">
          <span className="text-[11px] text-[#8490A8] uppercase tracking-wider block font-semibold">
            Version
          </span>
          <span className="text-sm font-bold text-[#27C7B8] font-mono mt-0.5 block">
            {appConfig.version}
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[#8490A8] uppercase tracking-wider block font-semibold">
            Status
          </span>
          <span className="text-sm font-bold text-[#FFB86B] mt-0.5 block">
            {appConfig.license}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Main APK Download Button */}
        <DownloadButton
          size="lg"
          variant="primary"
          label="Download APK"
          showIcon={true}
          className="w-full sm:w-auto px-8"
        />

        {/* Google Play Secondary Button */}
        <button
          onClick={() => setShowPlayNotice(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#263451] hover:bg-[#2D3B59] text-[#E9ECF5] text-base font-semibold border border-white/10 transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          {/* Google Play Store Vector Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.94 1.94 0 01-.22-.917V2.731c0-.342.08-.657.22-.917zM15.207 13.414l2.707 2.707-13.06 7.54 10.353-10.247zm0-2.828L4.854.339 17.914 7.88l-2.707 2.706zm1.414 1.414l3.774-2.18c.957-.553.957-1.455 0-2.008l-3.774-2.179 2.122 2.122a1.5 1.5 0 010 2.122l-2.122 2.123z" />
          </svg>
          <span>Google Play</span>
        </button>
      </div>

      {/* Google Play Release Notice Popover */}
      {showPlayNotice && (
        <div className="mt-4 p-3.5 rounded-xl bg-[#2D3B59]/90 border border-[#6C63FF]/40 text-xs text-[#E9ECF5] flex items-center justify-between animate-in fade-in duration-200">
          <span>
            Google Play store listing is currently processing. You can install the release APK directly right now!
          </span>
          <button
            onClick={() => setShowPlayNotice(false)}
            className="ml-3 text-[#9B8CFF] hover:text-[#E9ECF5] font-semibold text-xs shrink-0 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Small Note */}
      <p className="mt-5 text-xs text-[#8490A8] flex items-center justify-center gap-1.5">
        <Smartphone className="w-3.5 h-3.5" />
        <span>Android application</span>
        <span>·</span>
        <span>File size {appConfig.fileSize}</span>
      </p>
    </div>
  );
};
