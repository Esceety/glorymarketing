'use client';

import { useState } from 'react';
import { FormModal } from './FormModal';

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function BookingButton({ className, children }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={className}>
        {children}
      </button>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
