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
              <div className="main__intro__slider">
                <ul className="slider__list">
                  <li className="slider__item">
                    <div className="slider__item__info">
                      <h4 className="slider__item__head">Free courses from</h4>
                      <h2 className="slider__item__head">leverx group</h2>
                      <p className="slider__item__text">
                        {`The profession of a programmer is one of the most 
                  demanded in the IT field today. Programming training`}
                        <br />
                        {`at LeverX Group is an excellent opportunity to gain`}
                        <br />
                        {`practical knowledge in the most relevant areas in this`}
                        <br />
                        {`area and build a successful  career in our company.`}
                      </p>
                      <button className="slider__item__btn btn">
                        start now
                      </button>
                    </div>
                    <img
                      className="slider__item__img"
                      src="../assets/slider/1.png"
                    />
                  </li>
                  <li className="slider__item">
                    <div className="slider__item__info">
                      <h4 className="slider__item__head">Free courses from</h4>
                      <h2 className="slider__item__head">leverx group</h2>
                      <p className="slider__item__text">
                        {`The profession of a programmer is one of the most 
                  demanded in the IT field today. Programming training`}
                        <br />
                        {`at LeverX Group is an excellent opportunity to gain`}
                        <br />
                        {`practical knowledge in the most relevant areas in this`}
                        <br />
                        {`area and build a successful  career in our company.`}
                      </p>
                      <button className="slider__item__btn btn">
                        start now
                      </button>
                    </div>
                    <img
                      className="slider__item__img"
                      src="../assets/slider/2.png"
                    />
                  </li>
                </ul>
              </div>
              <button className="slider__left slider__btn">&lt;</button>
              <button className="slider__right slider__btn">&gt;</button>
              <div className="slider__pagination">
                <label className="pagination__label">
                  <input type="radio" name="sliderPagination" checked />
                  <span></span>
                </label>
                <label className="pagination__label">
                  <input type="radio" name="sliderPagination" />
                  <span></span>
                </label>
              </div>
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
