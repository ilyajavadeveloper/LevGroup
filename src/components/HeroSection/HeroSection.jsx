import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle'; // Импортируем заголовок LEV GROUP

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle /> {/* Большой красивый LEV GROUP */}
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <a
          href="https://wa.me/972525339443"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          {t('hero.cta')}
        </a>
      </motion.div>
      <div className={styles.gradientTransition} />
      <div className="wave-separator">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="url(#fadeGradient)"
            d="M0,0 C480,120 960,0 1440,120 L1440,0 L0,0 Z"
            opacity="0.77"
          />
          <defs>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00444E" />
              <stop offset="50%" stopColor="#2D6168" />
              <stop offset="100%" stopColor="#E1A873" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
