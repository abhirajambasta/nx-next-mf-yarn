import Header from '@components/organisms/Header';
import { StyledJsxRegistry } from '@shell/utils/styles/registry';
import './global-styles.css';

export default function Layout({ children }) {
  return (
    <StyledJsxRegistry>
        <Header />
        <main className="app">{children}</main>
    </StyledJsxRegistry>
  );
}
