'use client';

import { useState, useRef } from 'react';
import styles from './about.module.scss';
import { LocateFixed, ShieldHalf, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const sections = [
  {
    title: 'O NAMA',
    content: 'Paintball je uzbudljiva i dinamična timska igra. Naš tim je strastven prema ovom sportu i posvećen pružanju najboljeg mogućeg iskustva igračima svih nivoa veština.',
    icon: <Users size={100} color="var(--color-neutral)" className={styles.logo} />,

  },
  {
    title: 'LOKACIJA',
    content: 'Naša paintball arena nalazi se u prelepom prirodnom okruženju, idealnom za igru. Uživajte u uzbudljivim scenarijima i izazovima koje naš teren pruža.',
    icon: <LocateFixed size={100} color="var(--color-neutral)" className={styles.logo} />,

  },
  {
    title: 'VELIČINA TEAM-A',
    content: 'Naša ekipa može primiti do 20 igrača po timu, što omogućava dinamične i uzbudljive mečeve. Bez obzira na to da li ste početnik ili iskusan igrač, imamo nešto za svakoga.',
    icon: <ShieldHalf size={100} color="var(--color-neutral)" className={styles.logo} />,
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className={styles.aboutContainer} ref={ref}>
      <h2 className={styles.title}>Dobrodošli na stranicu GromZone paintball</h2>
      <div className={styles.aboutSubContainer}>
        <div className={styles.leftSide}>
          <motion.div className={styles.leftSideBox}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeIn' }}>
            <div className={styles.logoContainer}>
              {sections[openIndex].icon}
            </div>
          </motion.div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.aboutSelection}>
            <ul className={styles.accordionList}>
              {sections.map((section, idx) => (
                <motion.li
                  key={section.title}
                  className={`${styles.accordionItem} ${openIndex === idx ? styles.expanded : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: idx * 0.2 }}
                >
                  <button
                    className={styles.accordionTitle}
                    onClick={() => setOpenIndex(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    {section.title}
                  </button>
                  {openIndex === idx && (
                    <div className={styles.accordionContent}>
                      <p>{section.content}</p>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;