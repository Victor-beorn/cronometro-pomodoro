import { TimerReset, House, Settings, Sun } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='' className={styles.menuLink}>
        <House />
      </a>
      <a href='' className={styles.menuLink}>
        <TimerReset />
      </a>
      <a href='' className={styles.menuLink}>
        <Settings />
      </a>
      <a href='' className={styles.menuLink}>
        <Sun />
      </a>
    </nav>
  );
}
