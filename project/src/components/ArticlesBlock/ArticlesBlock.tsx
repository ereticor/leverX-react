import { Article as IArticle, ArticlePayload } from "../../interfaces/article";
import React from "react";
import {
  fetchWrapper,
  fetchWrapperThrottle,
} from "../../services/fetchWrapper";
import LoadBtn from "../../components/LoadBtn";
import MultiTags from "../../components/multiTags/MultiTags";
import Article from "../../components/Article";

interface State {
  searchValue: string;
  checkedTags: string[];
  page: number;
  maxPage: number;
  error: Error | null;
  tags: string[];
  isLoadingTags: boolean;
  isLoadingArticles: boolean;
  articlesData: IArticle[];
}

interface Props {
  className?: string;
  title: string;
  singleTag?: string;
}

export default class ArticlesBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchValue: "",
      checkedTags: [],
      page: 0,
      maxPage: 0,
      error: null,
      isLoadingTags: true,
      isLoadingArticles: false,
      tags: [],
      articlesData: [],
    };

    this.changeCheckedTags = this.changeCheckedTags.bind(this);
    this.getMoreArticles = this.getMoreArticles.bind(this);

    
  }

  getArticles(isLoadMore = false) {
    console.log('getArticles')
    const { isLoadingArticles } = this.state;
    if (!isLoadingArticles) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isLoadingArticles: true,
          page: isLoadMore ? prevState.page : 0,
        }
      }, () => {
        const { page, checkedTags, searchValue } = this.state;
        const tags = this.props.singleTag || checkedTags.join("+").replace(/\s/g, "_");
        const search = searchValue.trim();
        console.log('fetchWrapper')
        fetchWrapperThrottle(
          `getArticles?page=${page}&tags=${tags}&title=${search}`,
          (articlesPayload: ArticlePayload) => {
            this.setState((prevState) => ({
              ...prevState,
              isLoadingArticles: false,
              articlesData: isLoadMore 
                ? [...prevState.articlesData, ...articlesPayload.articles]
                : articlesPayload.articles,
              maxPage: articlesPayload.meta.maxPage,
            }));
          }
        );
      });
    }
  }

  getMoreArticles() {
    console.log('getMoreArticles')
    this.setState((prevState) => {
      return {
        ...prevState,
        page: prevState.page + 1
      }
    }, () => {
      this.getArticles(true)
    });
  }

  componentDidMount() {
    console.log('DidMount')
    if (!this.props.singleTag) {
      fetchWrapper(`getTags`, ({ tags }: { tags: string[] }) => {
        this.setState({
          isLoadingTags: false,
          tags: tags,
        });
      });
    }
    this.getArticles();
  }

  changeCheckedTags(tag: string) {
    console.log('changeCheckedTags')
    const { checkedTags } = this.state;

    if (checkedTags.includes(tag)) {
      this.setState(
        { checkedTags: [...checkedTags.filter((el) => el !== tag)] },
        this.getArticles
      );
    } else {
      this.setState({ checkedTags: [...checkedTags, tag] }, this.getArticles);
    }
  }

  componentDidUpdate() {
    console.log('DidUpdate')
  }

  render() {
    console.log('render'.toUpperCase())
    const { error, isLoadingTags, tags, checkedTags, articlesData, page, maxPage } =
      this.state;
    return (
      <div
        className={`main__articles__wrapper wrapper ${this.props.className}`}
      >
        <section className="main__articles">
          <h3 className="main__articles__head">
            {this.props.title}
          </h3>
          <div className="main__articles__search">
            <input
              type="search"
              className="search__input"
              placeholder="Search for article"
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                this.setState({ searchValue: target.value }, this.getArticles);
              }}
            />
          </div>
          <div className="main__articles__checkbar">
            {!!tags.length && 
              (<MultiTags
                error={error}
                isLoading={isLoadingTags}
                tags={tags}
                checkedTags={checkedTags}
                clickHandler={this.changeCheckedTags}
              />)
            }
          </div>
          <ul className="articles__list">
            {articlesData.map((article, index) => (
              <Article key={`article ${index}`} articleData={article} />
            ))}
          </ul>
          {page + 1 < maxPage && <LoadBtn clickHandler={ this.getMoreArticles} />}
        </section>
      </div>
    );
  }
}
