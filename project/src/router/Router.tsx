import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Header = React.lazy(() => import("../components/Header"));
const Home = React.lazy(() => import("../pages/Home"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const ArticlePage = React.lazy(() => import("../pages/ArticlePage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const PostPage = React.lazy(() => import("../pages/PostPage"));

const Router = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logger = (state: boolean) => {
    setIsLogged(state);
  };

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("logged"));
  }, []);

  return (
    <Suspense fallback={<div className="loading">Loading</div>}>
      <BrowserRouter>
        <Header isLogged={isLogged} logger={logger} />
        <Switch>
          <Route path="/login">
            {(!isLogged && <LoginPage logger={logger} />) || <Home />}
          </Route>
          <Route path="/post">{(isLogged && <PostPage />) || <Home />}</Route>
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
