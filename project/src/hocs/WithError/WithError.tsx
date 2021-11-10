import React from "react";

import "./error.scss";

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
      const { hasError } = this.state;
      if (hasError) {
        return (
          <div className="error__wrapper wrapper">
            <h1 className="error__head">Something went wrong x_x</h1>
            {/* <p>Error: {errInfo}</p> */}
            <button
              className="btn error__btn"
              onClick={() => window.location.reload()}
            >
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
