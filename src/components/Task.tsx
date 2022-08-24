import { useState } from 'react';

import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

import styles from './Task.module.css';

function Task() {
  const [checked, setChecked] = useState<boolean>(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div className={`${styles.task} ${checked ? styles.checked: ''}`}>
      <Checkbox
        checked={checked}
        onChange={handleChecked}
      />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ullam sequi, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem</p>
      <DeleteButton />
    </div>
  );
}

export default Task;
