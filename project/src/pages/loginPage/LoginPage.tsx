import React from "react";
import Footer from "../../components/Footer";

import "./loginPage.scss";
import LoginForm from "../../components/LoginForm";

interface Props {
  logger: (state: boolean) => void,
}

export default class LoginPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <main className="main">
          <div className="main__login__wrapper wrapper">
            <section className="main__login">
              <h3 className="main__login__head">Welcome to course</h3>
              <LoginForm logger={this.props.logger}/>
            </section>
          </div>
          ;
        </main>
        <Footer />
      </>
    );
  }
}
