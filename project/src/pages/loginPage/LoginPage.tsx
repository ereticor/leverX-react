import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RouteComponentProps } from "react-router-dom";

import { fetchWrapper } from "../../services/fetchWrapper";

import "./loginPage.scss";

export default class LoginPage extends React.Component {
  constructor(props: RouteComponentProps) {
    super(props);

    // this.state = {
    //   _id: "",
    //   index: 0,
    //   title: "",
    //   content: [],
    //   picture: "",
    //   author: "",
    //   date: 0,
    //   keywords: [],
    // }

    // this.stateWrapper = this.stateWrapper.bind(this)
  }

  componentDidMount() {
    // fetchWrapper(`getArticles?index=${this.props.match.params.index}`, this.stateWrapper);
  }

  render() {
    // const { title, content, author, date, keywords, picture } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <div className="main__login__wrapper wrapper">
            <section className="main__login">
              <h3 className="main__login__head">Welcome to course</h3>
              <form className="main__login__form">
                <div className="form__input__wrapper">
                  <input
                    className="form__mail form__input"
                    type="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="form__input__wrapper">
                  <input
                    className="form__password form__input"
                    type="password"
                    placeholder="password"
                    required
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
            </section>
          </div>
          ;
        </main>
        <Footer />
      </div>
    );
  }
}
