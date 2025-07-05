import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
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
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <a href="#services" className={styles.cta}>
          {t('hero.cta')}
        </a>
      </motion.div>
    </section>
  );
}
