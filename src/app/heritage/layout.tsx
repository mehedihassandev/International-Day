import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heritage Gallery',
  description: 'Explore the historical achievements, breathtaking nature, and Geographical Indication (GI) products that define the culture of Bangladesh.',
  openGraph: {
    title: 'Heritage Gallery | Bangladesh Cultural Showcase',
    description: 'Explore the historical achievements, breathtaking nature, and Geographical Indication (GI) products that define the culture of Bangladesh.',
    type: 'website',
  },
};

export default function HeritageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
