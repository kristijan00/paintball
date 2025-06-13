import styles from './page.module.scss';
import Hero from '@/components/hero/hero';
import Faq from '@/components/faq-section/faq';
import Contact from '@/components/contact/contact';

const FAQ = () => {

  return (
    <section className={styles.faqContainer}>
      <Hero
        title={'Često postavljana pitanja'}
        backgroundImage={'/hero-2.jpg'}
        description={'Ovdje možete pronaći odgovore na najčešće postavljana pitanja vezana uz naše paintball usluge. Ako imate dodatnih pitanja, slobodno nas kontaktirajte!'}
        buttonText={''} />
      <Faq />
      <Contact />
    </section>
  );
};

export default FAQ;