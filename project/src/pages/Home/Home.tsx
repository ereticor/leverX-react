import Slider from "../../components/Slider";
import React from "react";
import Footer from "../../components/Footer";
import ArticlesBlock from "../../components/ArticlesBlock";

import "./home.scss";

const Home = () => {
  return (
    <>
      <main className="main">
        <div className="main__intro__wrapper wrapper">
          <section className="main__intro">
            <Slider />
          </section>
        </div>
        <ArticlesBlock title="Interesting articles by LeverX Group" />
      </main>
      <Footer />
    </>
  );
};

export default Home;
