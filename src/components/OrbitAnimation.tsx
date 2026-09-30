import React from 'react';
import { motion } from 'framer-motion';

export const OrbitAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10" aria-hidden="true">
      <svg
        viewBox="0 0 700 700"
        className="w-[140%] max-w-[700px] h-[140%] max-h-[700px] overflow-visible opacity-55"
        fill="none"
      >
        <defs>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#27C7B8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6C63FF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB86B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#27C7B8" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Outer Circular Orbit Ring */}
        <circle
          cx="350"
          cy="350"
          r="260"
          stroke="url(#orbitGrad1)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />

        {/* Middle Solid Thin Orbit */}
        <circle
          cx="350"
          cy="350"
          r="210"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />

        {/* Inner Partial Elliptical Arc */}
        <path
          d="M 180,350 A 170,170 0 0,1 520,350"
          stroke="url(#orbitGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="180 80"
        />

        {/* Orbit Rotating Group 1 (Clockwise) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '350px', originY: '350px' }}
        >
          {/* Dot 1: Amber Focus Node */}
          <circle cx="610" cy="350" r="4.5" fill="#FFB86B" />
          <circle cx="610" cy="350" r="9" fill="#FFB86B" opacity="0.2" />

          {/* Dot 2: Teal Habit Node */}
          <circle cx="90" cy="350" r="3.5" fill="#27C7B8" />
          <circle cx="90" cy="350" r="7" fill="#27C7B8" opacity="0.2" />

          {/* Dot 3: Soft Purple Planner Node */}
          <circle cx="350" cy="90" r="3" fill="#9B8CFF" />
        </motion.g>

        {/* Orbit Rotating Group 2 (Counter-Clockwise Partial) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 58, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '350px', originY: '350px' }}
        >
          {/* Dot 4: Electric Violet Core Marker */}
          <circle cx="350" cy="560" r="4" fill="#6C63FF" />
          <circle cx="350" cy="560" r="8" fill="#6C63FF" opacity="0.25" />

          {/* Dot 5: Micro Energy Spec */}
          <circle cx="498" cy="202" r="2.5" fill="#27C7B8" />
        </motion.g>
      </svg>
    </div>
  );
};
