import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'GromZone',
  description: 'Paintball in the Grom Zone',
  icons: {
    icon: '/icon-Photoroom.webp',
    shortcut: '/icon-Photoroom.webp',
    apple: '/icon-Photoroom.webp',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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