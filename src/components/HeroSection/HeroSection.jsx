import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import HeroTitle from '../HeroTitle/HeroTitle';

export default function HeroSection() {
    const { t } = useTranslation();

    const openWhatsApp = () => {
        const phoneNumber = '972524388967';
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
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
                <button className={styles.cta} onClick={openWhatsApp} type="button">
                    {t('hero.button')}
                </button>
            </motion.div>
            <div className={styles.softFade}></div>
        </section>
    );
}
