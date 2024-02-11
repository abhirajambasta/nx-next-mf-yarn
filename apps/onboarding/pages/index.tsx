import { useState } from 'react';
import Button from '../components/atoms/button';
import styles from './index.module.css';

export function Home() {
  const [items, setItems] = useState<number>(0);

  return (
    <div className={styles['container']}>
      <h1>Welcome to ONBOARDING!</h1>

      <p>
        Items: <strong>{items}</strong>
      </p>

      <Button onClick={() => setItems((x) => x + 1)} />
    </div>
  );
}

export default Home;
