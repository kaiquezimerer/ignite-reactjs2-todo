import Input from './components/Input';
import Task from './components/Task';
import CreateButton from './components/CreateButton';

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
      {/* Content */}
      <section className={styles.content}>
        <div className={styles.createInputWrapper}>
          <Input type="text" placeholder="Adicione uma nova tarefa"/>
          <CreateButton />
        </div>
      </section>
    </main>
  );
}

export default App;
