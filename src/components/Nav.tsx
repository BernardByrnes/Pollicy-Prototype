'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Nav.module.css';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Work',     href: '#work' },
  { label: 'Team',     href: '#team' },
  { label: 'Stories',  href: '#stories' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.inner}>
        {/* Wordmark */}
        <a href="/" className={styles.wordmark} aria-label="Pollicy Home">
          <span className={styles.wordmarkText}>POLLICY</span>
          <span className={styles.wordmarkSub}>Research. Policy. Data. People.</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.links} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta} id="nav-cta-btn">
            Get In Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpenMid : styles.bar} />
          <span className={menuOpen ? styles.barOpenBot : styles.bar} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.drawer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.drawerLink}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
