// src/components/HeroSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const { t } = useTranslation();

    const openWhatsApp = () => {
        window.open('https://wa.me/972524388967', '_blank');
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
                <Logo className={styles.logo} />
                <div className={styles.slogan}>
                    {t('hero.slogan')}
                </div>
                <button
                    className={styles.cta}
                    onClick={openWhatsApp}
                >
                    {t('hero.button')}
                </button>
            </motion.div>

            <div className={styles.softFade} />
        </section>
    );
}
