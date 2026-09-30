import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare,
  Flame,
  Timer,
  Sparkles,
  TrendingUp,
  History,
  Check,
  ArrowRight
} from 'lucide-react';

export type FeatureType = 'tasks' | 'habits' | 'focus' | 'ai' | 'productivity' | 'history';

interface FeatureCardProps {
  id: FeatureType;
  title: string;
  description: string;
  iconName: 'CheckSquare' | 'Flame' | 'Timer' | 'Sparkles' | 'TrendingUp' | 'History';
  accentColor?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  iconName,
}) => {
  // Interactive mini states
  const [taskChecked, setTaskChecked] = useState([true, true, false]);
  const [activeStreakIndex, setActiveStreakIndex] = useState(4);

  const getIcon = () => {
    switch (iconName) {
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-[#27C7B8]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#FFB86B]" />;
      case 'Timer':
        return <Timer className="w-5 h-5 text-[#9B8CFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#6C63FF]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#27C7B8]" />;
      case 'History':
        return <History className="w-5 h-5 text-[#9B8CFF]" />;
      default:
        return <CheckSquare className="w-5 h-5 text-[#6C63FF]" />;
    }
  };

  // Render dedicated 2D HTML/CSS/SVG illustration
  const renderIllustration = () => {
    switch (id) {
      case 'tasks':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex flex-col justify-center space-y-2">
            {[
              { text: 'Architecture draft', done: taskChecked[0], idx: 0 },
              { text: 'Core focus block', done: taskChecked[1], idx: 1 },
              { text: 'Evening review', done: taskChecked[2], idx: 2 },
            ].map(item => (
              <div
                key={item.idx}
                onClick={() => {
                  const next = [...taskChecked];
                  next[item.idx] = !next[item.idx];
                  setTaskChecked(next);
                }}
                className="flex items-center gap-2.5 text-xs cursor-pointer select-none group/item"
              >
                <div
                  className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                    item.done
                      ? 'bg-[#27C7B8] border-[#27C7B8] text-[#172033]'
                      : 'border-white/20 group-hover/item:border-[#27C7B8]'
                  }`}
                >
                  {item.done && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span
                  className={`text-[11px] font-medium transition-colors ${
                    item.done ? 'line-through text-[#8490A8]' : 'text-[#E9ECF5]'
                  }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        );

      case 'habits':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex flex-col justify-center">
            <div className="flex items-center justify-between text-[11px] text-[#8490A8] mb-2">
              <span>Weekly Discipline</span>
              <span className="text-[#FFB86B] font-semibold flex items-center gap-1">
                <Flame className="w-3 h-3 fill-[#FFB86B]" /> 12d streak
              </span>
            </div>
            {/* 7 Days of the week circles */}
            <div className="flex items-center justify-between gap-1.5 pt-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => {
                const isComplete = idx <= activeStreakIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStreakIndex(idx)}
                    className="flex flex-col items-center gap-1.5 focus:outline-none"
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
                        isComplete
                          ? 'bg-gradient-to-br from-[#FFB86B] to-[#FF9B42] text-[#172033] shadow-sm shadow-[#FFB86B]/30'
                          : 'bg-[#263451] text-[#8490A8] border border-white/5'
                      }`}
                    >
                      {isComplete ? '✓' : ''}
                    </div>
                    <span className="text-[9px] text-[#8490A8]">{day}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'focus':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex items-center justify-center gap-5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" stroke="#263451" strokeWidth="3" fill="none" />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="#9B8CFF"
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset="28"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xs font-bold text-[#E9ECF5] tabular-nums">25:00</span>
                <span className="text-[8px] text-[#27C7B8] font-mono">FLOW</span>
              </div>
            </div>
            <div className="space-y-1 text-left">
              <div className="text-[10px] uppercase font-bold text-[#9B8CFF]">Deep Work</div>
              <div className="text-xs font-semibold text-[#E9ECF5]">Sprint Phase</div>
              <div className="text-[10px] text-[#8490A8]">Zero distraction mode</div>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex flex-col justify-center space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#9B8CFF]">
              <span>AI AUTO-TIMELINE</span>
              <span className="text-[#27C7B8]">OPTIMIZED</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#263451]/70 border-l-2 border-[#6C63FF]">
              <span className="text-[10px] font-mono text-[#8490A8]">09:00</span>
              <span className="text-xs font-medium text-[#E9ECF5]">Deep Work Session</span>
              <span className="ml-auto text-[9px] text-[#FFB86B]">HIGH</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#263451]/70 border-l-2 border-[#27C7B8]">
              <span className="text-[10px] font-mono text-[#8490A8]">10:15</span>
              <span className="text-xs font-medium text-[#E9ECF5]">Habit Execution</span>
              <span className="ml-auto text-[9px] text-[#27C7B8]">MED</span>
            </div>
          </div>
        );

      case 'productivity':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex items-center justify-around">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" stroke="#263451" strokeWidth="3" fill="none" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    stroke="#27C7B8"
                    strokeWidth="3"
                    strokeDasharray="88 100"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="absolute text-sm font-bold text-[#E9ECF5] tabular-nums">87</span>
              </div>
              <span className="text-[9px] text-[#8490A8] uppercase tracking-wider mt-1">Daily Score</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div>
                <div className="flex justify-between text-[10px] text-[#B7C0D4]">
                  <span>Tasks</span>
                  <span className="font-mono text-[#27C7B8]">92%</span>
                </div>
                <div className="w-20 h-1 rounded-full bg-[#263451] overflow-hidden mt-0.5">
                  <div className="h-full bg-[#27C7B8] rounded-full w-[92%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-[#B7C0D4]">
                  <span>Focus</span>
                  <span className="font-mono text-[#9B8CFF]">88%</span>
                </div>
                <div className="w-20 h-1 rounded-full bg-[#263451] overflow-hidden mt-0.5">
                  <div className="h-full bg-[#9B8CFF] rounded-full w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="h-32 w-full rounded-xl bg-[#172033]/80 p-3 border border-white/5 flex flex-col justify-center">
            <div className="flex items-center justify-between text-[11px] text-[#8490A8] mb-1">
              <span>7-Day Trajectory</span>
              <span className="text-[#27C7B8] font-mono text-[10px]">+14% Growth</span>
            </div>
            <svg viewBox="0 0 160 50" className="w-full h-12 overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6C63FF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 5,42 Q 30,38 55,28 T 105,18 T 155,8"
                fill="none"
                stroke="#6C63FF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 5,42 Q 30,38 55,28 T 105,18 T 155,8 L 155,50 L 5,50 Z"
                fill="url(#chartGrad)"
              />
              <circle cx="155" cy="8" r="3.5" fill="#27C7B8" />
            </svg>
            <div className="flex justify-between text-[9px] font-mono text-[#8490A8] mt-1">
              <span>MON</span>
              <span>WED</span>
              <span>FRI</span>
              <span>SUN</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative rounded-2xl bg-[#1E2940] hover:bg-[#263451]/90 p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-[#172033]/50 flex flex-col justify-between overflow-hidden"
    >
      {/* Top subtle highlight rim */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header & Icon */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#263451] group-hover:bg-[#2D3B59] border border-white/10 flex items-center justify-center transition-colors">
            {getIcon()}
          </div>
          <h3 className="text-lg font-bold text-[#E9ECF5] tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm text-[#B7C0D4] leading-relaxed mb-5">
          {description}
        </p>
      </div>

      {/* 2D Interactive / UI Visual */}
      <div className="mt-auto pt-2">
        {renderIllustration()}
      </div>
    </motion.div>
  );
};
