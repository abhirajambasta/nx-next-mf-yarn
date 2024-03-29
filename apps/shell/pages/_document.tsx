import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from '@module-federation/nextjs-mf/utils';
import { StyledJsxRegistry } from 'registry';

import {
  Provider as SpectrumProvider,
  lightTheme,
} from '@adobe/react-spectrum';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (
      process.env.NODE_ENV === 'development' &&
      !ctx?.req?.url?.includes?.('_next')
    ) {
      await revalidate().then((shouldReload) => {
        if (shouldReload) {
          ctx?.res?.writeHead?.(302, { Location: ctx.req.url });
          ctx?.res?.end?.();
        }
      });
    } else {
      ctx?.res?.on?.('finish', () => {
        revalidate();
      });
    }
    const initialProps = await Document.getInitialProps(ctx);
    const chunks = await flushChunks();

    return {
      ...initialProps,
      chunks,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          {/* @ts-expect-error Prop 'unknownProp' is not defined */}
          <FlushedChunks chunks={this.props?.chunks} />
        </Head>

        <body className="bg-background-grey">
          <StyledJsxRegistry>
            <SpectrumProvider theme={lightTheme} colorScheme="light">
              <Main />
              <NextScript />
            </SpectrumProvider>
          </StyledJsxRegistry>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
