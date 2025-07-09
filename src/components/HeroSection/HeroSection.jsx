import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle';

export default function HeroSection() {
  const { t } = useTranslation();

  // Плавный скролл до контактов
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.photoBlur}></div>
      <motion.div
        className={styles.centerBlock}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.logoWrapper}>
          <HeroTitle />
        </div>
        <div className={styles.slogan}>{t('hero.slogan')}</div>
        <button className={styles.cta} onClick={scrollToContact} type="button">
          {t('hero.button')}
        </button>
      </motion.div>
      {/* Нижний плавный градиент */}
      <div className={styles.softFade}></div>
    </section>
  );
}
