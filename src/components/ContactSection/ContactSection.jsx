import { useTranslation } from 'react-i18next';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  const { t } = useTranslation();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',formRef.current,'YOUR_PUBLIC_KEY')
      .then(() => alert('✅ ' + t('form.success')))
      .catch(() => alert('❌ ' + t('form.error')));
  };

  return (
    <motion.section
      className={styles.contact}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        {t('contact.title')}
      </motion.h2>

      <motion.div className={styles.info} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
        <a href="tel:0525339443"><FaPhoneAlt /> 052‑5339443</a>
        <a href="mailto:levgroup4u@gmail.com"><FaEnvelope /> levgroup4u@gmail.com</a>
        <a href="https://www.google.com/maps/search/?api=1&query= ירושלים+18+אשדוד" target="_blank"><FaMapMarkerAlt /> ירושלים 18, אשדוד</a>
        <div className={styles.socials}>
          <a href="https://wa.me/972525339443" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/share/16gqkJDfob/" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/lev_groupltd" target="_blank" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </motion.div>

      <motion.form ref={formRef} onSubmit={handleSubmit} className={styles.form} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
        <input type="text" name="name" placeholder={t('form.name')} required />
        <input type="tel" name="phone" placeholder={t('form.phone')} required />
        <textarea name="message" placeholder={t('form.message')} required />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <button type="submit">{t('form.send')}</button>
      </motion.form>
    </motion.section>
  );
}
