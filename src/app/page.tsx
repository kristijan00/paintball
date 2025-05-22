import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import CTA from '@/components/cta/cta';
import Gallery from '@/components/gallery/gallery';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <CTA />
      <Gallery />
    </main>
  );
};

export default Home;