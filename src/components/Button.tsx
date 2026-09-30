import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'py-2 px-3.5 text-xs',
    md: 'py-2.5 px-5 text-sm',
    lg: 'py-3.5 px-7 text-base font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#6C63FF] to-[#9B8CFF] text-[#E9ECF5] shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/40 hover:from-[#766EFF] hover:to-[#A79AFF] border border-white/15',
    secondary:
      'bg-[#263451] hover:bg-[#2D3B59] text-[#E9ECF5] border border-white/10 hover:border-white/20',
    outline:
      'bg-transparent hover:bg-white/5 text-[#E9ECF5] border border-white/20 hover:border-white/40',
    glass:
      'bg-white/5 hover:bg-white/10 text-[#E9ECF5] border border-white/10 hover:border-white/20 backdrop-blur-md',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 active:scale-[0.98] select-none whitespace-nowrap cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
