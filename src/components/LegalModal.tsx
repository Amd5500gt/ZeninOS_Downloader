import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172033]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#1E2940] border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#27C7B8]" />
            ) : (
              <FileText className="w-5 h-5 text-[#9B8CFF]" />
            )}
            <h3 className="text-lg font-bold text-[#E9ECF5]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#263451] hover:bg-[#2D3B59] text-[#B7C0D4] hover:text-[#E9ECF5] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#B7C0D4] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong className="text-[#E9ECF5]">1. Local-First Architecture:</strong> Zenin OS is designed to preserve your personal attention and focus. Your tasks, habit streaks, focus session logs, and daily schedules are stored directly on your Android device.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">2. Zero Telemetry & Ad Tracking:</strong> We do not sell your personal behavior, task records, or routine data to advertising networks.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">3. AI Planner Processing:</strong> The AI Day Planner schedules your tasks and habits within your local session parameters. No identifiable personal health or confidential notes are exported.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">4. App Permissions:</strong> Zenin OS requests standard Android permissions strictly necessary for timer alarms, habit notification reminders, and local storage.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-[#E9ECF5]">1. Acceptance of Terms:</strong> By downloading, installing, or accessing the Zenin OS Android application, you agree to these Terms of Service.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">2. Personal Productivity Use:</strong> Zenin OS is provided as a personal daily productivity, habit tracking, and focus system.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">3. Distribution & Ownership:</strong> All rights, title, and interest in Zenin OS, including algorithms, branding, and interface elements, remain the exclusive property of Zenin OS.
              </p>
              <p>
                <strong className="text-[#E9ECF5]">4. Warranty Disclaimer:</strong> Zenin OS is provided "as is" to help you structure your day intentionally.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#263451] hover:bg-[#2D3B59] text-xs font-semibold text-[#E9ECF5] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
