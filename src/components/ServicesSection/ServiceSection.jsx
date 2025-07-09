import { useTranslation } from 'react-i18next';
import services from '../../data/services';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './ServiceSection.module.css';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      className={styles.services}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Мягкий fade сверху */}
      <div className={styles.topFade} />
      <h2 className={styles.title}>{t('services.title')}</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title={service.title[i18n.language] || service.title.en}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
