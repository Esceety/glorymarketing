import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-amber-100 text-amber-800 ${className}`}
    >
      {children}
    </span>
  );
}
