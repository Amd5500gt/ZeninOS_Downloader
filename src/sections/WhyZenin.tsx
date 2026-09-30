import React from 'react';
import { motion } from 'framer-motion';

const statements = [
  { text: 'Less distraction.', highlight: false },
  { text: 'More execution.', highlight: false },
  { text: 'Better consistency.', highlight: false },
  { text: 'One system.', highlight: true },
];

export const WhyZenin: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#1E2940]/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Editorial Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase font-bold tracking-widest text-[#9B8CFF] block mb-8"
        >
          THE PHILOSOPHY
        </motion.span>

        {/* Big Typography Statements */}
        <div className="space-y-4 sm:space-y-6">
          {statements.map((stmt, idx) => (
            <motion.div
              key={stmt.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="overflow-hidden"
            >
              <h3
                className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight [text-wrap:balance] ${
                  stmt.highlight
                    ? 'bg-gradient-to-r from-[#6C63FF] via-[#9B8CFF] to-[#27C7B8] bg-clip-text text-transparent'
                    : 'text-[#E9ECF5]'
                }`}
              >
                {stmt.text}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Final Anchor Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-white/10 max-w-xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-semibold text-[#27C7B8] tracking-tight">
            Build your day intentionally.
          </p>
          <p className="text-sm text-[#8490A8] mt-3 leading-relaxed">
            Most productivity tools fragment your workflow across disparate tabs. Zenin OS consolidates your goals, habits, and hours into a single native Android operating environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
