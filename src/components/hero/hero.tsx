'use client';

import styles from './hero.module.scss';
import LinkButton from '../link-button/link-button';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.fadeBg}></div>
      <h1 className={styles.title}>GromZone</h1>
      <p className={styles.description}>Paintball is a team sport in which players eliminate opponents by hitting them with dye-filled, breakable capsules (paintballs) that are shot from a paintball marker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam vero ratione culpa obcaecati magnam dolor fugit distinctio at, quod libero vel eaque consectetur repellat totam minima ipsum doloribus sequi!</p>
      <LinkButton
        className={styles.button}
        href="#contact"
        text="Rezerviraj" />
    </section>
  );
};

export default Hero;