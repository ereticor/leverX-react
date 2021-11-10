import { all, takeEvery } from "redux-saga/effects";

import { ActionTypes } from "../domains/auth";

export function* LogInWorker({ payload }: { type: string; payload: any }) {
  localStorage.setItem("logged", JSON.stringify(payload));
}

export function* LogInWatcher() {
  yield takeEvery(ActionTypes.success, LogInWorker);
}

export function* LogOutWorker() {
  localStorage.removeItem("logged");
}

export function* LogOutWatcher() {
  yield takeEvery(ActionTypes.logOut, LogOutWorker);
}

export default function* authSaga() {
  yield all([LogInWatcher(), LogOutWatcher()]);
}
