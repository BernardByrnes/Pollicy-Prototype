'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section ref={ref} className={styles.hero} id="hero">
      {/* Cinematic background image */}
      <motion.div className={styles.imgWrap} style={{ y: imgY }}>
        <img
          src="/hero image (1).png"
          alt="Pollicy team collaborating in office"
          className={styles.heroImg}
        />
        <div className={styles.overlay} />
      </motion.div>

      {/* Abstract geometric accent */}
      <div className={styles.geometricAccent} aria-hidden="true">
        <img src="/abstract (1).png" alt="" className={styles.abstractImg} />
      </div>

      {/* Content */}
      <motion.div className={styles.content} style={{ y: textY }}>
        <motion.div className={styles.eyebrow} variants={fadeUp} custom={0} initial="hidden" animate="show">
          <span className="rule" />
          <span className="label">Pan-African Research &amp; Policy</span>
        </motion.div>

        <motion.h1 className={styles.headline} variants={fadeUp} custom={1} initial="hidden" animate="show">
          Evidence.<br />
          <em>Analysis.</em><br />
          Action.
        </motion.h1>

        <motion.p className={styles.subline} variants={fadeUp} custom={2} initial="hidden" animate="show">
          Pollicy builds rights-respecting data ecosystems across Africa — centering people,
          policy, and feminist principles in the age of technology.
        </motion.p>

        <motion.div className={styles.ctas} variants={fadeUp} custom={3} initial="hidden" animate="show">
          <a href="#research" className={styles.ctaPrimary} id="hero-explore-research">
            Explore Our Research
          </a>
          <a href="#about" className={styles.ctaGhost} id="hero-learn-more">
            About Pollicy
            <span className={styles.arrow}>→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
        <span className="label" style={{ writingMode: 'vertical-lr', letterSpacing: '0.2em' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
