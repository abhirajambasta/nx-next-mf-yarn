// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    shell: `shell@${process.env.NEXT_PUBLIC_SHELL_URL}/_next/static/${location}/remoteEntry.js`,
    onboarding: `onboarding@${process.env.NEXT_PUBLIC_ONBOARDING_URL}/_next/static/${location}/remoteEntry.js`,
    traceability: `traceability@${process.env.NEXT_PUBLIC_TRACEABILITY_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: 'shell',
    //     filename: 'static/chunks/remoteEntry.js',
    //     remotes: remotes(isServer),
    //     extraOptions: {
    //       automaticAsyncBoundary: true,
    //     },
    //     exposes: {},
    //     shared: {},
    //   })
    // );

    return config;
  },
};

module.exports = withNx(nextConfig);
