import Link from 'next/link';
import { className, styles } from './styles';

import Onboarding from '@shell/components/templates/Onboarding';

import withStyles from '@hocs/with-styles';

export function Page({ className }) {
  return (
    <div className={`${className} container`}>
      <h3 className="mt-3">
        Module Federation (
        <a href="https://app.privjs.com/package?pkg=@module-federation/nextjs-mf">
          nextjs-mf
        </a>
        )
      </h3>
      <Onboarding />

      <h3 className="mt-5">Third party components (@adobe/react-spectrum)</h3>
      <Link href="/design-system/buttons">buttons</Link>

      <br />

      <h3 className="mt-5">Module Federation on Route Change</h3>
      <Link href="/module-federation/component">component</Link>
    </div>
  );
}

export default withStyles(Page)(styles, className);
