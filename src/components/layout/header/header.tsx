'use client';

import styles from './header.module.scss';
import Image from 'next/image';
import Logo from '../../../../public/icon-Photoroom.webp';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        <Link href="/">
          <Image src={Logo} className={styles.logo} alt="Paintball logo" />
        </Link>
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
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="/">Početna</Link></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={`${styles.link} ${pathname === '/cjenik' ? styles.active : ''}`} href="/cjenik">Cjenik</Link></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><Link className={`${styles.link} ${pathname === '/faq' ? styles.active : ''}`} href="/faq">Faq</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;