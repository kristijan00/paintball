'use client';
import React, { useState } from 'react';
import styles from './faq.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { questions } from '../../../../data/faq-data';


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