import type {Metadata} from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QueryProvider } from '@/providers/QueryProvider';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen" suppressHydrationWarning>
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