import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const { t } = useTranslation();

    const openWhatsApp = () => {
        const phoneNumber = '972524388967';
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    return (
        <section className={styles.hero}>
            <div className={styles.photoBlur} />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Название вместо логотипа */}
                <h1 className={styles.title}>LEV GROUP</h1>

                {/* Слоган */}
                <div className={styles.slogan}>{t('hero.slogan')}</div>

                {/* Кнопка CTA */}
                <button className={styles.cta} onClick={openWhatsApp} type="button">
                    {t('hero.button')}
                </button>
            </motion.div>

            <div className={styles.softFade} />
        </section>
    );
}
