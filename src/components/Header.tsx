'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

import * as MyComponents from '.';
import * as Shad from './ui';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeaderProps extends ComponentProps {}

export const Header = ({ className }: HeaderProps) => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }) as any as EventListenerOrEventListenerObject;

    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header
      className={cn(
        `${
          header
            ? 'py-4 bg-white shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${
          pathname === '/' && 'bg-[#fef9f5]'
        } font-aaux`,
        className
      )}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='hidden lg:flex flex-col'>
            <MyComponents.Nav
              containerStyles='lg:flex gap-x-8 items-center'
              linkStyles='relative text-secondary hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[3px] bg-secondary w-full mt-[9px]'
            />
            <div className='mt-[10px] h-[3px]  w-[60vw] bg-gradient-to-r from-gray-400 to-transparent' />
          </div>
          <div className='flex items-center gap-x-6 ml-auto'>
            <MyComponents.ProfileButton />
            <MyComponents.Logo className='h-[32px] w-[228px]' />
            <div className='lg:hidden'>
              <MyComponents.MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
