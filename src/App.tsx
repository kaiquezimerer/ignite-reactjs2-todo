import { ChangeEvent, FormEvent, useState } from 'react';

import Input from './components/Input';
import Task from './components/Task';
import CreateButton from './components/CreateButton';

import LogoImg from './assets/logo.svg';

import styles from './App.module.css';

export interface TodoItem {
  id: string;
  checked: boolean;
  content: string;
}

function App() {
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  function handleChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    if (content.length) {
      const newTodoItem = {
        id: new Date().toISOString(),
        content,
        checked: false,
      };

      setTodoList([
        ...todoList,
        newTodoItem,
      ]);

      setContent('');
    }
  }

  function handleChecked(id: string) {
    const newTodoList = todoList.map(todoItem => {
      return todoItem.id === id ? { ...todoItem, checked: !todoItem.checked } : todoItem;
    });

    setTodoList(newTodoList);
  }

  function handleDelete(id: string) {
    const newTodoList = todoList.filter(todoItem => {
      return todoItem.id !== id;
    });

    setTodoList(newTodoList);
  }

  const total = todoList.length;
  const totalChecked = todoList.filter(todoItem => todoItem.checked).length;

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
        {/* Create Task input */}
        <form 
          onSubmit={handleAddNewTask} 
          className={styles.createInputWrapper}
        >
          <Input 
            type="text"
            value={content}
            onChange={handleChangeContent}
            placeholder="Adicione uma nova tarefa"
          />
          <CreateButton type="submit" />
        </form>
        {/* Task list */}
        <section className={styles.todo}>
          <div className={styles.todoHead}> 
            <h2>Tarefas criadas <span>{total}</span></h2>
            <h2>Concluídas <span>{total ? `${totalChecked} de ${total}` : 0}</span></h2>
          </div>
          <ul>
          {todoList.map(todoItem => {
            return (<Task 
              key={todoItem.id} 
              todoItem={todoItem} 
              handleChecked={handleChecked} 
              handleDelete={handleDelete}
            />);
          })}
        </ul>
        </section>
      </section>
    </main>
  );
}

export default App;
