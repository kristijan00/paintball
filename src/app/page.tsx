import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GromZone Paintball | Početna',
  description: 'Paintball is a team sport in which players eliminate opponents by hitting them with dye-filled, breakable capsules (paintballs) that are shot from a paintball marker. Pridružite nam se za nezaboravnu avanturu u GromZone!',
  openGraph: {
    title: 'GromZone Paintball | Početna',
    description: 'Paintball is a team sport in which players eliminate opponents by hitting them with dye-filled, breakable capsules (paintballs) that are shot from a paintball marker. Pridružite nam se za nezaboravnu avanturu u GromZone!',
    images: ['/hero4.webp'],
    siteName: 'GromZone Paintball',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: ['paintball', 'Slavonski Brod', 'GromZone', 'avantura', 'sport', 'team building', 'igra', 'početna'],
};

import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import CTA from '@/components/cta/cta';
import Gallery from '@/components/gallery/gallery';
import Contact from '@/components/contact/contact';
import Location from '@/components/location/location';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero title={'GromZone'} description={'Paintball is a team sport in which players eliminate opponents by hitting them with dye-filled, breakable capsules (paintballs) that are shot from a paintball marker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam vero ratione culpa obcaecati magnam dolor fugit distinctio at, quod libero vel eaque consectetur repellat totam minima ipsum doloribus sequi!'}
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