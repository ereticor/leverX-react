import React from "react";
import { useParams } from "react-router-dom";

import ArticlesBlock from "../../components/ArticlesBlock";
import Footer from "../../components/Footer";

import "../Home/home.scss";
import "./searchPage.scss";

const SearchPage = () => {
  const { tag } = useParams<{ tag: string }>();
  return (
    <>
      <main className="main">
        <ArticlesBlock
          title={`Searching by tag : ${tag}`}
          className="main__search__wrapper"
          singleTag={tag}
        />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
