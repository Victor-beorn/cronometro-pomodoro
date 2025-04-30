import { TaskContextProvider } from './Contexts/TaskContext/TaskContextProvaider';
import { Home } from './Pages/Home';

import './styles/global.css';
import './styles/themes.css';

export function App() {

  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>

  );
}
