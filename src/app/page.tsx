import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import CTA from '@/components/cta/cta';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <CTA />
    </main>
  );
};

export default Home;