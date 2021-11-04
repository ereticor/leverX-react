import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Article, ArticlePayload } from "../../interfaces/article";
import MultiTags from "../multiTags";
import { fetchWrapper } from "../../services/fetchWrapper";

import "./articleFull.scss";
import ArticleContent from "./ArticleContent";
import dateToHuman from "../../helpers/dateToHuman";

const ArticleFull = () => {
  const [article, setArticle] = useState<Article | null>(null);

  const history = useHistory();

  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    fetchWrapper(`getArticles?index=${index}`, (payload: ArticlePayload) =>
      setArticle(payload.articles[0])
    );
  }, []);

  if (!article) {
    return <p>Loading</p>;
  }

  const { title, content, author, date, keywords, picture } = article;

  return (
    <article className="articles__item">
      <figure className="item__figure">
        <img src={picture} />
        <figcaption className="item__cap">
          <h6 className="cap__head">{title}</h6>
          <div className="cap__content">
            {content.map((block, index) => (
              <ArticleContent
                head={block.head}
                text={block.text}
                key={`content ${index}`}
              />
            ))}
          </div>
          <div className="cap__credits">
            <p className="credits__author">{author}</p>
            <time className="credits__date">{dateToHuman(date)}</time>
          </div>
        </figcaption>
        <div className="item__tags">
          <MultiTags
            tags={keywords}
            clickHandler={(text) => {
              history.push(`/search/${text}`);
            }}
          />
        </div>
      </figure>
    </article>
  );
};

export default ArticleFull;
