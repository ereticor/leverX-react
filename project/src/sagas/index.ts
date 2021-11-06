import { all } from "redux-saga/effects";
import { initialize } from "./initialize";

export default function* rootSaga() {
  yield all([initialize()]);
}
