'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import React from 'react';

interface HeroProps extends ComponentProps {}

export const Hero = ({ children, className }: HeroProps) => {
  return (
    <main
      className={cn(
        `py-12 lg:py-24 h-[84vh] lg:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover ${className}`
      )}
    >
      <div className='container mx-auto'>
        <>{children}</>
      </div>
    </main>
  );
};
