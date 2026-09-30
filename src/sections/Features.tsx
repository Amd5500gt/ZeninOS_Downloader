import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCard, FeatureType } from '../components/FeatureCard';

interface FeatureDef {
  id: FeatureType;
  title: string;
  description: string;
  iconName: 'CheckSquare' | 'Flame' | 'Timer' | 'Sparkles' | 'TrendingUp' | 'History';
}

const featuresList: FeatureDef[] = [
  {
    id: 'tasks',
    title: 'TASKS',
    description: 'Turn your goals into clear actions.',
    iconName: 'CheckSquare',
  },
  {
    id: 'habits',
    title: 'HABITS',
    description: 'Build consistency one day at a time.',
    iconName: 'Flame',
  },
  {
    id: 'focus',
    title: 'FOCUS',
    description: 'Protect your attention and work deeply.',
    iconName: 'Timer',
  },
  {
    id: 'ai',
    title: 'AI DAY PLANNER',
    description: 'Turn your tasks, habits and available time into a structured day.',
    iconName: 'Sparkles',
  },
  {
    id: 'productivity',
    title: 'PRODUCTIVITY SCORE',
    description: 'See how consistently you are showing up.',
    iconName: 'TrendingUp',
  },
  {
    id: 'history',
    title: 'HISTORY',
    description: 'Understand your progress over time.',
    iconName: 'History',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="COMPLETE ECOSYSTEM"
          title="Everything you need to stay consistent."
          subtitle="One system for the things that matter every day."
        />

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map(feat => (
            <FeatureCard
              key={feat.id}
              id={feat.id}
              title={feat.title}
              description={feat.description}
              iconName={feat.iconName}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
