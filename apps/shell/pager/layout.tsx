import Header from '@components/organisms/Header';
import ErrorBoundary from '@components/organisms/ErrorBoundary';

export default function Layout({ children }) {
  return (
    <ErrorBoundary>
      <Header />
      <main>{children}</main>
    </ErrorBoundary>
  );
}
