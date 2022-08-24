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
    </main>
  );
}

export default App;
