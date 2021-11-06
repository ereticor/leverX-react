import { put } from "@redux-saga/core/effects";
import { setUser } from "../domains/auth/actions";

export function* initialize() {
  const user = localStorage.getItem("logged");
  if (user) {
    yield put(setUser(JSON.parse(user)));
  }
}
