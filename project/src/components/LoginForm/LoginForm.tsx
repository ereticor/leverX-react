import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { fetchWrapper } from "../../services/fetchWrapper";
import spellChecker from "helpers/spellChecker";

import './loginForm.scss'

export default class LoginForm extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   _id: "",
  //   //   index: 0,
  //   //   title: "",
  //   //   content: [],
  //   //   picture: "",
  //   //   author: "",
  //   //   date: 0,
  //   //   keywords: [],
  //   // }

  //   // this.stateWrapper = this.stateWrapper.bind(this)
  // }

  componentDidMount() {
    // fetchWrapper(`getArticles?index=${this.props.match.params.index}`, this.stateWrapper);
  }

  render() {
    // const { title, content, author, date, keywords, picture } = this.state;
    return (
      <form className="main__login__form">
      <div className="form__input__wrapper">
        <input
          className="form__mail form__input"
          type="email"
          placeholder="E-mail"
          required
          // onInput={(e) => {
          //   spellChecker(e.target)
          // }}
        />
      </div>
      <div className="form__input__wrapper">
        <input
          className="form__password form__input"
          type="password"
          placeholder="password"
          required
          // onInput={(e) => {
          //   spellChecker(e.target)
          // }}
        />
      </div>
      <label className="form__show">
        <input type="checkbox" />
        show password
      </label>
      <button className="form__submit" type="submit">
        login
      </button>
    </form>
    );
  }
}
