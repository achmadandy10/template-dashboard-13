import { Box } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Admin',
  description: 'Dashboard Admin',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
