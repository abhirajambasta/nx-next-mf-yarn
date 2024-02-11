import { Component, isValidElement } from 'react';
import {
  TErrorBoundaryProps,
  TErrorBoundaryState,
} from './ErrorBoundary.types';

const Error = ({ message }: { message: string }) => (
  <>
    Something went wrong! <div>{message}</div>
  </>
);

const log = console.log;

const INITIAL_STATE: TErrorBoundaryState = {
  error: null,
  componentStack: null,
};

class ErrorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  public constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = INITIAL_STATE;
  }

  public componentDidCatch(
    error: Error,
    { componentStack }: React.ErrorInfo
  ): void {
    const { onError, config = {} } = this.props;

    if (onError) {
      onError(error, componentStack);
    }

    this.setState({ error, componentStack });

    log(
      'error captured in shell error boundary %o with %o additional values',
      error,
      config
    );
  }

  public resetErrorBoundary: () => void = () => {
    const { onReset } = this.props;
    const { error, componentStack } = this.state;
    if (onReset) {
      onReset(error, componentStack);
    }
    this.setState(INITIAL_STATE);
  };

  public render(): React.ReactNode {
    const { fallback, children, message = '' } = this.props;
    const state = this.state;

    if (state.error && state.componentStack) {
      let element: React.ReactElement | undefined = undefined;

      if (typeof fallback === 'function') {
        element = fallback({
          error: state.error,
          componentStack: state.componentStack,
          resetError: this.resetErrorBoundary,
        });
      } else {
        element = fallback;
      }

      if (isValidElement(element)) {
        return element;
      }

      // Show default fallback if no fallback provided or is not valid
      return <Error message={message} />;
    }

    // @ts-expect-error
    return children;
  }
}

function withErrorBoundary<P extends {}>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: TErrorBoundaryProps
): React.FC<P> {
  const Wrapped: React.FC<P> = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
  return Wrapped;
}

export default ErrorBoundary;
export { withErrorBoundary };
