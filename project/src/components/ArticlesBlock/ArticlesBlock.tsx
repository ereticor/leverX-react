import React, { useEffect, useState } from "react";

import { Article as IArticle, ArticlePayload } from "../../interfaces/article";
import { ActionProps, SelectorProps } from "../../interfaces/tags";
import PropTypes from "prop-types";

import WithError from "../../hocs/WithError/WithError";

import { fetchWrapperThrottle } from "../../services/fetchWrapper";

import LoadBtn from "../LoadBtn";
import MultiTags from "../multiTags";
import Article from "../Article";

interface Props extends ActionProps, SelectorProps {
  className?: string;
  title: string;
  singleTag?: string;
}

const ArticlesBlock = ({
  className,
  title,
  singleTag,
  tags,
  getTags,
  isLoadingTags,
}: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [checkedTags, setCheckedTags] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [error, setError] = useState<number | null>(null);
  const [isLoadingArticles, setIsLoadingArticles] = useState(false);
  const [articlesData, setArticleData] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticles();
  }, [page, checkedTags, searchValue]);

  const getArticles = () => {
    const tags = singleTag || checkedTags.join("+").replace(/\s/g, "_");
    const search = searchValue.trim();
    fetchWrapperThrottle(
      `getArticles?page=${page}&tags=${tags}&title=${search}`,
      (articlesPayload: ArticlePayload) => {
        setIsLoadingArticles(false);
        setArticleData((prevData) => {
          return page > 0
            ? [...prevData, ...articlesPayload.articles]
            : articlesPayload.articles;
        });
        setMaxPage(articlesPayload.meta.maxPage);
      }
    );
  };

  useEffect(() => {
    if (!singleTag) {
      if (!tags.length) {
        getTags();
      }
      getArticles();
    }
  }, []);

  const changeCheckedTags = (tag: string) => {
    setPage(0);
    setCheckedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return [...checkedTags.filter((el) => el !== tag)];
      }
      return [...checkedTags, tag];
    });
  };

  return (
    <div className={`main__articles__wrapper wrapper ${className}`}>
      <section className="main__articles">
        <h3 className="main__articles__head">{title}</h3>
        <div className="main__articles__search">
          <input
            type="search"
            className="search__input"
            placeholder="Search for article"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setSearchValue(target.value);
            }}
          />
        </div>
        <div className="main__articles__checkbar">
          {!!tags.length && !singleTag && (
            <MultiTags
              error={error}
              isLoading={isLoadingTags}
              tags={tags}
              checkedTags={checkedTags}
              clickHandler={changeCheckedTags}
            />
          )}
        </div>
        <ul className="articles__list">
          {articlesData.length === 0 ? (
            <div className="loading">No such articles</div>
          ) : (
            articlesData.map((article, index) => (
              <Article key={`article ${index}`} articleData={article} />
            ))
          )}
        </ul>
        {page + 1 < maxPage && (
          <LoadBtn clickHandler={() => setPage((prevPage) => prevPage + 1)} />
        )}
      </section>
    </div>
  );
};

ArticlesBlock.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  singleTag: PropTypes.string,
};

export default WithError(ArticlesBlock);
