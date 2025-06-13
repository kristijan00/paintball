'use client';
import React, { useState } from 'react';
import styles from './faq.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const questions = [
  {
    question: 'Što je paintball?',
    answer: 'Paintball je timska igra u kojoj se igrači natječu koristeći markere koji ispaljuju kuglice s bojom. Cilj igre je eliminirati protivnički tim ili ostvariti određene ciljeve na terenu.',
  },
  {
    question: 'Koliko traje jedna igra?',
    answer: 'Jedna igra obično traje između 10 i 20 minuta, ovisno o scenariju igre i broju igrača.',
  },
  {
    question: 'Je li paintball siguran?',
    answer: 'Da, paintball je siguran sport kada se poštuju pravila i koristi odgovarajuća zaštitna oprema. Svi igrači moraju nositi zaštitne maske i druge zaštitne elemente.',
  },
  {
    question: 'Kako se pripremiti za paintball?',
    answer: 'Preporučujemo da nosite udobnu odjeću koja može biti prljava, te da dođete s prijateljima ili timom. Također, važno je slušati upute instruktora prije početka igre.',
  },
  {
    question: 'Mogu li igrati ako nikada prije nisam igrao paintball?',
    answer: 'Naravno! Paintball je namijenjen svima, bez obzira na prethodno iskustvo. Naši instruktori će vam pružiti sve potrebne upute i obuku prije igre.',
  },
  {
    question: 'Kako mogu rezervirati igru?',
    answer: 'Rezervacije možete napraviti putem naše web stranice ili nas kontaktirati izravno putem telefona ili e-maila.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.title}>Često postavljana pitanja</h2>
      <div className={styles.faqList}>
        {questions.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h3
              className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
              onClick={() => handleToggle(index)}
              style={{ cursor: 'pointer' }}
            >

              {item.question}
            </h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className={styles.answer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
            <ArrowDown
              className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}
              onClick={() => handleToggle(index)}
              size={30} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;