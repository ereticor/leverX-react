import React from "react";
import { Link } from "react-router-dom";
import { Article as IArticle } from "../../interfaces/article";

interface Props {
  articleData: IArticle
}

export default class Article extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  render() {
    const {title, content: [{text: [articleText]}], picture, index} = this.props.articleData
    return (
      <li data-keywords="Angular, Frontend" className="articles__item">
        <Link to={`/article/${index}`}>
          <figure className="item__figure">
            <img src={picture} alt={title} />
            <figcaption className="item__cap">
              <h6 className="cap__head">{title}</h6>
              <p
                className="cap__text"
                title={articleText}
              >
                {articleText}
              </p>
            </figcaption>
          </figure>
        </Link>
      </li>
    );
  }
}