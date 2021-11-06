import { createStore, applyMiddleware, compose } from "redux";
import { createMiddleware } from "redux-api-middleware";

import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import history from "./history";

const initialState = {};

const enhancers = [] as any;
const sagaMiddleware = createSagaMiddleware();
const apiMiddleware = createMiddleware();
const middleware = [routerMiddleware(history), apiMiddleware, sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
  }
}

if (process.env.NODE_ENV !== "production") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
