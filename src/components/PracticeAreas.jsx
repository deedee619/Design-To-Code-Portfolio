import styles from './PracticeAreas.module.css';

const practices = [
  { 
    title: 'Divorce', 
    desc: 'Navigating you through complex divorce proceedings with care.',
    icon: (
      <>
        <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </>
    ) // Scissors
  },
  { 
    title: 'High-Asset Divorce', 
    desc: 'Protecting your wealth and future in complex financial divorces.',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </>
    ) // Briefcase
  },
  { 
    title: 'Child Custody', 
    desc: 'Prioritizing the well-being and future of your children.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </>
    ) // Users
  },
  { 
    title: 'Child Support', 
    desc: 'Ensuring fair support arrangements for your children.',
    icon: (
      <>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </>
    ) // Heart
  },
  { 
    title: 'Property Division', 
    desc: 'Equitable distribution of marital assets and properties.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </>
    ) // Home
  },
  { 
    title: 'Spousal Support', 
    desc: 'Advocating for fair alimony and spousal support terms.',
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </>
    ) // Dollar Sign
  }
];

export default function PracticeAreas() {
  return (
    <section className={`section-padding ${styles.section}`} id="practice-areas">
      <div className="container">
        <h2 className={styles.heading}>Legal Guidance For Every Step Forward</h2>
        <div className={styles.grid}>
          {practices.map((practice, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconPlaceholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {practice.icon}
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{practice.title}</h3>
              <p className={styles.cardText}>{practice.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
