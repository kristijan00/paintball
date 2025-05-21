import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
};

export default Home;