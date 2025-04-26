import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda a tecnica pomodoro ⏱️</a>
      <a href=''>Pomodoro timer &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
