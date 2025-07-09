import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Oswald, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

const bebas = Bebas_Neue({
  variable: '--font-hero',
  subsets: ['latin'],
  weight: '400',
});

const oswald = Oswald({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const roboto = Roboto({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Export viewport separately
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'GromZone Paintball | Slavonski Brod',
  description: 'Najbolji paintball teren u Slavonskom Brodu. Rezervirajte svoju avanturu danas!',
  icons: {
    icon: '/icon-Photoroom.webp',
    shortcut: '/icon-Photoroom.webp',
    apple: '/icon-Photoroom.webp',
  },
  keywords: [
    'paintball Slavonski Brod',
    'paintball teren Slavonski Brod', 
    'najbolji paintball Slavonski Brod',
    'paintball centar Slavonski Brod',
    'GromZone paintball',
    'team building Slavonski Brod',
    'paintball rezervacija',
  ],
  openGraph: {
    title: 'GromZone Paintball',
    description: 'Iskusi adrenalinsku avanturu na našem taktičkom poligonu.',
    type: 'website',
    locale: 'hr_HR',
    siteName: 'GromZone',
    url: 'https://paintball-seven.vercel.app/',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${oswald.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;