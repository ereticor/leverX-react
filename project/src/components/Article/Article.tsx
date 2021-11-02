import React from "react";
import { Link } from "react-router-dom";
import { Article as IArticle } from "../../interfaces/article";

interface Props {
  articleData: IArticle
}

export default class Article extends React.Component<Props> {
  // private slider: React.RefObject<HTMLUListElement>
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

{/* <article data-keywords="Angular, Frontend" className="articles__item">
  <figure className="item__figure">
    <img src="" />
    <figcaption className="item__cap">
      <h6 className="cap__head">High quality</h6>
      <div className="cap__content">
        <h6 className="content__head">ad sit in nostrud occaecat</h6>
        <p className="content__text">
          Id commodo amet et ut. Non deserunt nostrud irure eu duis anim ad amet
          duis excepteur tempor. Fugiat veniam pariatur officia aute in labore
          sunt laboris amet. Anim quis mollit qui amet ad dolore velit anim
          cupidatat non consectetur aliqua quis enim. Aute dolore dolore anim
          consectetur ut elit aliquip ut labore aliqua officia.
          <br />
        </p>
        <p className="content__text">
          Qui labore in ipsum sunt consequat laboris. Irure tempor enim occaecat
          fugiat nostrud. Minim est aliqua mollit pariatur ut deserunt laborum
          cupidatat. Ut adipisicing aute nostrud eiusmod voluptate ad consequat
          nostrud minim adipisicing. Reprehenderit exercitation irure labore id
          in eu qui enim sint officia nisi culpa fugiat laborum.
          <br />
        </p>
        <h6 className="content__head">laboris officia aute veniam fugiat</h6>
        <p className="content__text">
          Ad nulla ipsum do veniam est. Est enim veniam pariatur voluptate
          cupidatat sit voluptate Lorem ex in cillum sit. Consequat voluptate
          nostrud enim velit est proident est enim minim aute enim cupidatat.
          Nisi deserunt ullamco eu cillum et ullamco voluptate.
          <br />
        </p>
        <p className="content__text">
          Eiusmod laboris velit velit non tempor ipsum deserunt tempor in
          laboris officia. Ipsum dolor aute cillum in. Incididunt commodo aliqua
          mollit dolore sint ullamco amet non irure quis pariatur magna nisi
          consectetur. Aute sint in sunt ea pariatur reprehenderit fugiat.
          Labore est commodo ipsum minim tempor. Ullamco incididunt sit aliquip
          in minim ullamco amet magna elit minim non exercitation. Fugiat non
          labore non enim ipsum proident adipisicing.
          <br />
        </p>
      </div>
      <div className="cap__credits">
        <p className="credits__author">culpa eiusmod</p>
        <time className="credits__date">August 28, 1986</time>
      </div>
    </figcaption>
    <div className="item__tags">
      <label className="checkbar__label">
        <input className="checkbar__input" type="checkbox" />
        Angular
      </label>
      <label className="checkbar__label">
        <input className="checkbar__input" type="checkbox" />
        Frontend
      </label>
    </div>
  </figure>
</article>; */}
