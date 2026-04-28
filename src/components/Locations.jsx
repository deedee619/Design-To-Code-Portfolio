import styles from './Locations.module.css';

const locations = [
  { title: 'Cary Office', address: '123 Main St, Suite 100\nCary, NC 27511' },
  { title: 'Wake Forest Office', address: '456 Oak Ave, Suite 200\nWake Forest, NC 27587' },
  { title: 'Pittsboro Office', address: '789 Pine Ln, Suite 300\nPittsboro, NC 27312' }
];

export default function Locations() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {locations.map((loc, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className={styles.title}>{loc.title}</h3>
              <p className={styles.address}>{loc.address.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
              <button className="btn-secondary" style={{color: 'var(--color-navy)', borderColor: 'var(--color-navy)'}}>Get Directions</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
