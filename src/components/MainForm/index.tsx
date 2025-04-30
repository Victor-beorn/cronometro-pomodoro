import { Input } from '../Input';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { CirclePlay } from 'lucide-react';
import { useRef } from 'react';

import styles from './styles.module.css';
import { TaskModel } from '../../Models/TaskModel';
import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: '00:00', // Conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <Input
          labelText='Task:'
          id='meuInput'
          type='text'
          placeholder='Tarefa'
          ref={taskNameInput}
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
