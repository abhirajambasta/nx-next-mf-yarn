import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.css';

const Traceability = dynamic(() => import('traceability/app'));

export function Page() {

  return (
    <div className={styles['container']}>
      <h1>Welcome to Traceability!</h1>
      <p className="mt-2">
        This page is a demo of Module Federation components
      </p>

      <div className="row mt-3">
        <Traceability />
      </div>
    </div>
  );
}

export default Page;
