import React from "react";
import { ArticleContent as IArticleContent } from "../../interfaces/article";

const ArticleContent = ({ head, text }: IArticleContent) => {
  return (
    <>
      <h6 className="content__head">{head}</h6>
      {text.map((el, index) => (
        <p className="content__text" key={`${head} ${index}`}>
          {el}
        </p>
      ))}
    </>
  );
};

export default ArticleContent;
