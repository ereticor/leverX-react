import { all } from "redux-saga/effects";

import authSaga from "./auth";
import { initialize } from "./initialize";

export default function* rootSaga() {
  yield all([initialize(), authSaga()]);
}
