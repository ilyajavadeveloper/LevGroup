import styles from './Header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* ваш логотип или другое содержимое */}
      <LanguageSwitcher />
    </header>
  );
}
