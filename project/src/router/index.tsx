import ArticlePage from "../pages/ArticlePage";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
// const Home = React.lazy(() => import('../pages/Home'));

export default class Router extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/search/:tag">
          <SearchPage/>
        </Route>
        <Route path="/article/:index">
          <ArticlePage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}