import { Metadata } from 'next';
import Link from 'next/link';
import styles from './styles.module.css';

// import Onboarding from '@shell/components/templates/Onboarding';

export const metadata: Metadata = {
  title: 'Welcome to shell!',
}

function Page() {
  return (
    <div className={`${styles.container}`}>
      <h3 className="mt-3">
        Module Federation (
        <a href="https://app.privjs.com/package?pkg=@module-federation/nextjs-mf">
          nextjs-mf
        </a>
        )
      </h3>
      <h3 className="mt-5">Third party components (@adobe/react-spectrum)</h3>
      <Link href="/design-system/buttons">buttons</Link>
      <br />

      <h3 className="mt-5">Get to traceability</h3>
      <Link href="/traceability">traceability</Link>


      <br />

      <h3 className="mt-5">Module Federation on Route Change</h3>
      <Link href="/module-federation/component">component</Link>
    </div>
  );
}

export default Page;
