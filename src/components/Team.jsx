import styles from './Team.module.css';

const team = [
  { name: 'Deer Designer', role: 'Partner', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Amanda C. Knight', role: 'Partner', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
  { name: 'Autumn D. Osbourne', role: 'Partner', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' }
];

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className="container">
        <h2 className={styles.heading}>Meet Our Partners</h2>
        <div className={styles.grid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.imagePlaceholder}
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
