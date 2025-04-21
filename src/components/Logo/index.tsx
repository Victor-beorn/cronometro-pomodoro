import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return <div className={styles.logo}>
    <a href="" className={styles.logoLink}>
      <TimerIcon/>
      <p>Pomodoro <br /> Timer</p>
    </a>
  </div>;
}
