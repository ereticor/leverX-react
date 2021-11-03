import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ArticlesBlock from "../../components/ArticlesBlock/ArticlesBlock";
import { RouteComponentProps } from 'react-router-dom';

export default class SearchPage extends React.Component<RouteComponentProps<{tag: string}>> {
  constructor(props: RouteComponentProps<{tag: string}>) {
    super(props);
  }
  render() {
    const tag = this.props.match.params.tag
    return (
      <div>
        <Header />
        <main className="main">
          <ArticlesBlock title={`Searching by tag : ${tag}`} className="main__search__wrapper" singleTag={tag}/>
        </main>
        <Footer />
      </div>
    );
  }
}