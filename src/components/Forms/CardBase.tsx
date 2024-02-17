'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import { Card } from '../ui';
import Image from 'next/image';

interface CardBaseProps extends ComponentProps {
  children: ReactNode;
}

export function CardBase({ className, children }: CardBaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 700 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={cn(`rounded-lg bg-black bg-opacity-50 ${className}`)}
    >
      <div className="flex h-[80vh] w-[70vw] gap-x-2 p-0 sm:p-10">
        <Card className="hidden h-full w-[70vw] border-none bg-transparent lg:flex">
          <Image
            alt="Build"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            src="/login_build.svg"
          />
        </Card>
        <Card className="h-full w-full border-none bg-transparent p-3">
          {children}
        </Card>
      </div>
    </motion.div>
  );
}
