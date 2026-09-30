import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  highlightWords?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {kicker && (
        <span className="text-xs uppercase font-bold tracking-widest text-[#9B8CFF] mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E9ECF5] tracking-tight leading-tight [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#B7C0D4] font-normal leading-relaxed max-w-2xl [text-wrap:pretty]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
