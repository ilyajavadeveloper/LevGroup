// src/components/ContactSection/ContactSection.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      className={styles.contact}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t('contact.title')}
      </motion.h2>

      <motion.div
        className={styles.info}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="tel:0525339443" className={styles.link}>
          <FaPhoneAlt /> 052‑5339443
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&to=levgroup4u@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaEnvelope /> levgroup4u@gmail.com
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=שדרות+ירושלים+18,+אשדוד"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaMapMarkerAlt /> שדרות ירושלים 18, אשדוד
        </a>

        <div className={styles.socials}>
          <a
            href="https://wa.me/972525339443"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/16gqkJDfob/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/lev.group1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="wave-separator-bottom">
  <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="url(#fadeGradientBottom)"
      d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z"
      opacity="0.68"
    />
    <defs>
      <linearGradient id="fadeGradientBottom" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#00444E" />
        <stop offset="50%" stop-color="#2D6168" />
        <stop offset="100%" stop-color="#E1A873" />
      </linearGradient>
    </defs>
  </svg>
</div>

      </motion.div>
    </motion.section>
  );
}
