import { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} type="text" className={styles.input} />
  );
}

export default Input;
