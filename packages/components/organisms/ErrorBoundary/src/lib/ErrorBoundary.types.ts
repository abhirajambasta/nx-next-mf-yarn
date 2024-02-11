export type TFallbackRender = (errorData: {
  error: Error;
  componentStack: string;
  resetError: () => void;
}) => React.ReactElement;

export type TErrorBoundaryProps = {
  children?: React.ReactNode | (() => React.ReactNode);
  /** A fallback component that gets rendered when the error boundary captures an error */
  fallback?: React.ReactElement | TFallbackRender;
  /** Called when the error boundary captures an error */
  onError?(error: Error, componentStack: string | null | undefined): void;
  /** Meta data to be send to Error Monitoring Tools */
  config?: Record<string, any>;
  /** Called if resetError() is called from the fallback render props function  */
  onReset?(error: Error | null, componentStack: string | null | undefined): void;
  /** Message to be shown if error occurred in dev environment  */
  message?: string;
};

export type TErrorBoundaryState = {
  error: Error | null;
  componentStack: React.ErrorInfo['componentStack'] | null;
};
