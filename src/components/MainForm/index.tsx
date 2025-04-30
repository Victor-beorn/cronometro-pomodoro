import { Input } from '../Input';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { CirclePlay } from 'lucide-react';

import styles from './styles.module.css';


export function MainForm() {

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <Input
          labelText='Task:'
          id='meuInput'
          type='text'
          placeholder='Tarefa'
        />
      </div>

      <div className={styles.formRow}>
        <p>Neste ciclo foque por 25 min.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<CirclePlay />} />
      </div>
    </form>
  );
}
