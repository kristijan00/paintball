'use client';

import styles from './hero.module.scss';
import LinkButton from '../link-button/link-button';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
}

const Hero = (props: HeroProps) => {
  return (
    <section className={styles.container} style={props.backgroundImage ? { background: `url(${props.backgroundImage}) center center` } : undefined}>
      <div className={styles.fadeBg}></div>
      <h1 className={styles.title}>{props.title}</h1>
      {
        props.description &&
        <p className={styles.description}>{props.description}</p>
      }
      {
        props.buttonText &&
        <LinkButton
          className={styles.button}
          href="#contact"
          text={props.buttonText || ''} />
      }
    </section>
  );
};

export default Hero;