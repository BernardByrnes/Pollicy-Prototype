'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Footer.module.css';

const footerLinks = {
  Work: ['Data Governance', 'Digital Rights', 'Feminist Tech', 'Capacity Building'],
  Research: ['Publications', 'Reports', 'Policy Briefs', 'Data Tools'],
  Connect: ['About Pollicy', 'Team', 'Careers', 'Media'],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className={styles.footer} id="contact">
      {/* Newsletter strip */}
      <div className={styles.newsletter}>
        <div className="container">
          <motion.div
            className={styles.newsletterInner}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className={styles.newsletterText}>
              <span className="rule" style={{ background: 'var(--orange)' }} />
              <h3 className={styles.newsletterTitle}>
                Stay inside<br /><em>the work.</em>
              </h3>
              <p className={styles.newsletterSub}>
                Research dispatches, policy updates, and Pollicy's latest insights —
                delivered to your inbox.
              </p>
            </div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputWrap}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.input}
                  id="newsletter-email-input"
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className={styles.submitBtn} id="newsletter-submit-btn">
                  Subscribe
                </button>
              </div>
              <p className={styles.formNote}>
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className="container">
          <motion.div
            className={styles.mainInner}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Big wordmark */}
            <div className={styles.wordmarkRow}>
              <span className={styles.bigWordmark}>POLLICY</span>
              <div className={styles.wordmarkTag}>
                <span className="label">Pan-African feminist technology,</span>
                <span className="label">data &amp; policy organization.</span>
              </div>
            </div>

            {/* Links grid */}
            <div className={styles.linksGrid}>
              {Object.entries(footerLinks).map(([section, items]) => (
                <div key={section} className={styles.linkCol}>
                  <span className={styles.colTitle}>{section}</span>
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className={styles.footerLink}
                      id={`footer-${item.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
              <span className={styles.copy}>© 2024 Pollicy. All rights reserved.</span>
              <div className={styles.socials}>
                {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((s) => (
                  <a key={s} href="#" className={styles.social} aria-label={s} id={`social-${s.toLowerCase()}`}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
