import ArticlePage from "../pages/ArticlePage";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/loginPage";
import PostPage from "../pages/PostPage/PostPage";
import Header from "../components/Header";
// const Home = React.lazy(() => import('../pages/Home'));

interface State {
  isLogged: boolean;
}

export default class Router extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLogged: false,
    }

    this.logger = this.logger.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
  }

  logger(state: boolean) {
    this.setState({ isLogged: state })
  }

  checkLogin() {
    return this.state.isLogged
  }

  componentDidMount() {
    this.setState({ isLogged: !!localStorage.getItem('logged') })
  }
  
  render() {
    const {isLogged} = this.state;
    return (
      <BrowserRouter>
      <Header isLogged={isLogged} logger={this.logger}/>
      <Switch>
        <Route path="/login">
          {!isLogged && <LoginPage logger={this.logger}/> || <Home/>}
        </Route>
        <Route path="/post">
          {isLogged && <PostPage/> || <Home/>}
        </Route>
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