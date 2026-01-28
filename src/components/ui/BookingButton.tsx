'use client';

import { useState } from 'react';
import { FormModal } from './FormModal';

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
  formId?: string; // Optional form ID for different forms
}

export function BookingButton({ className, children, formId }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={className}>
        {children}
      </button>
      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formId={formId}
      />
    </>
  );
}
