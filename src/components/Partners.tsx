'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Partners.module.css';

const partners = [
  'Ford Foundation',
  'Omidyar Network',
  'Mozilla Foundation',
  'Open Society Foundations',
  'IDRC Canada',
  'GIZ',
  'UN Women',
  'Google.org',
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className={styles.section} id="partners">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span className="rule" />
          <span className="label">06 — Partners &amp; Supporters</span>
        </motion.div>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Supported by leading global institutions committed
          to equitable and rights-respecting futures.
        </motion.p>

        <motion.div
          className={styles.marqueeWrapper}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.marquee}>
            <div className={styles.track}>
              {[...partners, ...partners].map((p, i) => (
                <span key={`${p}-${i}`} className={styles.partnerName}>
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.fadeRight} aria-hidden="true" />
        </motion.div>

        {/* Separator */}
        <div className={styles.statsSeparator} aria-hidden="true" />

        {/* Stats row */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[
            { value: '50+', label: 'Research Publications' },
            { value: '30+', label: 'African Countries Reached' },
            { value: '200K+', label: 'Community Members' },
            { value: '7', label: 'Years of Impact' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
