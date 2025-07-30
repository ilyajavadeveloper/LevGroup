import { motion } from 'framer-motion';
import styles from './HeroTitle.module.css';

export default function HeroTitle() {
    return (
        <motion.div
            className={styles.logoBlock}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
        >
            <div className={styles.topLine}>קבוצת</div>
            <h1 className={styles.title}>
                <span className={styles.gradient}>LEV</span>
                <br />
                <span className={styles.gradient}>GROUP</span>
            </h1>
            <div className={styles.subtext}>אחזקה · ניהול · תיווך</div>
        </motion.div>
    );
}
