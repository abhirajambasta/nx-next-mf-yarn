import { useState } from 'react';
import styles from './index.module.css';

export function Home() {
  const [items, setItems] = useState<number>(0);

  return (
    <div className={styles['container']}>
      <h1>Please be patient!</h1>
    </div>
  );
}

export default Home;
