import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Često postavljana pitanja | GromZone Paintball',
  description: 'Ovdje možete pronaći odgovore na najčešće postavljana pitanja vezana uz naše paintball usluge. Ako imate dodatnih pitanja, slobodno nas kontaktirajte!',
  openGraph: {
    title: 'Često postavljana pitanja | GromZone Paintball',
    description: 'Ovdje možete pronaći odgovore na najčešće postavljana pitanja vezana uz naše paintball usluge.',
    images: ['/hero-2.webp'],
    siteName: 'GromZone Paintball',
  },
  keywords: [
    'paintball',
    'GromZone',
    'najčešća pitanja',
    'FAQ',
    'pravila',
    'sigurnost',
    'rezervacija',
    'oprema',
    'team building',
    'Slavonski Brod',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

import styles from './page.module.scss';
import Hero from '@/components/sections/hero/hero';
import Faq from '@/components/sections/faq/faq';
import Contact from '@/components/sections/contact/contact';
import Head from 'next/head';
import { questions } from '../../../data/faq-data';

const FAQ = () => {

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': questions.map(q => ({
                '@type': 'Question',
                'name': q.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': q.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <main className={styles.faqContainer}>
        <Hero
          title={'Često postavljana pitanja'}
          backgroundImage={'/hero-2.webp'}
          description={'Ovdje možete pronaći odgovore na najčešće postavljana pitanja vezana uz naše paintball usluge. Ako imate dodatnih pitanja, slobodno nas kontaktirajte!'}
          buttonText={''} />
        <Faq />
        <Contact />
      </main>
    </>
  );
};

export default FAQ;