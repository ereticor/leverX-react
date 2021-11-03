import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RouteComponentProps } from "react-router-dom";

import "./loginPage.scss";
import LoginForm from "../../components/LoginForm";

export default class LoginPage extends React.Component {
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
      <div>
        <Header />
        <main className="main">
          <div className="main__login__wrapper wrapper">
            <section className="main__login">
              <h3 className="main__login__head">Welcome to course</h3>
              <LoginForm/>
            </section>
          </div>
          ;
        </main>
        <Footer />
      </div>
    );
  }
}
