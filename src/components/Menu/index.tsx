import { TimerReset, House, Settings, Sun, Moon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  })

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />
  }

  function handleThemeChenge(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); 

  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
        <House />
      </a>
      <a href='#' className={styles.menuLink} aria-label='Ver Historico' title='Ver Historico'>
        <TimerReset />
      </a>
      <a href='#' className={styles.menuLink} aria-label='Ir para a Configuração' title='Ir para a Configuração'>
        <Settings />
      </a>
      <a href='#' className={styles.menuLink} aria-label='Mudar tema da página' title='Mudar tema da página' onClick={handleThemeChenge}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
