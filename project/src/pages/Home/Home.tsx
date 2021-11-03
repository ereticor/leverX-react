import Slider from "../../components/Slider";
import React from "react";
import Footer from "../../components/Footer";
import ArticlesBlock from "../../components/ArticlesBlock";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <div className="main__intro__wrapper wrapper">
            <section className="main__intro">
              <Slider/>
            </section>
          </div>
          <ArticlesBlock title='Interesting articles by LeverX Group'/>
        </main>
        <Footer />
      </>
    );
  }
}
