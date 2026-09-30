import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Check, Sparkles, Plus, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

interface HabitItem {
  id: string;
  name: string;
  category: string;
  streak: number;
  completedToday: boolean;
  history: boolean[]; // Last 7 days
  frequency: string;
}

export const Habits: React.FC = () => {
  const [habits, setHabits] = useState<HabitItem[]>([
    {
      id: 'meditation',
      name: 'Morning Meditation',
      category: 'Mindfulness',
      streak: 12,
      completedToday: true,
      history: [true, true, true, true, true, true, true],
      frequency: 'Every Morning · 10 min',
    },
    {
      id: 'water',
      name: 'Drink Water',
      category: 'Health & Hydration',
      streak: 8,
      completedToday: true,
      history: [true, true, true, true, true, true, true],
      frequency: 'Throughout Day · 2.5L',
    },
    {
      id: 'coding',
      name: 'Coding Practice',
      category: 'Skill Growth',
      streak: 21,
      completedToday: false,
      history: [true, true, true, true, true, true, false],
      frequency: 'Daily Session · 45 min',
    },
  ]);

  const toggleHabit = (id: string) => {
    setHabits(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextCompleted = !item.completedToday;
          const nextStreak = nextCompleted ? item.streak + 1 : Math.max(1, item.streak - 1);
          const nextHistory = [...item.history];
          nextHistory[nextHistory.length - 1] = nextCompleted;
          return {
            ...item,
            completedToday: nextCompleted,
            streak: nextStreak,
            history: nextHistory,
          };
        }
        return item;
      })
    );
  };

  return (
    <section id="habits" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="DISCIPLINED REPETITION"
          title="Consistency compounds."
          subtitle="Build consistency one day at a time with streak-anchored daily habits."
        />

        {/* Demo Disclaimer notice - anti-slop */}
        <div className="text-center -mt-6 mb-10">
          <span className="text-[11px] text-[#8490A8] font-mono tracking-wider uppercase">
            [ Interactive Demo Habits · Tap to test completion logic ]
          </span>
        </div>

        {/* 3 Habit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {habits.map((habit, idx) => (
            <motion.div
              key={habit.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl bg-[#1E2940] border border-white/10 hover:border-white/20 p-6 sm:p-7 shadow-xl shadow-[#172033]/60 flex flex-col justify-between transition-colors relative overflow-hidden group"
            >
              {/* Subtle amber / teal rim glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFB86B]/10 to-[#27C7B8]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header: Category & Streak Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#8490A8] uppercase tracking-wider">
                    {habit.category}
                  </span>
                  
                  {/* Streak Indicator (Amber Accent) */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FFB86B]/15 border border-[#FFB86B]/30 text-[#FFB86B] text-xs font-bold font-mono">
                    <Flame className="w-3.5 h-3.5 fill-[#FFB86B]" />
                    <span>{habit.streak} day streak</span>
                  </div>
                </div>

                {/* Habit Name */}
                <h3 className="text-xl font-bold text-[#E9ECF5] tracking-tight">
                  {habit.name}
                </h3>
                <p className="text-xs text-[#B7C0D4] mt-1">
                  {habit.frequency}
                </p>

                {/* 7-Day Matrix Dot Visualization */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-[#8490A8] mb-2 font-mono">
                    <span>PAST 7 DAYS</span>
                    <span className="text-[#27C7B8]">100% CADENCE</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {habit.history.map((done, dayIdx) => (
                      <div key={dayIdx} className="flex flex-col items-center gap-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            done
                              ? 'bg-gradient-to-br from-[#27C7B8] to-[#1E9F93] text-[#172033] font-bold text-xs shadow-sm shadow-[#27C7B8]/20'
                              : 'bg-[#263451] text-[#8490A8] border border-white/10 text-xs'
                          }`}
                        >
                          {done ? '✓' : ''}
                        </div>
                        <span className="text-[9px] text-[#8490A8] font-mono">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][dayIdx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Today's Toggle Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    habit.completedToday
                      ? 'bg-[#27C7B8]/20 hover:bg-[#27C7B8]/30 text-[#27C7B8] border border-[#27C7B8]/40'
                      : 'bg-[#263451] hover:bg-[#2D3B59] text-[#E9ECF5] border border-white/10'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                      habit.completedToday
                        ? 'bg-[#27C7B8] border-[#27C7B8] text-[#172033]'
                        : 'border-white/30'
                    }`}
                  >
                    {habit.completedToday && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{habit.completedToday ? 'Completed Today' : 'Mark Done For Today'}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
