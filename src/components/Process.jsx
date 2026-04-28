import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Consult' },
  { num: '02', title: 'Match' },
  { num: '03', title: 'Advocate' }
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={`${styles.heading} text-italic-serif`}>Close Attention To What You Need</h2>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <div className={styles.step}>
                <div className={styles.circle}>
                  <span className="text-italic-serif">{step.num}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              
              {index < steps.length - 1 && (
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="0" y1="12" x2="22" y2="12"></line>
                    <polyline points="15 5 22 12 15 19"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.textContent}>
          <p>
            When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior level attorney to tell your story. From there, you will work with one lawyer for the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.
          </p>
          <p>
            We take care to match you with the attorney at our firm who can be of the most help in your unique situation. We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you can face the future from a position of strength and hope.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={`btn-primary ${styles.learnMoreBtn}`}>
            LEARN MORE ABOUT US <span style={{marginLeft: '8px'}}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
