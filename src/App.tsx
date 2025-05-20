import { Menssages } from './components/Menssages';
import { TaskContextProvider } from './Contexts/TaskContext/TaskContextProvaider';
import { MainRouter } from './components/routers/MainRouter';

import './styles/global.css';
import './styles/themes.css';

export function App() {
  return (
    <TaskContextProvider>
      <Menssages>
        <MainRouter />
      </Menssages>
    </TaskContextProvider>
  );
}
