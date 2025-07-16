'use client';

import React from 'react';
import { useLenis } from '@/hooks/useLenis';
import { SectionTransition } from '@/components/ui/SectionTransition';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  useLenis();

  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
};
