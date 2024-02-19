import type { Metadata } from 'next';

import '../globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Awesome Page',
  description: 'This is an awesome page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
