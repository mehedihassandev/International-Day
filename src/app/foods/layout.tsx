import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traditional Kitchen',
  description: 'Discover authentic Bengali recipes including Kacchi Biryani, classic Pitha, and Bhorta in an immersive gourmet directory.',
  openGraph: {
    title: 'Traditional Bengali Kitchen | Bangladesh Cultural Showcase',
    description: 'Discover authentic Bengali recipes including Kacchi Biryani, classic Pitha, and Bhorta in an immersive gourmet directory from Bangladesh.',
    type: 'website',
  },
};

export default function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
