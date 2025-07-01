'use client';
import styles from './contact.module.scss';
import FormButton from '../../ui/form-button/form-button';
import TextField from '@mui/material/TextField';
import { User, Mail, MessageCircle } from 'lucide-react';
import Box from '@mui/material/Box';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '@/components/ui/loader/loader';
import Popup from '@/components/ui/popup/popup';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [mathQuestion, setMathQuestion] = useState({ a: 0, b: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Generate new question
  useEffect(() => {
    setMathQuestion({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  }, []);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);

    const correctAnswer = mathQuestion.a + mathQuestion.b;
    const answerAsNumber = Number(userAnswer);

    if (isNaN(answerAsNumber) || answerAsNumber !== correctAnswer) {
      setPopupTitle('Pogrešan odgovor');
      setPopupMessage('Riješite matematičko pitanje ispravno.');
      handleOpenPopup();
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm('service_kristijan', 'template_gnz2z0u', form.current, 'XPey2nE5qecJwEz1R')
      .then(() => {
        form.current?.reset();
        setIsLoading(false);
        setPopupTitle('Poruka poslana');
        setPopupMessage('Vaša poruka je uspješno poslana.');
        handleOpenPopup();
      })
      .catch(() => {
        setIsLoading(false);
        setPopupTitle('Greška');
        setPopupMessage('Došlo je do greške prilikom slanja poruke.');
        handleOpenPopup();
      }).finally(() => {
        setIsLoading(false);
        setUserAnswer('');
      });
  };

  return (
    <section className={styles.contactContainer} id="contact" ref={ref}>
      <h2 className={styles.title}>Kontaktirajte nas</h2>
      <motion.form ref={form} onSubmit={sendEmail} className={styles.contactForm} method="POST"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeIn' }}>
        <Box className={styles.inputGroup} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <User size={22} className={styles.icon} />
          <TextField id="input-with-sx" required label="Ima i prezime" name="fullName" fullWidth sx={{
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-cta)' },
            '@media (hover: hover) and (pointer: fine)': {
              '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-accent-highlight)' },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'var(--color-accent-highlight)',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: 'white' }, // <-- override focused label color

            '& .MuiInput-underline:active:after': {
              borderBottomColor: 'var(--color-cta)',
            },
            // For when the input is focused (active)
            '& .MuiInput-underline.Mui-focused:after': {
              borderBottomColor: 'var(--color-cta)',
            },
          }} variant="standard" />
        </Box>
        <Box className={styles.inputGroup} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Mail size={22} className={styles.icon} />
          <TextField id="input-with-sx" required label="E-mail" name="email" fullWidth variant="standard" sx={{
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
            '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // always white
            '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-cta)' }, // active/focus
            // Only on devices that support hover, change hover color
            '@media (hover: hover) and (pointer: fine)': {
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'var(--color-accent-highlight)',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'var(--color-accent-highlight)',
              },
            },
            // Ensure on mobile, after (focus/active) is still your CTA color
            '& .MuiInput-underline.Mui-focused:after': {
              borderBottomColor: 'var(--color-cta)',
            },
            '& .MuiInput-underline:active:after': {
              borderBottomColor: 'var(--color-cta)',
            },
          }} />
        </Box>
        <Box className={styles.inputGroup} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <MessageCircle size={22} className={styles.icon} />
          <TextField
            id="standard-multiline-static"
            label="Poruka"
            required
            multiline
            rows={4}
            fullWidth
            variant="standard"
            name="message"
            sx={{
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
              '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // always white
              '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-cta)' }, // active/focus
              // Only on devices that support hover, change hover color
              '@media (hover: hover) and (pointer: fine)': {
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'var(--color-accent-highlight)',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'var(--color-accent-highlight)',
                },
              },
              // Ensure on mobile, after (focus/active) is still your CTA color
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottomColor: 'var(--color-cta)',
              },
              '& .MuiInput-underline:active:after': {
                borderBottomColor: 'var(--color-cta)',
              },
            }}
          /></Box>
        <Box className={styles.inputGroup} sx={{
          display: 'flex', alignItems: 'flex-end', maxWidth: 100, // or any width you prefer
        }}>
          <TextField
            id="standard-with-sx"
            label={`${mathQuestion.a} + ${mathQuestion.b} = ?`}
            variant="standard"
            type="number"
            required
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            sx={{
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiInput-underline:before': { borderBottomColor: 'white' },
              '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-cta)' },
              '@media (hover: hover) and (pointer: fine)': {
                '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-accent-highlight)' },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'var(--color-accent-highlight)',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': { color: 'white' }, // <-- override focused label color
              '& .MuiInput-underline:active:after': {
                borderBottomColor: 'var(--color-cta)',
              },
              // For when the input is focused (active)
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottomColor: 'var(--color-cta)',
              },
            }}
          /></Box>
        <FormButton className={styles.button} text={'Pošalji'} type={'submit'} />
      </motion.form>
      {showPopup && (
        <Popup
          title={popupTitle}
          message={popupMessage}
          buttonName="Zatvori"
          onClose={handleClosePopup}
        />
      )}
      {isLoading && (
        <Loader />
      )}
    </section>
  );
};

export default Contact;