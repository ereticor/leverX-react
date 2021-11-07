import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
const Header = React.lazy(() => import("../components/Header"));
const Home = React.lazy(() => import("../pages/Home"));
const SearchPage = React.lazy(() => import("../pages/searchPage"));
const ArticlePage = React.lazy(() => import("../pages/articlePage"));
const LoginPage = React.lazy(() => import("../pages/loginPage"));
const PostPage = React.lazy(() => import("../pages/postPage"));

const Router = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Suspense fallback={<div className="loading">Loading</div>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            {isLogged ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/post">
            {isLogged ? <PostPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/search/:tag">
            <SearchPage />
          </Route>
          <Route path="/article/:index">
            <ArticlePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
