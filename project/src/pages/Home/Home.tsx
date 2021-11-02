import Slider from "../../components/Slider";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
          <div className="main__articles__wrapper wrapper">
            <section className="main__articles">
              <h3 className="main__articles__head">
                Interesting articles by LeverX Group
              </h3>
              <div className="main__articles__search">
                <input
                  type="search"
                  className="search__input"
                  placeholder="Search for article"
                />
              </div>
              <div className="main__articles__checkbar"></div>
              <ul className="articles__list"></ul>
              <button className="articles__load btn">Load more</button>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
