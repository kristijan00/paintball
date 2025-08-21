import styles from './footer.module.scss';
import { LocateFixed, Phone, Mail } from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok, SiGoogle } from 'react-icons/si';

const Footer = () => {

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerUpper}>
        <div className={styles.footerInfo}>
          <LocateFixed size={24} className={styles.logo} />
          <div className={styles.content}>
            <h4>Adresa</h4>
            <p>GromZone, Ul. dr. Franje Tuđmana 5, 35000, Gromačnik
              <br />
              Vinogorska Ulica, 35000, Slavonski Brod</p>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <Phone size={24} className={styles.logo} />
          <div className={styles.content}>
            <h4>Telefon</h4>
            <a href={'tel:0919492832'}>Jakov - 091-949-2832</a>
            <br />
            <a href={'tel:0953583661'}>Ana - 095-358-3661</a>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <Mail size={24} className={styles.logo} />
          <div className={styles.content}>
            <h4>Email</h4>
            <a href={'mailto:gromzone.paintball@gmail.com'}>gromzone.paintball@gmail.com</a>
          </div>
        </div>

        <div className={styles.socials}>
          <a href="https://www.instagram.com/gromzone.paintball/" aria-label="Instagram link" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <SiInstagram color="#E4405F" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook link" className={styles.icon}>
            <SiFacebook color="#1877F2" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="TikTok link" className={styles.icon}>
            <SiTiktok color="#000000" />
          </a>
          <a href="https://google.com/search?q=GromZone+paintball" target="_blank" rel="noopener noreferrer" aria-label="Google link" className={styles.icon}>
            <SiGoogle color="#4285F4" />
          </a>
        </div>
      </div>
      <div className={styles.footerLower}>
        <p>&copy; {new Date().getFullYear()} GromZone. Sva prava pridržana.</p>
        <p>Web dizajn i razvoj: <a href="https://www.linkedin.com/in/kristijan-dakovic-5a5b41193/" target="_blank" rel="noopener noreferrer">Kristijan Đaković</a></p>
      </div>
    </footer>
  );
};

export default Footer;
