import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import PricesSection from '@/components/prices-section/prices-section';
import Contact from '@/components/contact/contact';

const Prices = () => {

  return (
    <main className={styles.pricesContainer}>
      <Hero title={'Cjenik naših usluga'} backgroundImage={'/hero-1.jpg'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} buttonText={''} />
      <PricesSection />
      <Contact />
    </main>
  );
};

export default Prices;