import { useTranslation } from 'react-i18next';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
        <a href="tel:0525339443" className={styles.link}><FaPhoneAlt /> 052‑5339443</a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=levgroup4u@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaEnvelope /> levgroup4u@gmail.com
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=ירושלים+18+אשדוד"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaMapMarkerAlt /> ירושלים 18, אשדוד
        </a>

        <div className={styles.socials}>
          <a href="https://wa.me/972525339443" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/share/16gqkJDfob/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/lev_groupltd" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
