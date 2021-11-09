import React from "react";
import { Link } from "react-router-dom";

import { Article as IArticle } from "../../interfaces/article";

import "./article.scss";

const Article = ({ articleData }: { articleData: IArticle }) => {
  const {
    index,
    picture,
    title,
    content: [
      {
        text: [articleText],
      },
    ],
  } = articleData;

  return (
    <li data-keywords="Angular, Frontend" className="articles__item">
      <Link to={`/article/${index}`}>
        <figure className="item__figure">
          <img src={picture} alt={title} />
          <figcaption className="item__cap">
            <h6 className="cap__head">{title}</h6>
            <p className="cap__text" title={articleText}>
              {articleText}
            </p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default Article;
