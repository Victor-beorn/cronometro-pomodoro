import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
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
            <Input id='meuInput' type="text"/>
          </div>

          <div className="formRow">
            <p>Neste ciclo foque por 25 min.</p>
          </div>

          <div className="formRow">
            <h4>Ciclos:</h4>
            <p>0 0 0 0 0 </p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
