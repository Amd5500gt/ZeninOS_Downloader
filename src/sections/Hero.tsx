import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Sparkles, Flame, Timer, CheckCircle } from 'lucide-react';
import { PhoneMockup } from '../components/PhoneMockup';
import { OrbitAnimation } from '../components/OrbitAnimation';
import { DownloadButton } from '../components/DownloadButton';
import { Button } from '../components/Button';
import { appConfig } from '../config/appConfig';

export const Hero: React.FC = () => {
  const handleScrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8 z-10">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#263451]/80 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#9B8CFF]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#27C7B8] animate-pulse" />
              <span>PERSONAL PRODUCTIVITY OS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#E9ECF5] leading-[1.1] [text-wrap:balance]"
            >
              Your Day. <br />
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#9B8CFF] to-[#27C7B8] bg-clip-text text-transparent">
                Your Focus.
              </span> <br />
              Your OS.
            </motion.h1>

            {/* Value Proposition Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#B7C0D4] font-normal leading-relaxed max-w-2xl [text-wrap:pretty]"
            >
              Zenin OS brings tasks, habits, focus sessions and AI-powered daily planning into one disciplined productivity system.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <DownloadButton
                size="lg"
                variant="primary"
                label="Download Zenin OS"
                showIcon={true}
              />

              <Button
                variant="glass"
                size="lg"
                onClick={handleScrollToFeatures}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Features
              </Button>
            </motion.div>

            {/* Built for Android Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs font-medium text-[#8490A8] pt-1"
            >
              <Smartphone className="w-4 h-4 text-[#27C7B8]" />
              <span>Built for Android</span>
              <span>·</span>
              <span>Standalone APK Version {appConfig.version}</span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: SYSTEM CORE ACTIVE (0.7 SCALE + MOBILE & DESKTOP OUTER BADGES) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0 overflow-visible">
            
            {/* 2D Orbital Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-90">
              <OrbitAnimation />
            </div>

            {/* Main Stage Stage Container (tightly bounded to avoid mobile overflow) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[480px] sm:h-[510px] flex items-center justify-center">

              {/* Slow Floating Phone Container (Scaled to 0.7) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 origin-center scale-[0.70] shrink-0"
              >
                {/* Realistic Phone Mockup Screen Preview */}
                <PhoneMockup />
              </motion.div>

              {/* Outer Badge 1: 12 Day Streak (Top Right) - Visible on Mobile & Desktop */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
                className="absolute top-4 sm:top-6 right-0 sm:-right-4 p-2 sm:p-2.5 rounded-2xl bg-[#1E2940]/95 backdrop-blur-md border border-white/15 shadow-xl shadow-[#172033]/80 flex items-center gap-2 sm:gap-2.5 z-20 select-none"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FFB86B]/20 flex items-center justify-center text-[#FFB86B]">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFB86B]" />
                </div>
                <div className="leading-tight text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#E9ECF5] whitespace-nowrap">
                    12 day streak
                  </div>
                  <div className="text-[9px] text-[#8490A8] hidden xs:block">
                    Demo indicator
                  </div>
                </div>
              </motion.div>

              {/* Outer Badge 2: 25 Min Focus (Left Middle) - Visible on Mobile & Desktop */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className="absolute top-36 sm:top-40 left-0 sm:-left-4 p-2 sm:p-2.5 rounded-2xl bg-[#1E2940]/95 backdrop-blur-md border border-white/15 shadow-xl shadow-[#172033]/80 flex items-center gap-2 sm:gap-2.5 z-20 select-none"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#9B8CFF]/20 flex items-center justify-center text-[#9B8CFF]">
                  <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="leading-tight text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#E9ECF5] whitespace-nowrap">
                    25 min focus
                  </div>
                  <div className="text-[9px] text-[#27C7B8] hidden xs:block">
                    Flow achieved
                  </div>
                </div>
              </motion.div>

              {/* Outer Badge 3: AI Plan Ready (Bottom Right) - Visible on Mobile & Desktop */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
                className="absolute bottom-14 sm:bottom-16 right-0 sm:-right-2 p-2 sm:p-2.5 rounded-2xl bg-[#1E2940]/95 backdrop-blur-md border border-[#6C63FF]/40 shadow-xl shadow-[#172033]/80 flex items-center gap-2 sm:gap-2.5 z-20 select-none"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#6C63FF]/20 flex items-center justify-center text-[#9B8CFF]">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="leading-tight text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#E9ECF5] whitespace-nowrap">
                    AI PLAN READY
                  </div>
                  <div className="text-[9px] text-[#8490A8] hidden xs:block">
                    Structured day
                  </div>
                </div>
              </motion.div>

              {/* Outer Badge 4: Tasks Completed (Bottom Left) - Visible on Mobile & Desktop */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 5.9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-4 sm:bottom-6 left-0 sm:-left-2 p-2 sm:p-2.5 rounded-2xl bg-[#1E2940]/95 backdrop-blur-md border border-white/15 shadow-xl shadow-[#172033]/80 flex items-center gap-1.5 sm:gap-2 z-20 select-none"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#27C7B8]/20 flex items-center justify-center text-[#27C7B8]">
                  <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-[#E9ECF5] whitespace-nowrap">
                  3 tasks completed
                </span>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
