import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logo}>Elis Family Law</Link>
            <p className={styles.description}>
              Dedicated to protecting your family's future with compassionate, strategic legal guidance.
            </p>
          </div>
          <div>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#practice-areas">Practice Areas</Link></li>
              <li><Link href="#team">Our Team</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.columnTitle}>Practice Areas</h4>
            <ul className={styles.linkList}>
              <li><Link href="#">Divorce</Link></li>
              <li><Link href="#">Child Custody</Link></li>
              <li><Link href="#">Property Division</Link></li>
              <li><Link href="#">Spousal Support</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Elis Family Law. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
