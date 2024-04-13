// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const { NEXT_PUBLIC_ONBOARDING_URL, NEXT_PUBLIC_TRACEABILITY_URL } = process.env

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/traceability",
        destination: `${NEXT_PUBLIC_TRACEABILITY_URL}/traceability`,
      },
      {
        source: "/traceability/:path*",
        destination: `${NEXT_PUBLIC_TRACEABILITY_URL}/traceability/:path*`,
      },
      {
        source: "/onboarding",
        destination: `${NEXT_PUBLIC_ONBOARDING_URL}/onboarding`,
      },
      {
        source: "/onboarding/:path*",
        destination: `${NEXT_PUBLIC_ONBOARDING_URL}/onboarding/:path*`,
      },
    ]
  },
};

module.exports = withNx(nextConfig);
