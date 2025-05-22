'use client';
import styles from './gallery.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  '/character-1.jpg',
  '/character-2.png',
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
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
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, i) => (
          <div className="keen-slider__slide" key={i}>
            <Image
              src={src}
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