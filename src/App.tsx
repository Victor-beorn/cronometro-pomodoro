import { CirclePlay } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/themes.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action="">
          <div className="formRow">
            <Input labelText='Task:' id='meuInput' type="text" placeholder='Tarefa'/>
          </div>

          <div className="formRow">
            <p>Neste ciclo foque por 25 min.</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<CirclePlay />}/>
          </div>
        </form>
      </Container>
      <Container>
        <Footer/>
      </Container>
    </>
  );
}
