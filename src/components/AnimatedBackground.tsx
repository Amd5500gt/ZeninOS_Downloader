import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Primary Base Color */}
      <div className="absolute inset-0 bg-[#172033]" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(233, 236, 245, 0.25) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Electric Violet Orb (Top Left to Center) */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] left-[5%] w-[650px] h-[650px] rounded-full bg-[#6C63FF]/15 blur-[140px]"
      />

      {/* Teal Ambient Orb (Center Right to Lower) */}
      <motion.div
        animate={{
          x: [0, -50, 35, 0],
          y: [0, 45, -35, 0],
          scale: [1, 0.95, 1.12, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[28%] -right-[10%] w-[580px] h-[580px] rounded-full bg-[#27C7B8]/12 blur-[130px]"
      />

      {/* Deep Soft Purple Bloom (Lower Section) */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[65%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#9B8CFF]/10 blur-[150px]"
      />

      {/* Warm Amber Micro-Glow (Very subtle focal warmth) */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[18%] left-[45%] w-[320px] h-[320px] rounded-full bg-[#FFB86B]/10 blur-[100px]"
      />

      {/* Soft Vignette Overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#172033]/20 to-[#172033]/80" />
    </div>
  );
};
