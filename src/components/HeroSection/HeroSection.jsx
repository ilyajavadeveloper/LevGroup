// src/components/HeroSection/HeroSection.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      {/* Верхний градиент-затемнение */}
      <div className={styles.overlay} />

      {/* Размытие в нижней части фото */}
      <div className={styles.blurOverlay} />

      {/* Основной контент */}
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

      {/* Цветовой градиент вниз */}
      <div className={styles.bottomFade} />

      {/* Волнообразный переход к следующей секции */}
      <svg className={styles.wave} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#E1A873" />
      </svg>
    </section>
  );
}
