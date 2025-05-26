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
      <Hero />
      <About />
      <CTA />
      <Gallery />
      <Contact />
      <Location />
    </main>
  );
};

export default Home;