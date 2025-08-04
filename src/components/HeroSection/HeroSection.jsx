// src/components/HeroSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const { t } = useTranslation();

    const openWhatsApp = () => {
        const phoneNumber = '972524388967';
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
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
                {/* Логотип по центру */}
                <Logo className={styles.logo} />

                {/* Слоган под логотипом */}
                <div className={styles.slogan}>
                    {t('hero.slogan')}
                </div>

                {/* Кнопка CTA */}
                <button
                    className={styles.cta}
                    type="button"
                    onClick={openWhatsApp}
                >
                    {t('hero.button')}
                </button>
            </motion.div>

            <div className={styles.softFade} />
        </section>
    );
}
