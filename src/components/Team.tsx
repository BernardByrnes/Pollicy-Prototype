'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Team.module.css';

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className={styles.section} id="team">
      <div className="container">
        {/* Label */}
        <motion.div
          className={styles.labelRow}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span className="rule" style={{ background: 'var(--teal)' }} />
          <span className="label">04 — Our People</span>
        </motion.div>

        <div className={styles.grid}>
          {/* Left — big cinematic team photo */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.15 }}
          >
            <div className={`img-editorial ${styles.teamImg}`}>
              <img src="/our team photo.png" alt="Pollicy team" />
            </div>

            {/* City badge */}
            <motion.div
              className={styles.cityBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <div className={`img-editorial ${styles.cityThumb}`}>
                <img src="/kampala city.png" alt="Kampala cityscape" />
              </div>
              <div className={styles.cityInfo}>
                <span className={styles.cityName}>Kampala</span>
                <span className="label">Headquarters</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            className={styles.copyCol}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className={styles.title}>
              Built by the<br />
              <em>continent,</em><br />
              for the continent.
            </h2>

            <p className={styles.body}>
              Pollicy's team is a collective of researchers, technologists, policy
              advocates, and storytellers rooted in African communities. Our work
              is shaped by the people we serve — not the institutions we report to.
            </p>

            <div className={styles.locations}>
              <span className="label" style={{ marginBottom: '1rem', display: 'block' }}>
                Our Presence
              </span>
              {['Kampala, Uganda', 'Nairobi, Kenya', 'Dakar, Senegal', 'Lagos, Nigeria'].map((city) => (
                <div key={city} className={styles.locationRow}>
                  <span className={styles.dot} />
                  <span className={styles.cityText}>{city}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className={styles.joinLink} id="team-join-us-link">
              Work With Us <span className={styles.arrow}>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
