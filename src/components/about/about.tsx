'use client';

import { useState } from 'react';
import styles from './about.module.scss';
import { LocateFixed, ShieldHalf, Users } from 'lucide-react';

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

  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.title}>Dobrodošli na stranicu GromZone paintball</h2>
      <div className={styles.aboutSubContainer}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideBox}>
            <div className={styles.logoContainer}>
              {sections[openIndex].icon}
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.aboutSelection}>
            <ul className={styles.accordionList}>
              {sections.map((section, idx) => (
                <li
                  key={section.title}
                  className={`${styles.accordionItem} ${openIndex === idx ? styles.expanded : ''}`}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;