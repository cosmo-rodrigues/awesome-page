'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

interface NavProps extends ComponentProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { path: '/app', name: 'Inicio' },
  { path: '/app/links', name: 'Links' },
  { path: '/app/configs', name: 'Configurações' },
];

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) => {
  const path = usePathname();
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles} ${
            link.path === path && 'font-bold'
          }`}
        >
          {link.path === path && (
            <motion.span
              animate={{ y: 0 }}
              className={underlineStyles}
              initial={{ y: '-100%' }}
              layoutId='underline'
              transition={{ type: 'tween' }}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
