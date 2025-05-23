'use client';

import styles from './header.module.scss';
import Image from 'next/image';
import Logo from '../../../public/icon-Photoroom.png';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavItemClick = () => {
    if (window.innerWidth <= 768) { // Close menu only on mobile
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Image src={Logo} className={styles.logo} alt="Paintball logo" />
      </div>
      <div className={styles.headerRight}>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={styles.link} href="/">Home</Link></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={styles.link} href="/cjenik">Cjenik</Link></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={styles.link} href="/faq">Faq</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;