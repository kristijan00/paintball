import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cjenik | GromZone Paintball',
  description: 'Pogledajte naš cjenik i odaberite idealan paintball paket za vas. GromZone - Paintball teren u Slavonskom Brodu.',
  openGraph: {
    title: 'Cjenik | GromZone Paintball',
    description: 'Pogledajte naš cjenik i odaberite idealan paintball paket za vas. GromZone - Paintball teren u Slavonskom Brodu.',
    url: 'https://gromzone.com/cjenik',
    images: ['/hero-1.webp'],
    siteName: 'GromZone Paintball',
    type: 'website',
    locale: 'hr_HR',
  },
  keywords: [
    'paintball cijene',
    'paintball cjenik',
    'GromZone paintball cijene',
    'paintball paketi Slavonski Brod',
    'paintball Slavonski Brod cijena',
    'team building cijena Slavonski Brod',
    'paintball oprema i cijena',
    'paintball ponude Hrvatska',
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