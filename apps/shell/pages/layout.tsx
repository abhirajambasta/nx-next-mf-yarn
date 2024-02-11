import Header from '@components/organisms/Header';
import ErrorBoundary from '@components/organisms/ErrorBoundary';

export default function Layout({ children }) {
  console.log({ NEXT_PUBLIC_ABC: process.env.NEXT_PUBLIC_ABC });
  return (
    <ErrorBoundary>
      <Header />
      <main>{children}</main>
    </ErrorBoundary>
  );
}
