// src/components/HeroSection/HeroSection.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle />
        <p>{t('hero.subtitle')}</p>
        <a
          href="https://wa.me/972525339443"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          {t('hero.cta')}
        </a>
      </motion.div>
    </section>
  );
}
