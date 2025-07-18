import styles from './location.module.scss';

const Location = () => {
  return (
    <section className={styles.locationContainer} id="location">
      <iframe title="location" src="https://www.google.com/maps?q=45.176676,17.957358&z=16&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Location;