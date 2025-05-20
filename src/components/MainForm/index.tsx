import { Input } from '../Input';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { CirclePlay, StopCircle } from 'lucide-react';
import { useRef } from 'react';

import styles from './styles.module.css';
import { TaskModel } from '../../Models/TaskModel';
import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../Contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const LastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);


  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };


    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

    showMessage.success('Tarefa iniciada')
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error('Tarefa interronpida')
    dispatch({type: TaskActionTypes.INTERRUPT_TASK})
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
          disabled={!!state.activeTask}
          defaultValue={LastTaskName}
        />
      </div>

      <div className={styles.formRow}>
       <Tips/>
      </div>
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask && (
          <DefaultButton
            aria-label='iniciar nova tarefa'
            title='iniciar nova tarefa'
            type='submit'
            icon={<CirclePlay />}
          />
        ) }{ !!state.activeTask &&(
          <DefaultButton
            aria-label='Pausar tarefa'
            title='Pausar tarefa'
            type='button'
            color='red'
            icon={<StopCircle />}
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
