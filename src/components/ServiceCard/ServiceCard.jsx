import styles from '../ServiceCard/ServiceCard.module.css'


export default function ServiceCard({ title, icon: Icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
