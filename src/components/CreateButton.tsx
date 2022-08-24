import { ButtonHTMLAttributes } from 'react';

import PlusIcon from '../assets/plus.svg';

import styles from './CreateButton.module.css';

function CreateButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      title="Criar"
      className={styles.createButton}
    >
      Criar
      <img src={PlusIcon} alt="Criar" />
    </button>
  );
}

export default CreateButton;
