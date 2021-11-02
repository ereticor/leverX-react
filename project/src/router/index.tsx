import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
// const Home = React.lazy(() => import('../pages/Home'));

export default class Router extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        {/* <Route path="/article">
          <Article/>
        </Route> */}
      </Switch>
    </BrowserRouter>
    )
  }
}