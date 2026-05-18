'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Research.module.css';

const publications = [
  {
    id: 'pub-1',
    cover: '/publication cover (1).webp',
    tag: 'Data Governance',
    title: 'African Data Governance and Civic Space',
    subtitle: 'Building Rights-Respecting Data Ecosystems',
    year: 'June 2024',
    featured: true,
  },
  {
    id: 'pub-2',
    cover: '/publication cover (2).webp',
    tag: 'Digital Rights',
    title: 'Feminist Data Futures',
    subtitle: 'Centering Women in African Digital Policy',
    year: '2023',
    featured: false,
  },
  {
    id: 'pub-3',
    cover: '/publication cover (3).webp',
    tag: 'Technology',
    title: 'AI Governance Frameworks in Africa',
    subtitle: 'Gaps, Opportunities, and Community Responses',
    year: '2023',
    featured: false,
  },
  {
    id: 'pub-4',
    cover: '/publication cover (4).webp',
    tag: 'Privacy',
    title: 'Data Protection Laws Across Africa',
    subtitle: 'A Comparative Analysis',
    year: '2022',
    featured: false,
  },
];

const tags = ['All', 'Data Governance', 'Digital Rights', 'Technology', 'Privacy'];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? publications
    : publications.filter((p) => p.tag === activeTag);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section ref={ref} className={styles.section} id="research">
      {/* Abstract accent */}
      <div className={styles.bgAccent} aria-hidden="true">
        <img src="/abstract (2).webp" alt="" />
      </div>

      <div className="container">
        {/* Section header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.headerLeft}>
            <span className="rule" />
            <span className="label">02 — Research &amp; Publications</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Knowledge that<br /><em>shapes policy.</em>
          </h2>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {tags.map((t) => (
            <button
              key={t}
              id={`filter-${t.toLowerCase().replace(/\s/g, '-')}`}
              className={`${styles.filterBtn} ${activeTag === t ? styles.active : ''}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* Featured publication */}
        {featured && (
          <motion.div
            className={styles.featured}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2 }}
            key={featured.id}
          >
            <div className={`img-editorial ${styles.featuredCover}`}>
              <img src={featured.cover} alt={featured.title} />
            </div>
            <div className={styles.featuredInfo}>
              <span className={`label ${styles.featuredTag}`}>{featured.tag}</span>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredSub}>{featured.subtitle}</p>
              <div className={styles.featuredMeta}>
                <span className="label">{featured.year}</span>
                <span className={styles.readMore} id={`read-${featured.id}`}>
                  Read Publication <span className={styles.arrow}>→</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Archive grid */}
        <div className={styles.archive}>
          {rest.map((pub, i) => (
            <motion.a
              key={pub.id}
              href="#"
              className={styles.archiveCard}
              id={`pub-card-${pub.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.12 }}
            >
              <div className={`img-editorial ${styles.archiveCover}`}>
                <img src={pub.cover} alt={pub.title} />
              </div>
              <div className={styles.archiveInfo}>
                <span className="label" style={{ color: 'var(--teal)' }}>{pub.tag}</span>
                <h4 className={styles.archiveTitle}>{pub.title}</h4>
                <span className="label">{pub.year}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="#" className={styles.viewAllLink} id="view-all-publications">
            View All Publications
            <span className={styles.arrow}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
