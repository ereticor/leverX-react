import React, { useState } from "react";

import { fetchWrapper } from "../../services/fetchWrapper";
import spellChecker from "../../helpers/spellChecker";

import "./loginForm.scss";
import { Input } from "../../interfaces/input";
import { User } from "../../interfaces/user";

interface Props {
  logger: (state: boolean) => void;
}

const LoginForm = ({ logger }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPass, setIsShowPass] = useState(false);

  const saveUser = (user: User, error?: unknown) => {
    if (error) {
      switch (error) {
        case 401:
          setTimeout(() => alert("wrong password"), 200);
          break;
        case 404:
          setTimeout(() => alert("no such user"), 200);
          break;
      }
      return;
    }

    localStorage.setItem("logged", JSON.stringify(user));
    logger(true);
  };

  const logIn = (mail: string, pass: string) => {
    if (mail && pass) {
      fetchWrapper(`sign?email=${mail}&password=${pass}`, saveUser);
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

export default LoginForm;
