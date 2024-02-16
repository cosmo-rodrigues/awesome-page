'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps extends ComponentProps {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' className={cn(`flex items-end gap-2 ${className}`)}>
      {/* <Image src='/pin_logo.png' height={40} width={40} alt='logo' priority /> */}
      <p className='font-extrabold text-2xl'>NATIIVIO&#8482;</p>
    </Link>
  );
};
