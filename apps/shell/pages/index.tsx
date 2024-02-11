import Link from 'next/link';
import { className, styles } from './styles';

import withStyles from '@hocs/with-styles';

export function Page({ className }) {
  return (
    <div className={`${className} container`}>
      <h1>Welcome to Next.js, Nx, Module Federation!</h1>
      <p className="mt-2">
        This project exemplifies the use of some Module Federation features in a
        monorepository managed by Nx
      </p>

      <h3 className="mt-5">Third party components (reactstrap)</h3>
      <Link href="/design-system/buttons">buttons</Link>

      <h3 className="mt-3">
        Module Federation (
        <a href="https://app.privjs.com/package?pkg=@module-federation/nextjs-mf">
          nextjs-mf
        </a>
        )
      </h3>
      <Link href="/module-federation/component">component</Link>
    </div>
  );
}

export default withStyles(Page)(styles, className);
