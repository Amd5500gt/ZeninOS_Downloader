import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Zap, Target, CheckCircle2, ChevronRight, RefreshCw } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

interface ScheduleSlot {
  time: string;
  duration: string;
  title: string;
  category: string;
  energy: 'HIGH ENERGY' | 'MEDIUM ENERGY' | 'LOW ENERGY';
  priority: 'CRITICAL' | 'NORMAL' | 'RECOVERY';
  recommendation: string;
}

const scheduleSlots: ScheduleSlot[] = [
  {
    time: '09:00',
    duration: '60 min',
    title: 'Deep Work Session',
    category: 'Architecture & Engineering',
    energy: 'HIGH ENERGY',
    priority: 'CRITICAL',
    recommendation: 'Zero notifications. 100% full immersion on highest-leverage priority.',
  },
  {
    time: '10:00',
    duration: '15 min',
    title: 'Short Break',
    category: 'Rest & Hydration',
    energy: 'LOW ENERGY',
    priority: 'RECOVERY',
    recommendation: 'Step away from screen. Hydrate 500ml water and optical reset.',
  },
  {
    time: '10:15',
    duration: '105 min',
    title: 'Project Work',
    category: 'Core Feature Build',
    energy: 'HIGH ENERGY',
    priority: 'CRITICAL',
    recommendation: 'Active code refactoring and pipeline tests before midday transition.',
  },
  {
    time: '12:00',
    duration: '45 min',
    title: 'Habit Session',
    category: 'Physical & Mindfulness',
    energy: 'MEDIUM ENERGY',
    priority: 'NORMAL',
    recommendation: 'Complete midday movement streak and deliberate habit anchor.',
  },
  {
    time: '14:00',
    duration: '90 min',
    title: 'Focus Session',
    category: 'Execution Sprint',
    energy: 'HIGH ENERGY',
    priority: 'CRITICAL',
    recommendation: 'Secondary energy peak. Execute scheduled checklist items.',
  },
];

export const AIPlanner: React.FC = () => {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number>(0);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleSimulateRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
    }, 700);
  };

  const selectedSlot = scheduleSlots[selectedSlotIndex];

  return (
    <section id="ai-planner" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="INTELLIGENT STRUCTURING"
          title="Plan the day. Execute the plan."
          subtitle="Zenin OS uses your tasks, habits and focus context to create a structured daily plan."
        />

        {/* Large AI Planner Surface Interface */}
        <div className="rounded-3xl bg-[#1E2940] border border-white/15 p-6 sm:p-10 shadow-2xl shadow-[#172033]/90 relative overflow-hidden">
          
          {/* Subtle Ambient Glow behind AI Planner */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#6C63FF]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#27C7B8]/10 blur-3xl pointer-events-none" />

          {/* Planner Control Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#9B8CFF] flex items-center justify-center text-[#E9ECF5] shadow-lg shadow-[#6C63FF]/30">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                {/* Micro Sparkle Accents */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB86B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB86B]"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9B8CFF]">
                    AI DAY PLANNER
                  </span>
                  <span className="text-[10px] text-[#27C7B8] font-mono">AUTOMATED</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E9ECF5] leading-tight">
                  Today's Plan
                </h3>
              </div>
            </div>

            {/* Quick Action Button for Interactive Demo */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleSimulateRegenerate}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#263451] hover:bg-[#2D3B59] text-xs font-semibold text-[#E9ECF5] border border-white/10 transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#9B8CFF] ${isRegenerating ? 'animate-spin' : ''}`} />
                <span>Rebalance Routine</span>
              </button>
            </div>
          </div>

          {/* Timeline & Details Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: SEQUENTIAL SCHEDULE TIMELINE */}
            <div className="lg:col-span-7 space-y-3">
              {scheduleSlots.map((slot, idx) => {
                const isSelected = selectedSlotIndex === idx;

                const energyBadgeColors = {
                  'HIGH ENERGY': 'text-[#FFB86B] bg-[#FFB86B]/10 border-[#FFB86B]/30',
                  'MEDIUM ENERGY': 'text-[#27C7B8] bg-[#27C7B8]/10 border-[#27C7B8]/30',
                  'LOW ENERGY': 'text-[#9B8CFF] bg-[#9B8CFF]/10 border-[#9B8CFF]/30',
                };

                return (
                  <motion.div
                    key={slot.time}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onClick={() => setSelectedSlotIndex(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#263451] border-[#6C63FF] shadow-lg shadow-[#6C63FF]/20 ring-1 ring-[#6C63FF]/50'
                        : 'bg-[#172033]/70 hover:bg-[#263451]/60 border-white/5'
                    }`}
                  >
                    {/* Time & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 font-mono text-sm font-bold text-[#E9ECF5] flex flex-col">
                        <span>{slot.time}</span>
                        <span className="text-[10px] text-[#8490A8] font-normal">{slot.duration}</span>
                      </div>

                      <div className="w-0.5 h-8 bg-white/10 hidden sm:block" />

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#E9ECF5] flex items-center gap-2">
                          {slot.title}
                        </h4>
                        <p className="text-xs text-[#8490A8] mt-0.5">
                          {slot.category}
                        </p>
                      </div>
                    </div>

                    {/* Energy & Priority Labels */}
                    <div className="flex items-center gap-2 sm:justify-end">
                      <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-lg border ${energyBadgeColors[slot.energy]}`}>
                        {slot.energy}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#8490A8] transition-transform ${isSelected ? 'translate-x-1 text-[#9B8CFF]' : ''}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT: INSPECTION CARD (Priority, Energy, Estimated time, Focus recommendation) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#172033]/90 border border-white/10 p-5 sm:p-6 space-y-5 text-left sticky top-28">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold text-[#9B8CFF] tracking-wider">
                  Slot Breakdown
                </span>
                <span className="text-xs font-mono text-[#27C7B8]">
                  {selectedSlot.time} Start
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#E9ECF5]">
                  {selectedSlot.title}
                </h4>
                <p className="text-xs text-[#8490A8] mt-1">
                  Category: {selectedSlot.category}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#263451]/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8490A8]">
                    <Target className="w-3.5 h-3.5 text-[#6C63FF]" />
                    <span>Priority</span>
                  </div>
                  <div className="text-sm font-bold text-[#E9ECF5] mt-1">
                    {selectedSlot.priority}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#263451]/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8490A8]">
                    <Zap className="w-3.5 h-3.5 text-[#FFB86B]" />
                    <span>Energy Profile</span>
                  </div>
                  <div className="text-sm font-bold text-[#FFB86B] mt-1">
                    {selectedSlot.energy}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#263451]/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8490A8]">
                    <Clock className="w-3.5 h-3.5 text-[#27C7B8]" />
                    <span>Estimated Time</span>
                  </div>
                  <div className="text-sm font-bold text-[#E9ECF5] mt-1">
                    {selectedSlot.duration}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#263451]/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8490A8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9B8CFF]" />
                    <span>Cadence</span>
                  </div>
                  <div className="text-sm font-bold text-[#27C7B8] mt-1">
                    Synchronized
                  </div>
                </div>
              </div>

              {/* Focus Recommendation Block */}
              <div className="p-4 rounded-xl bg-[#263451]/80 border-l-4 border-[#6C63FF] border border-white/5">
                <div className="text-xs uppercase font-bold text-[#9B8CFF] tracking-wider mb-1">
                  Focus Recommendation
                </div>
                <p className="text-xs text-[#B7C0D4] leading-relaxed">
                  {selectedSlot.recommendation}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
