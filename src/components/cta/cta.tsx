'use client';

import styles from './cta.module.scss';
import LinkButton from '../link-button/link-button';

const CTA = () => {
  return (
    <section className={styles.ctaContainer}>
      <p className={styles.ctaHeader}>Spreman za adrenalinsku avanturu?</p>
      <p className={styles.ctaSubheader}>Zakaži svoj termin već sada.</p>
      <LinkButton
        className={styles.button}
        href="#contact"
        text="Rezerviraj" />
    </section>
  );
};

export default CTA;