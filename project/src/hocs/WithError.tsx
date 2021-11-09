import React from "react";

interface State {
  hasError: boolean;
  err: Error | null;
  errInfo: {} | string | null;
}

const WithError = <P extends object>(Component: React.ComponentType<P>) => {
  class ErrorFallback extends React.Component<P, State> {
    constructor(props: P) {
      super(props);

      this.state = {
        hasError: false,
        err: null,
        errInfo: null,
      };
    }

    static getDerivedStateFromError(error: Error | null) {
      return { hasError: true };
    }

    componentDidCatch(err: Error, errInfo: {} | string) {
      console.log("wake up, you obosralsia!");
    }

    render() {
      const { hasError, err } = this.state;
      if (hasError) {
        return (
          <div className="error__wrapper wrapper">
            <h1>Something went wrong x_x</h1>
            <p>Error: {err}</p>
            <button className="btn" onClick={() => window.location.reload()}>
              Reload page
            </button>
          </div>
        );
      }

      return <Component {...this.props} />;
    }
  }

  return ErrorFallback;
};

export default WithError;
