'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps extends ComponentProps {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' className={cn(`flex items-end gap-2 ${className}`)}>
      <Image
        src='/natiivio_logo.svg'
        height={32}
        width={228}
        alt='logo'
        priority
      />
    </Link>
  );
};
