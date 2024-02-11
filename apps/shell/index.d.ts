/* eslint-disable @nx/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'onboarding/button' {
  export * from '@onboarding/components/atoms/button';
  export { default } from '@onboarding/components/atoms/button';
}


declare module 'traceability/app' {
  export * from '@traceability/pages';
  export { default } from '@traceability/pages';
}
