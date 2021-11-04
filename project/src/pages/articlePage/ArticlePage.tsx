import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import "./articlePage.scss";
import ArticleFull from "../../components/ArticleFull";

const ArticlePage = () => {
  return (
    <>
      <main className="main">
        <div className="main__paper__wrapper wrapper">
          <section className="main__paper">
            <div className="paper__pagination">
              <div className="paper__pagination">
                <Link to="/" className="pagination__link">
                  Home page
                </Link>
                <span>
                  <span>&gt;</span>Article
                </span>
              </div>
            </div>
            <ArticleFull />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
