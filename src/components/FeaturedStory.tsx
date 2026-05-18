'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './FeaturedStory.module.css';

export default function FeaturedStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className={styles.section} id="stories">
      {/* Abstract texture */}
      <div className={styles.texture} aria-hidden="true">
        <img src="/abstract (3).webp" alt="" />
      </div>

      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Label */}
          <div className={styles.topLabel}>
            <span className="rule" style={{ background: 'var(--rust)' }} />
            <span className="label">05 — Featured Insight</span>
          </div>

          {/* Content grid */}
          <div className={styles.grid}>
            {/* Left — image block */}
            <motion.div
              className={styles.imageCol}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <div className={`img-editorial ${styles.mainImage}`}>
                <img src="/hero image (3).webp" alt="Featured story visual" />
              </div>
              <div className={styles.imageTag}>
                <span className="label">Community Research</span>
              </div>
            </motion.div>

            {/* Right — editorial story */}
            <motion.div
              className={styles.storyCol}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.35 }}
            >
              <div className={styles.issue}>
                <span className="label">Issue 14 · June 2024</span>
              </div>

              <h2 className={styles.storyTitle}>
                When the data decides<br />
                <em>who gets to live.</em>
              </h2>

              <blockquote className={styles.pullQuote}>
                "Across Africa, algorithmic systems are making decisions about health,
                welfare, and justice — without consent, without accountability,
                and without communities."
              </blockquote>

              <p className={styles.excerpt}>
                In a new investigation, Pollicy researchers examine how automated
                decision-making systems deployed by governments across Sub-Saharan Africa
                are systematically excluding the most vulnerable — and what a feminist
                data governance framework could do to change that.
              </p>

              <div className={styles.storyFooter}>
                <div className={styles.byline}>
                  <span className={styles.bylineLabel}>By the Pollicy Research Team</span>
                  <span className="label">12 min read</span>
                </div>
                <a href="#" className={styles.readBtn} id="featured-story-read-btn">
                  Read the Investigation
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
