'use client';
import styles from './gallery.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  '/slika-1.webp',
  '/slika-2.webp',
  '/slika-3.webp',
  '/slika-4.webp',
  '/slika-5.webp',
  '/slika-6.webp',
];

const Gallery = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 900px)': {
        slides: { perView: 2, spacing: 8 },
      },
      '(max-width: 600px)': {
        slides: { perView: 1, spacing: 6 },
      },
    },
  }, []);

  return (
    <section className={styles.galleryContainer}>
      <h2 className={styles.title}>Trenuci s bojišta</h2>
      <div ref={sliderRef} className="keen-slider">
        {images.map((imgsSrc, i) => (
          <div className="keen-slider__slide" key={i}>
            <Image
              src={imgsSrc}
              alt={`Gallery ${i}`}
              width={800}
              height={500}
              className={`${styles.image} rounded-xl object-cover`}
            />
          </div>
        ))}
      </div>
      <div className={styles.arrowButtonContainer}>
        <button
          onClick={() => instanceRef.current?.prev()}
          className={styles.arrowButton}
          aria-label="Previous slide"
        >
          <ArrowLeft size={30} />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className={styles.arrowButton}
          aria-label="Next slide"
        >
          <ArrowRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;