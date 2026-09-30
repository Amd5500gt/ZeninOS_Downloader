/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { AIPlanner } from './sections/AIPlanner';
import { Habits } from './sections/Habits';
import { ProductivityScore } from './sections/ProductivityScore';
import { WhyZenin } from './sections/WhyZenin';
import { Download } from './sections/Download';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#172033] text-[#E9ECF5] selection:bg-[#6C63FF]/30 selection:text-[#E9ECF5]">
      {/* 2D Ambient Animated Background Orbs and Subtle Grid */}
      <AnimatedBackground />

      {/* Sticky Translucent Navbar with Mobile Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <AIPlanner />
        <Habits />
        <ProductivityScore />
        <WhyZenin />
        <Download />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
