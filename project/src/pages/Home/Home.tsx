import Slider from "../../components/Slider";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ArticlesBlock from "../../components/ArticlesBlock/ArticlesBlock";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <div className="main__intro__wrapper wrapper">
            <section className="main__intro">
              <Slider/>
            </section>
          </div>
          <ArticlesBlock title='Interesting articles by LeverX Group'/>
        </main>
        <Footer />
      </div>
    );
  }
}
