import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckSquare, Flame, Timer, Info } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const ProductivityScore: React.FC = () => {
  const [tasksPercent, setTasksPercent] = useState(92);
  const [habitsPercent, setHabitsPercent] = useState(84);
  const [focusPercent, setFocusPercent] = useState(88);

  // Calculated composite score: 0.35 tasks + 0.30 habits + 0.35 focus
  const calculatedScore = Math.round(
    tasksPercent * 0.35 + habitsPercent * 0.30 + focusPercent * 0.35
  );

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="HOLISTIC SYNTHESIS"
          title="See how consistently you are showing up."
          subtitle="Zenin OS transforms your daily tasks, habits, and focus hours into an objective, unified productivity metric."
        />

        {/* Main Stage Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#1E2940] border border-white/10 p-8 sm:p-12 shadow-2xl shadow-[#172033]/90 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#6C63FF]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: LARGE NUMBER & SCORE DIAL */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#172033]/70 border border-white/5">
              
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Track Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#263451"
                    strokeWidth="7"
                  />
                  {/* Active Dial Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#scoreGradientSystem)"
                    strokeWidth="7"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * calculatedScore) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGradientSystem" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" />
                      <stop offset="50%" stopColor="#9B8CFF" />
                      <stop offset="100%" stopColor="#27C7B8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score Number inside */}
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl sm:text-6xl font-black text-[#E9ECF5] tracking-tight tabular-nums font-mono">
                    {calculatedScore}
                  </span>
                  <span className="text-[10px] text-[#27C7B8] font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Peak Rhythm</span>
                  </span>
                </div>
              </div>

              <span className="text-xs uppercase font-extrabold tracking-widest text-[#B7C0D4] mt-5">
                PRODUCTIVITY SCORE
              </span>
              <span className="text-[11px] text-[#8490A8] mt-1 font-mono">
                Model: Zenin Chrono-Engine
              </span>
            </div>

            {/* RIGHT: COMPONENT BREAKDOWN PROGRESS BARS */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#9B8CFF] tracking-wider">
                  Engine Component Weighting
                </span>
                <span className="text-xs text-[#8490A8] font-mono">Real-time Composite</span>
              </div>

              {/* Tasks: 92% (Teal) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 font-semibold text-[#E9ECF5]">
                    <CheckSquare className="w-4 h-4 text-[#27C7B8]" />
                    <span>Tasks Completed</span>
                  </div>
                  <span className="font-mono font-bold text-[#27C7B8] tabular-nums">
                    {tasksPercent}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-[#172033] p-0.5 border border-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tasksPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#27C7B8] to-[#1E9F93]"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#8490A8]">
                  <span>Execution fidelity</span>
                  <span>11 of 12 closed</span>
                </div>
              </div>

              {/* Habits: 84% (Amber) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 font-semibold text-[#E9ECF5]">
                    <Flame className="w-4 h-4 text-[#FFB86B]" />
                    <span>Habit Discipline</span>
                  </div>
                  <span className="font-mono font-bold text-[#FFB86B] tabular-nums">
                    {habitsPercent}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-[#172033] p-0.5 border border-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${habitsPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#FFB86B] to-[#FF9B42]"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#8490A8]">
                  <span>Cadence maintenance</span>
                  <span>Active multi-day streaks</span>
                </div>
              </div>

              {/* Focus: 88% (Electric Violet) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 font-semibold text-[#E9ECF5]">
                    <Timer className="w-4 h-4 text-[#9B8CFF]" />
                    <span>Focus Immersion</span>
                  </div>
                  <span className="font-mono font-bold text-[#9B8CFF] tabular-nums">
                    {focusPercent}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-[#172033] p-0.5 border border-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${focusPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#9B8CFF]"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#8490A8]">
                  <span>Deep work depth</span>
                  <span>3.5 hours recorded</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
