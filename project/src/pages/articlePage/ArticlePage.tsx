import React from "react";
import { Link } from "react-router-dom";

import WithFooter from "../../hocs/WithFooter/WithFooter";

import ArticleFull from "../../components/ArticleFull";

import "./articlePage.scss";

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
    </>
  );
};

export default WithFooter(ArticlePage);
