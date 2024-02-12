import { HTMLAttributes } from 'react';

import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function BuyButton({ children, ...props }: ButtonProps) {
  return (
    <button className={styles['button']} {...props}>
      {children || `Click me`}
    </button>
  );
}

export default BuyButton;
