import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

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
        <img src="/images/logo.png" alt="Lev Group" className={styles.logo} />
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <a href="#contact" className={styles.cta}>{t('hero.cta')}</a>
      </motion.div>
    </section>
  );
}
