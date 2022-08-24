import Input from './components/Input';
import Checkbox from './components/Checkbox';

import LogoImg from './assets/logo.svg';

import styles from './App.module.css';

function App() {
  return (
    <main>
      {/* Header */}
      <header className={styles.header}>
        <h1 title="Todo app">
          <img src={LogoImg} />
        </h1>
      </header>
      <section>
        <Input type="text" placeholder="Adicione uma nova tarefa"/>
        <Checkbox />
      </section>
    </main>
  );
}

export default App;
