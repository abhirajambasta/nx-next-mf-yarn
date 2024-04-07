export default ({ rootDir }: { rootDir: string }) => ({
  automock: false,
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: `${rootDir}/tsconfig.spec.json` }],
    ".+\\.(css|style|less|sass|scss|svg)$": "jest-css-modules-transform",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  moduleDirectories: [
    "node_modules",
    `${rootDir}apps/**/node_modules`,
    `${rootDir}testing/modules`,
  ],
  preset: `${rootDir}testing/jest.preset.js`,
  testPathIgnorePatterns: [
    "/node_modules/",
    `${rootDir}apps/.*/(lib|build|dist)/`,
    `${rootDir}packages/.*/(build|dist)/`,
  ],
  setupFilesAfterEnv: [
    `${rootDir}testing/jest.setup.ts`,
  ],
});
