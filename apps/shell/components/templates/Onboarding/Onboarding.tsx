import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.css';

const Button = dynamic(() => import('onboarding/button'));

export function Page() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Onboarding!</h1>
      <p className="mt-2">
        This page is a demo of Module Federation components
      </p>

      <p className="mt-5">
        Item Count: <strong>{count}</strong>
      </p>

      <div className="row mt-3">
        <div className="col">
          <Button onClick={() => setCount((i) => i + 1)}>
            Add items
          </Button>
        </div>
        <div className="col ml-3">
          <Button onClick={() => setCount(0)}>Clear items</Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
