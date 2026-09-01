import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QueryProvider } from '@/providers/QueryProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://international-day-three.vercel.app'),
  title: {
    default: 'Bangladesh Cultural Showcase | International Mother Language Day & Heritage',
    template: '%s | Bangladesh Cultural Showcase',
  },
  description: 'An immersive digital interactive experience celebrating the rich history, breathtaking nature, and exquisite culinary heritage of Bangladesh.',
  keywords: ['Bangladesh', 'Culture', 'Heritage', 'Recipes', 'International Mother Language Day', 'Bengali', 'History', 'Interactive', 'GI Products'],
  authors: [{ name: 'Mehedi Hassan' }],
  creator: 'Mehedi Hassan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://international-day-three.vercel.app',
    title: 'Bangladesh Cultural Showcase',
    description: 'Explore the heart of Bangladesh through interactive culture guides, historical milestones, and traditional recipes.',
    siteName: 'Bangladesh Cultural Showcase',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh Cultural Showcase',
    description: 'An immersive digital interactive experience celebrating the rich history, nature, and culinary heritage of Bangladesh.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-body antialiased bg-background text-foreground flex flex-col min-h-screen`} suppressHydrationWarning>
        <QueryProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}