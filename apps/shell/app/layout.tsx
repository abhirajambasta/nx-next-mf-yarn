import Header from '@components/organisms/Header';
import { StyledJsxRegistry } from '@shell/utils/styles/registry';
import {
  Provider as SpectrumProvider,
  lightTheme,
} from '@adobe/react-spectrum';
import './global-styles.css';

export default function Layout({ children }) {
  return (
    <StyledJsxRegistry>
      <SpectrumProvider theme={lightTheme} colorScheme="light">
        <Header />
        <main className="app">{children}</main>
      </SpectrumProvider>
    </StyledJsxRegistry>
  );
}
