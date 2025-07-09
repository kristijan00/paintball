import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cjenik | GromZone Paintball',
  description: 'Pogledajte naš cjenik paintball paketa i usluga. Pronađite najbolju opciju za svoj tim i rezervirajte svoju igru već danas!',
  openGraph: {
    title: 'Cjenik | GromZone Paintball',
    description: 'Pogledajte naš cjenik paintball paketa i usluga.',
    images: ['/hero-1.webp'],
    siteName: 'GromZone Paintball',
    type: 'website',
    locale: 'hr_HR',
  },
  keywords: [
    'paintball',
    'cjenik',
    'GromZone',
    'paketi',
    'rezervacija',
    'team building',
    'Slavonski Brod',
    'cijene',
    'usluge',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

import styles from './page.module.scss';
import Hero from '@/components/sections/hero/hero';
import PricesSection from '@/components/sections/prices/prices-section';
import Contact from '@/components/sections/contact/contact';

const Prices = () => {

  return (
    <main className={styles.pricesContainer}>
      <Hero title={'Cjenik naših usluga'} backgroundImage={'/hero-1.webp'} description={'Istražite naše povoljne pakete i pronađite opciju koja najbolje odgovara vašim željama i potrebama. GromZone nudi nezaboravnu paintball avanturu po pristupačnim cijenama!'} buttonText={''} />
      <PricesSection />
      <Contact />
    </main>
  );
};

export default Prices;