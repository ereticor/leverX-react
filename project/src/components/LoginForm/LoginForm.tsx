import React, { useState } from "react";
import { RSAAAction } from "redux-api-middleware";

import { Input } from "../../interfaces/input";
import PropTypes from "prop-types";

import spellChecker from "../../helpers/spellChecker";

import "./loginForm.scss";

interface Props {
  LogIn: (query: string) => RSAAAction<unknown, unknown, unknown>;
}

const LoginForm = ({ LogIn }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPass, setIsShowPass] = useState(false);

  const logIn = (mail: string, pass: string) => {
    if (mail && pass) {
      LogIn(`email=${mail}&password=${pass}`);
    }
  };

  return (
    <form
      className="main__login__form"
      onSubmit={(e) => {
        e.preventDefault();
        logIn(email, password);
      }}
    >
      <div className="form__input__wrapper">
        <input
          className="form__mail form__input"
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setEmail(target.value.trim());
            spellChecker(target as Input);
          }}
        />
      </div>
      <div className="form__input__wrapper">
        <input
          className="form__password form__input"
          type={isShowPass ? "text" : "password"}
          placeholder="password"
          required
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setPassword(target.value.trim());
            spellChecker(target as Input);
          }}
        />
      </div>
      <label className="form__show">
        <input
          type="checkbox"
          onChange={() => {
            setIsShowPass((prevState) => {
              return !prevState;
            });
          }}
        />
        show password
      </label>
      <button className="form__submit" type="submit">
        login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  LogIn: PropTypes.func.isRequired,
};

export default LoginForm;
