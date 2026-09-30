import React, { useState } from 'react';
import {
  Check,
  Flame,
  Sparkles,
  Timer,
  TrendingUp,
  Wifi,
  Battery,
  ChevronRight,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { ZeninVectorIcon } from './ZeninVectorIcon';

export interface PhoneMockupProps {
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
  // Interactive state for dashboard inside phone mockup
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Deep Work Session', done: true, time: '09:00 - 10:30' },
    { id: 2, title: 'Build Project Engine', done: false, time: '11:00 - 12:45' },
    { id: 3, title: 'Health & Exercise', done: false, time: '17:30 - 18:30' },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div
      className={`relative mx-auto w-[290px] sm:w-[315px] h-[610px] rounded-[44px] bg-[#172033] p-[10px] shadow-2xl shadow-[#172033]/90 border-[5px] border-[#2D3B59] select-none ${className}`}
      style={{
        boxShadow:
          '0 25px 60px -15px rgba(23, 32, 51, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(108, 99, 255, 0.08)',
      }}
    >
      {/* Outer Rim Light Accent */}
      <div className="absolute inset-0 rounded-[39px] pointer-events-none border border-white/10" />

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[34px] bg-[#172033] overflow-hidden flex flex-col justify-between border border-white/5">
        
        {/* Top Status Bar */}
        <div className="pt-3 px-5 pb-1 flex items-center justify-between text-[11px] font-mono text-[#B7C0D4]/80 z-20">
          <span className="font-semibold tracking-tight">09:41</span>
          
          {/* Centered Android Punch-Hole Camera */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#111726] border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#27C7B8]/40" />
          </div>

          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3 text-[#B7C0D4]" />
            <Battery className="w-3.5 h-3.5 text-[#27C7B8]" />
          </div>
        </div>

        {/* Screen Content Body */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 scrollbar-none text-left">
          
          {/* App Header with Official Zenin OS Logo */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#263451] border border-white/10 flex items-center justify-center p-0.5">
                <ZeninVectorIcon size={20} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#9B8CFF] block leading-none">
                  ZENIN OS
                </span>
                <h3 className="text-base font-bold text-[#E9ECF5] leading-tight">
                  Good Morning
                </h3>
              </div>
            </div>

            <div className="w-7 h-7 rounded-lg bg-[#263451] border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#27C7B8]" />
            </div>
          </div>

          {/* Productivity Score Card */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#263451] to-[#1E2940] border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8490A8]">
                  Productivity Score
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-extrabold text-[#E9ECF5] tabular-nums font-mono">
                    87
                  </span>
                  <span className="text-xs text-[#27C7B8] font-medium">+4% today</span>
                </div>
              </div>

              {/* Circular Score Indicator */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#1E2940"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="url(#screenGradScore)"
                    strokeWidth="3.5"
                    strokeDasharray="88 100"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="screenGradScore" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" />
                      <stop offset="100%" stopColor="#27C7B8" />
                    </linearGradient>
                  </defs>
                </svg>
                <TrendingUp className="w-4 h-4 text-[#27C7B8] absolute" />
              </div>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-0.5">
              <span className="text-xs font-semibold text-[#B7C0D4]">Today's Tasks</span>
              <span className="text-[10px] text-[#8490A8]">
                {tasks.filter(t => t.done).length}/{tasks.length} Done
              </span>
            </div>

            <div className="space-y-1.5">
              {tasks.map(task => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#1E2940]/90 hover:bg-[#263451] border border-white/5 transition-colors text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center border transition-all ${
                        task.done
                          ? 'bg-[#27C7B8] border-[#27C7B8] text-[#172033]'
                          : 'border-white/20 group-hover:border-[#9B8CFF]'
                      }`}
                    >
                      {task.done && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-xs font-medium transition-all ${
                        task.done
                          ? 'line-through text-[#8490A8]'
                          : 'text-[#E9ECF5]'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[#8490A8]">{task.time}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Split: Focus & Habit Streak */}
          <div className="grid grid-cols-2 gap-2">
            {/* Focus Tile */}
            <div className="p-3 rounded-2xl bg-[#1E2940] border border-white/5">
              <div className="flex items-center justify-between text-[#9B8CFF]">
                <span className="text-[10px] font-semibold uppercase">Focus</span>
                <Timer className="w-3.5 h-3.5" />
              </div>
              <div className="text-lg font-bold text-[#E9ECF5] mt-1 tabular-nums font-mono">
                25:00
              </div>
              <div className="text-[10px] text-[#27C7B8] flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C7B8] animate-pulse" />
                <span>Deep sprint</span>
              </div>
            </div>

            {/* Habit Streak Tile */}
            <div className="p-3 rounded-2xl bg-[#1E2940] border border-white/5">
              <div className="flex items-center justify-between text-[#FFB86B]">
                <span className="text-[10px] font-semibold uppercase">Streak</span>
                <Flame className="w-3.5 h-3.5 fill-[#FFB86B]/20" />
              </div>
              <div className="text-lg font-bold text-[#E9ECF5] mt-1 tabular-nums font-mono">
                12 <span className="text-xs font-normal text-[#8490A8]">days</span>
              </div>
              <div className="text-[10px] text-[#FFB86B] mt-0.5">
                Consistent flow
              </div>
            </div>
          </div>

          {/* AI Plan Banner */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-[#263451] to-[#1E2940] border border-[#6C63FF]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#9B8CFF]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#9B8CFF] tracking-wider block">
                  AI Day Plan
                </span>
                <span className="text-xs font-semibold text-[#E9ECF5]">
                  "Your day is structured."
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8490A8]" />
          </div>

        </div>

        {/* Bottom Android App Navigation Bar */}
        <div className="px-3 py-2 bg-[#1E2940]/90 border-t border-white/10 flex items-center justify-around text-[#8490A8] text-[10px]">
          <div className="flex flex-col items-center gap-0.5 text-[#9B8CFF]">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-[9px]">Today</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-[9px]">Tasks</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Timer className="w-3.5 h-3.5" />
            <span className="text-[9px]">Focus</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Flame className="w-3.5 h-3.5" />
            <span className="text-[9px]">Habits</span>
          </div>
        </div>

        {/* Android Home Navigation Bar Pill */}
        <div className="pb-1.5 pt-0.5 flex justify-center bg-[#1E2940]/90">
          <div className="w-24 h-1 rounded-full bg-white/20" />
        </div>

      </div>
    </div>
  );
};
