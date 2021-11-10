import React from "react";

import Footer from "../../components/Footer";

const WithFooter = <P extends object>(Page: React.ComponentType<P>) => {
  class PageWithFoot extends React.Component<P> {
    render() {
      return (
        <>
          <Page {...this.props} />
          <Footer />
        </>
      );
    }
  }

  return PageWithFoot;
};

export default WithFooter;
