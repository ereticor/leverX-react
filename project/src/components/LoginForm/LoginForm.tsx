import React from "react";

import { fetchWrapper } from "../../services/fetchWrapper";
import spellChecker from "../../helpers/spellChecker";

import './loginForm.scss'
import { Input } from "../../interfaces/input";
import { User } from "../../interfaces/user";

interface Props {
  logger: (state: boolean) => void,
}
interface State {
  email: string;
  password: string;
  isShowPass: boolean;
}

export default class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isShowPass: false 
    };

  }

  logIn = (mail: string, pass: string) => {
    if (mail && pass) {
      fetchWrapper(`sign?email=${mail}&password=${pass}`, this.saveUser);
    }
  }

  saveUser = (user: User, error?: unknown) => {
    console.log(this.props)
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
    this.props.logger(true)
  }

  render() {
    const { email, password, isShowPass } = this.state;
    return (
      <form className="main__login__form" onSubmit={(e) => {
        e.preventDefault();
        this.logIn(email, password)
      }}>
      <div className="form__input__wrapper">
        <input
          className="form__mail form__input"
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.setState({ email: target.value.trim() }, () => {
              spellChecker(target as Input)
            });
          }}
        />
      </div>
      <div className="form__input__wrapper">
        <input
          className="form__password form__input"
          type={isShowPass ? 'text' : 'password'}
          placeholder="password"
          required
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.setState({ password: target.value.trim() }, () => {
              spellChecker(target as Input)
            });
          }}
        />
      </div>
      <label className="form__show">
        <input type="checkbox" onChange={() => {
          this.setState((prevState) => {
            return {
              isShowPass: !prevState.isShowPass
            }
          })
        }}/>
        show password
      </label>
      <button className="form__submit" type="submit">
        login
      </button>
    </form>
    );
  }
}
