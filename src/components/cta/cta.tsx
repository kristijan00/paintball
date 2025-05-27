'use client';

import styles from './cta.module.scss';
import LinkButton from '../link-button/link-button';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className={styles.ctaContainer} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeIn' }}>
        <p className={styles.ctaHeader}>Spreman za adrenalinsku avanturu?</p>
        <p className={styles.ctaSubheader}>Zakaži svoj termin već sada.</p>
        <LinkButton
          className={styles.button}
          href="#contact"
          text="Rezerviraj" />
      </motion.div>
    </section>
  );
};

export default CTA;