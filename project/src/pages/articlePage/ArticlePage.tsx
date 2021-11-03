import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, RouteComponentProps } from "react-router-dom";

import {
  Article,
  ArticlePayload,
} from "../../interfaces/article";
import MultiTags from "../../components/multiTags";
import { fetchWrapper } from "../../services/fetchWrapper";

import './articlePage.scss'
import ArticleContent from "./ArticleContent";
import dateToHuman from "../../helpers/dateToHuman";

export default class ArticlePage extends React.Component<
  RouteComponentProps<{ index: string }>, Article
> {
  constructor(props: RouteComponentProps<{ index: string }>) {
    super(props);

    this.state = {
      _id: "",
      index: 0,
      title: "",
      content: [],
      picture: "",
      author: "",
      date: 0,
      keywords: [],
    }

    this.stateWrapper = this.stateWrapper.bind(this)
  }

  componentDidMount() {
    fetchWrapper(`getArticles?index=${this.props.match.params.index}`, this.stateWrapper);
  }

  stateWrapper(payload: ArticlePayload) {
    console.log(payload, this)
    this.setState({...payload.articles[0]})
  }

  render() {
    const { title, content, author, date, keywords, picture } = this.state;
    return (
      <div>
        <Header />
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
              <article className="articles__item">
                <figure className="item__figure">
                  <img src={picture} />
                  <figcaption className="item__cap">
                    <h6 className="cap__head">{title}</h6>
                    <div className="cap__content">
                      {content.map( (block, index) => (<ArticleContent head={block.head} text={block.text} key={`content ${index}`}/>))}
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
                          this.props.history.push(`/search/${text}`);
                        }}
                      />
                  </div>
                </figure>
              </article>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
