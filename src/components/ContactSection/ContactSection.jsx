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
        className={styles.bigTitle}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {t('contact.title').toUpperCase()}
      </motion.h2>

      <motion.div
        className={styles.info}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="tel:0525339443" className={styles.link}>
          <FaPhoneAlt className={styles.icon} /> 052‑5339443
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=levgroup4u@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaEnvelope className={styles.icon} /> levgroup4u@gmail.com
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=שדרות+ירושלים+18,+אשדוד"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaMapMarkerAlt className={styles.icon} /> שדרות ירושלים 18, אשדוד
        </a>
        <div className={styles.socials}>
          <a
            href="https://wa.me/972525339443"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={styles.socialIcon}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/16gqkJDfob/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialIcon}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/lev.group1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialIcon}
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
