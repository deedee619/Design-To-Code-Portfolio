import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Fallback inline style for background if no image exists yet */}
      <div 
        className={styles.bgImage} 
        style={{ backgroundColor: 'var(--color-navy)', backgroundImage: 'url(https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop)' }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="text-white text-italic-serif" style={{fontWeight: '400'}}>Your Future</span> <span style={{color: '#C4A77D', fontFamily: 'var(--font-serif)', fontWeight: '400'}}>Starts Here</span>
        </h1>
        <p className={styles.description}>
          Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,<br/> and Throughout North Carolina.
        </p>
        <div className={styles.subtitle}>
          ★ LED BY BOARD CERTIFIED SPECIALISTS IN FAMILY LAW ★
        </div>
        <div className={styles.actions}>
          <button className={`btn-primary ${styles.heroBtnPrimary}`}>
            CALL NOW <span style={{marginLeft: '8px'}}>&rarr;</span>
          </button>
          <button className={`btn-secondary ${styles.heroBtnSecondary}`}>
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
