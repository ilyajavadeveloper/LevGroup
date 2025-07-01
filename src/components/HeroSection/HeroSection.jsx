// src/components/HeroSection/HeroSection.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      {/* Верхний затемняющий градиент */}
      <div className={styles.overlay} />

      {/* Контент по центру */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle />
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <a href="#contact" className={styles.cta}>
          {t('hero.cta')}
        </a>
      </motion.div>

      {/* Нижний плавный переход к следующей секции */}
      <div className={styles.bottomFade} />
    </section>
  );
}
