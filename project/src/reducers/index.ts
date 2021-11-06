import { CombinedState, combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { reducer as app } from "../domains/app";
import { AppState } from "../domains/app/reducer";
import { reducer as auth } from "../domains/auth";
import { AuthState } from "../domains/auth/reducer";

export interface ReduxStore {
  router: RouterState<unknown>;
  app: AppState;
  auth: AuthState;
}

export default (
  history: History<unknown>
): Reducer<CombinedState<ReduxStore>> =>
  combineReducers({ router: connectRouter(history), app, auth });
