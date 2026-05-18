'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Intro.module.css';

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className={styles.section} id="about">
      <div className={styles.container}>
        {/* Left — decorative column number */}
        <div className={styles.aside}>
          <span className="label">01 — Who We Are</span>
          <div className={styles.vertLine} aria-hidden="true" />
        </div>

        {/* Centre — main story */}
        <motion.div
          className={styles.body}
          variants={reveal}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <h2 className={styles.headline}>
            A feminist institution<br />
            <em>at the intersection</em><br />
            of data &amp; power.
          </h2>

          <div className={styles.prose}>
            <p>
              Founded in 2017, Pollicy is a Pan-African organisation working at the nexus of
              technology, data, and policy to advance feminist and human-rights principles
              across the continent.
            </p>
            <p>
              We conduct rigorous research, engage governments and civil society, and build
              the tools and knowledge that enable African communities to reclaim agency over
              their data and digital lives.
            </p>
          </div>

          <div className={styles.pillars}>
            {[
              { label: 'Research', desc: 'Rigorous African-led evidence.' },
              { label: 'Policy', desc: 'Rights-centred digital governance.' },
              { label: 'Community', desc: 'People at the centre of data.' },
            ].map((p) => (
              <div key={p.label} className={styles.pillar}>
                <span className={styles.pillarLabel}>{p.label}</span>
                <span className={styles.pillarDesc}>{p.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — cinematic image */}
        <motion.div
          className={styles.imgCol}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={`img-editorial ${styles.imgWrap}`}>
            <img
              src="/hero image (2).png"
              alt="Pollicy team at work"
            />
          </div>
          <div className={styles.imgCaption}>
            <span className="rule" style={{ background: 'var(--teal)' }} />
            <span className="label">Kampala · Nairobi · Dakar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
