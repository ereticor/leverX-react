import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { reducer as app } from "../domains/app";
import { reducer as auth } from "../domains/auth";

export default (history: History<unknown>) =>
  combineReducers({ router: connectRouter(history), app, auth });
