'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { ComponentProps } from '@/types/component-props';

interface TransitionProps extends ComponentProps {
  children: ReactNode;
}

export default function Template({ children }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 700 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
