import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GromZone Paintball | Početna',
  description: `GromZone je novi paintball teren u Slavonskom Brodu – idealan za timsku zabavu, proslave i adrenalinsku avanturu u prirodi. Rezerviraj svoj termin već danas!`,
  openGraph: {
    title: 'GromZone Paintball | Početna',
    description: `GromZone je novi paintball teren u Slavonskom Brodu – idealan za timsku zabavu, proslave i adrenalinsku avanturu u prirodi. Rezerviraj svoj termin već danas!`,
    images: ['/hero4.webp'],
    siteName: 'GromZone Paintball',
    locale: 'hr_HR',
    url: 'https://gromzone.com/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: ['paintball Slavonski Brod',
    'paintball teren',
    'GromZone paintball',
    'paintball Hrvatska',
    'team building Slavonski Brod',
    'adrenalinske igre'],
};

import styles from './page.module.scss';
import Hero from '@/components/sections/hero/hero';
import About from '@/components/sections/about/about';
import CTA from '@/components/sections/cta/cta';
import Gallery from '@/components/sections/gallery/gallery';
import Contact from '@/components/sections/contact/contact';
import Location from '@/components/sections/location/location';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero title={'GromZone'} description={`Uronite u svijet akcije, timskog duha i adrenalinskih izazova!
GromZone nudi jedinstveno paintball iskustvo u prirodnom okruženju, idealno za prijatelje, obitelj ili timske izlete.
      Naša moderna oprema i pažljivo osmišljene borbene zone garantiraju nezaboravne trenutke.
Rezervirajte svoj termin već danas!`}
      backgroundImage={'/hero4.webp'} buttonText={'Rezerviraj'} />
      <About />
      <CTA />
      <Gallery />
      <Contact />
      <Location />
    </main>
  );
};

export default Home;