import styles from './Specialist.module.css';

export default function Specialist() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.sealWrapper}>
          <svg className={styles.sealSvg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d5b081" />
                <stop offset="50%" stopColor="#f3e1c6" />
                <stop offset="100%" stopColor="#b48c59" />
              </linearGradient>
              <linearGradient id="bronzeDark" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9a7142" />
                <stop offset="50%" stopColor="#e5c599" />
                <stop offset="100%" stopColor="#875e2f" />
              </linearGradient>
              <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7e8ce" />
                <stop offset="100%" stopColor="#a37944" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="6" stdDeviation="4" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            {/* Scalloped edge effect using round linecaps with dasharray */}
            <circle cx="150" cy="150" r="130" fill="none" stroke="url(#bronzeGrad)" strokeWidth="24" strokeDasharray="0 27" strokeLinecap="round" filter="url(#shadow)" />
            <circle cx="150" cy="150" r="130" fill="url(#bronzeGrad)" />
            
            {/* Outer Rim */}
            <circle cx="150" cy="150" r="118" fill="none" stroke="url(#bronzeDark)" strokeWidth="4" />

            {/* Text Ring Background */}
            <circle cx="150" cy="150" r="114" fill="#fdfaf6" />
            
            {/* Inner Rings */}
            <circle cx="150" cy="150" r="75" fill="url(#bronzeDark)" stroke="url(#bronzeGrad)" strokeWidth="4" filter="url(#shadow)" />
            <circle cx="150" cy="150" r="68" fill="url(#bronzeGrad)" />
            <circle cx="150" cy="150" r="64" fill="#fcf6ec" />

            {/* Text Path for "BOARD CERTIFIED" */}
            <path id="textCurveTop" d="M 60,180 A 95,95 0 1,1 240,180" fill="none" />
            
            {/* Curved Text */}
            <text fill="#4a3018" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="4">
              <textPath href="#textCurveTop" startOffset="50%" textAnchor="middle">BOARD CERTIFIED</textPath>
            </text>

            {/* Checkmark (3D) */}
            <g filter="url(#shadow)">
              <path d="M 115 155 L 135 175 L 185 110 L 200 125 L 135 200 L 100 165 Z" fill="url(#checkGrad)" />
              <path d="M 115 155 L 135 175 L 185 110 L 200 125 L 135 200 L 100 165 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
            </g>
          </svg>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.headingTop}>Caring Representation Led By</span><br/>
            <span className={styles.headingBottom}>Board-Certified Specialists</span>
          </h2>
          
          <div className={styles.textContent}>
            <p>
              When you are facing a divorce or another family law challenge in the Triangle area, it can seem like the world is falling apart around you. At Deer Designer Family Law, P.L.L.C., we understand the turmoil you are going through, and we are committed to guiding you toward the best resolution possible.
            </p>
            <p>
              Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne, both specialists with a board certification in family law from the North Carolina State Board of Legal Specialization, and includes other board-certified family law specialists as well. You can count on our depth of experience and dedication to excellence to help you through this difficult time.
            </p>
          </div>

          <button className={`btn-primary ${styles.learnMoreBtn}`}>
            WHAT DOES IT MEAN TO BE A CERTIFIED FAMILY LAW SPECIALIST? <span style={{marginLeft: '8px'}}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
