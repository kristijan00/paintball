'use client';
import styles from './prices-section.module.scss';
import { Package } from 'lucide-react';
import LinkButton from '@/components/ui/link-button/link-button';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const PricesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className={styles.pricesContainer} ref={ref}>
      <h2 className={styles.title}>Cjenik GromZone-a</h2>
      <p className={styles.description}>Naš cilj je pružiti nezaboravno paintball iskustvo po pristupačnoj cijeni. Bilo da dolazite s prijateljima, obitelji ili kao dio tima, imamo pakete koji odgovaraju svim potrebama. Pogledajte naše opcije i rezervirajte svoju avanturu već danas!</p>
      <div className={styles.pricesList}>
        <motion.div className={styles.priceItem}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          whileHover={{
            y: -6,
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}>
          <h3 className={styles.priceTitle}><Package className={styles.icon} />Standardni paket</h3>
          <p className={styles.priceDescription}>Uključuje osnovnu opremu i 100 kuglica</p>
          <span className={styles.priceAmount}>100 EUR</span>
          <LinkButton text={'Rezerviraj'} href="#contact" className={styles.ctaButton} />
        </motion.div>
        <motion.div className={styles.priceItem}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }}
          whileHover={{
            y: -6,
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}>
          <h3 className={styles.priceTitle}><Package className={styles.icon} />Premium paket</h3>
          <p className={styles.priceDescription}>Uključuje naprednu opremu i 200 kuglica</p>
          <span className={styles.priceAmount}>350 EUR</span>
          <LinkButton text={'Rezerviraj'} href="#contact" className={styles.ctaButton} />
        </motion.div>
        <motion.div className={styles.priceItem}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.4 }}
          whileHover={{
            y: -6,
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}>
          <h3 className={styles.priceTitle}><Package className={styles.icon} />VIP paket</h3>
          <p className={styles.priceDescription}>Uključuje sve iz Premium paketa plus dodatne kuglice i privatnog vodiča</p>
          <span className={styles.priceAmount}>500 EUR</span>
          <LinkButton text={'Rezerviraj'} href="#contact" className={styles.ctaButton} />
        </motion.div>
      </div>
    </section>
  );
};

export default PricesSection;