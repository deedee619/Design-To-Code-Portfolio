'use client';
import { useState } from 'react';
import styles from './Testimonials.module.css';

const categories = ['All', 'Divorce', 'Child Custody', 'Property Division'];

const reviews = [
  { quote: "They made a very difficult time in my life so much easier. The team was incredibly supportive and strategic.", author: "- Mary S.", category: "Divorce" },
  { quote: "I couldn't have asked for better representation. They fought for what was right for my family.", author: "- David L.", category: "Child Custody" },
  { quote: "Professional, knowledgeable, and caring. Highly recommend Elis Family Law to anyone needing guidance.", author: "- Pam R.", category: "Property Division" }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredReviews = activeTab === 'All' 
    ? reviews 
    : reviews.filter(r => r.category === activeTab);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Hear What Our Clients Have to Say</h2>
        
        <div className={styles.tabs}>
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`${styles.tab} ${activeTab === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredReviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.quote}>"{review.quote}"</p>
              <p className={styles.author}>{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
