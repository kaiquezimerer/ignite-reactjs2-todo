import { InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.css';

function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} type="checkbox" className={styles.checkbox} />
  )
}

export default Checkbox;
