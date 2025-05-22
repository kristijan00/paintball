import styles from './cta.module.scss';

const CTA = () => {
  return (
    <section className={styles.ctaContainer}>
      <p className={styles.ctaHeader}>Spreman za adrenalinsku avanturu?</p>
      <p className={styles.ctaSubheader}>Zakaži svoj termin već sada.</p>
      <button className={styles.button}>Rezerviraj</button>
    </section>
  );
};

export default CTA;