import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  className?: string;
  id?: string;
}

export function Section({
  children,
  title,
  eyebrow,
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {(eyebrow || title) && (
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-4xl font-bold">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
