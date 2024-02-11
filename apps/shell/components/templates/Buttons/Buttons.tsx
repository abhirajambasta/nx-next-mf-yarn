import { Button } from '@adobe/react-spectrum';

import styles from './styles.module.css';

export function Buttons() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Buttons!</h1>
      <p className="mt-2">
        This page shows the use of 3rd party components like{' '}
        @adobe/react-spectrum
      </p>

      <h3 className="mt-5">Buttons</h3>

      <div className={`${styles['board']} mt-2`}>
        <div className={styles['grid']}>
          <Button variant="primary">This is a primary button</Button>
          <Button variant="secondary">This is a secondary button</Button>
          <Button variant="accent">This is a accent button</Button>
          <Button variant="negative">This is a negative button</Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
