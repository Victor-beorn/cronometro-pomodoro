import styles from './styles.module.css'

type cyclesPros = {

}

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
      </div>
    </div>
  );
}