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
            <img
                src="/images/LEV_GROUP_LOGO_clean.png"
                alt="LEV GROUP Logo"
                className={styles.logoImage}
            />

        </motion.div>
    );
}
