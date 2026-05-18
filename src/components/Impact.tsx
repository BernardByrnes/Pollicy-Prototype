'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Impact.module.css';

const areas = [
  {
    id: 'impact-data-governance',
    number: '01',
    title: 'Data Governance',
    description:
      'Shaping national and continental data protection policies that centre human rights, equity, and community participation.',
    accent: 'var(--teal)',
  },
  {
    id: 'impact-digital-rights',
    number: '02',
    title: 'Digital Rights',
    description:
      'Defending civil liberties in digital spaces — from surveillance oversight to platform accountability and internet shutdowns.',
    accent: 'var(--orange)',
  },
  {
    id: 'impact-feminist-tech',
    number: '03',
    title: 'Feminist Technology',
    description:
      'Building feminist frameworks for AI, algorithmic systems, and technology design across the African continent.',
    accent: 'var(--rust)',
  },
  {
    id: 'impact-capacity',
    number: '04',
    title: 'Capacity Building',
    description:
      'Training civil society, journalists, and activists on data literacy, digital security, and advocacy skills.',
    accent: 'var(--teal)',
  },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className={styles.section} id="work">
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div>
            <span className="rule" style={{ background: 'var(--teal)' }} />
            <span className="label">03 — Our Work</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.ghostText} aria-hidden="true">Impact</span>
            Areas of<br /><em>deep work.</em>
          </h2>
        </motion.div>

        {/* Staggered layout */}
        <div className={styles.grid}>
          {areas.map((area, i) => (
            <motion.div
              key={area.id}
              id={area.id}
              className={`${styles.card} ${i % 2 === 1 ? styles.offset : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.cardNumber} style={{ color: area.accent }}>
                {area.number}
              </div>
              <div className={styles.cardDivider} style={{ background: area.accent }} />
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.description}</p>
              <a href="#" className={styles.cardLink}>
                Explore <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
