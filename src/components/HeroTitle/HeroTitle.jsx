import styles from './HeroTitle.module.css';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.15 }}
    >
      <span className={styles.gradient}>LEV GROUP</span>
    </motion.h1>
  );
}
