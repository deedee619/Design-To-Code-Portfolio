import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
            <a href="#" className={styles.iconCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#" className={styles.iconCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
              </svg>
            </a>
          </div>
          <div className={styles.topBarContact}>
            CALL 919-626-9148
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link href="/">Elis Family Law</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="#about" className={styles.navLink}>ABOUT</Link>
            <Link href="#family-law" className={styles.navLink}>FAMILY LAW</Link>
            <Link href="#estate-planning" className={styles.navLink}>ESTATE PLANNING</Link>
            <Link href="#testimonials" className={styles.navLink}>TESTIMONIALS</Link>
            <Link href="#resources" className={styles.navLink}>RESOURCES</Link>
            <Link href="#contact" className={styles.navLink}>CONTACT</Link>
            <button className={`btn-secondary ${styles.ctaOutline}`}>SCHEDULE A CONSULTATION</button>
          </nav>
        </div>
      </header>
    </>
  );
}
