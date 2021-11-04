import React from "react";
import Footer from "../../components/Footer";

import "./loginPage.scss";
import LoginForm from "../../components/LoginForm";

interface Props {
  logger: (state: boolean) => void;
}

const LoginPage = ({ logger }: Props) => {
  return (
    <>
      <main className="main">
        <div className="main__login__wrapper wrapper">
          <section className="main__login">
            <h3 className="main__login__head">Welcome to course</h3>
            <LoginForm logger={logger} />
          </section>
        </div>
        ;
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
