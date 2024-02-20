'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import React from 'react';

interface HeroProps extends ComponentProps {}

export const Hero = ({ children, className }: HeroProps) => {
  return (
    <main className={cn(`bg-hero bg-cover bg-no-repeat ${className}`)}>
      {children}
    </main>
  );
};
