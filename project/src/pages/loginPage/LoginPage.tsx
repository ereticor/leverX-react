import React from "react";

import WithFooter from "../../hocs/WithFooter";

import LoginForm from "../../components/LoginForm";

import "./loginPage.scss";

const LoginPage = () => {
  return (
    <>
      <main className="main">
        <div className="main__login__wrapper wrapper">
          <section className="main__login">
            <h3 className="main__login__head">Welcome to course</h3>
            <LoginForm />
          </section>
        </div>
        ;
      </main>
    </>
  );
};

export default WithFooter(LoginPage);
