import styles from './IntroForm.module.css';

export default function IntroForm() {
  return (
    <section className={`section-padding ${styles.section}`} id="about">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>At Elis Family Law, Your Decisions Shape Your <span className="text-bronze text-italic-serif">Future</span></h2>
          <p className={styles.description}>
            We understand that family law matters are deeply personal and can be overwhelming. Our board-certified specialists provide caring, strategic representation to help you navigate through these complex times, ensuring your future is secure.
          </p>
        </div>
        
        <div className={styles.formWrapper}>
          <h3 className={styles.formHeading}>Request A Consultation</h3>
          <form>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Full Name" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email Address" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone Number" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="How can we help you?" className={styles.input} required />
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}
