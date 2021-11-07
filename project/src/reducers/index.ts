import { CombinedState, combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { reducer as app } from "../domains/app";
import { reducer as auth } from "../domains/auth";
import { ReduxStore } from "../interfaces/store";

export default (
  history: History<unknown>
): Reducer<CombinedState<ReduxStore>> =>
  combineReducers({ router: connectRouter(history), app, auth });
