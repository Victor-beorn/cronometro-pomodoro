import styles from './styles.module.css';
import { RouterLink } from '../routerLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/sobre-pomodoro/'>Entenda a tecnica pomodoro ⏱️</RouterLink>
      <RouterLink href='/'>Pomodoro timer &copy; {new Date().getFullYear()}</RouterLink>
    </footer>
  );
}
