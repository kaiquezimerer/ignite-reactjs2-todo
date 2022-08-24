import { useState } from 'react';

import { TodoItem } from '../App';

import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

import styles from './Task.module.css';

interface TaskProps {
  todoItem: TodoItem;
  handleChecked: (id: string) => void;
  handleDelete: (id: string) => void;
}

function Task({ todoItem, handleChecked, handleDelete }: TaskProps) {
  const { id, checked, content } = todoItem;

  function handleOnChange() {
    handleChecked(id);
  }

  function handleOnClick() {
    handleDelete(id);
  }

  return (
    <li className={`${styles.task} ${checked ? styles.checked: ''}`}>
      <Checkbox
        checked={checked}
        onChange={handleOnChange}
      />
      <div>
        <p>{content}</p>
      </div>
      <DeleteButton onClick={handleOnClick} />
    </li>
  );
}

export default Task;
