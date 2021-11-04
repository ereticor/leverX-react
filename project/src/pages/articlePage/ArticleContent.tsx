import React from "react";
import { ArticleContent as IArticleContent } from "../../interfaces/article";

export default class ArticleContent extends React.Component<IArticleContent> {
  constructor(props: IArticleContent) {
    super(props);
  }

  render() {
    const { head, text } = this.props;
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
  }
}
