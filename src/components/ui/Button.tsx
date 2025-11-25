import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  asChild = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center';

  const variantClasses = {
    primary:
      'bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-blue-700 text-blue-700 hover:bg-blue-50 bg-transparent',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (asChild && href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
