/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from './layout';
import GlobalStyles from './global.styles';

import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Head>
          <title>Welcome to shell!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
