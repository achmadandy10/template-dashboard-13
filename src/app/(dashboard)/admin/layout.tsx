import Theme from './theme';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Theme>{children}</Theme>;
}
