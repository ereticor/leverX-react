import React from "react";

import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";

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
      <Footer />
    </>
  );
};

export default LoginPage;
