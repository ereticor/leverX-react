import { all, takeEvery } from "redux-saga/effects";

import { ActionTypes } from "../domains/auth";

export function* LogInWorker({ payload }: { type: string; payload: any }) {
  localStorage.setItem("logged", JSON.stringify(payload));
}

export function* LogInWatcher() {
  yield takeEvery(ActionTypes.POST_USER_DATA_SUCCESS, LogInWorker);
}

export function* LogOutWorker() {
  localStorage.removeItem("logged");
}

export function* LogOutWatcher() {
  yield takeEvery(ActionTypes.LOG_OUT, LogOutWorker);
}

export default function* authSaga() {
  yield all([LogInWatcher(), LogOutWatcher()]);
}
