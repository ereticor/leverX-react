import { ReduxStore } from "../../reducers";
import { createSelector } from "reselect";

export const getAuth = (state: ReduxStore) => {
  return state.auth;
};

export const isLoadingUser = createSelector(
  getAuth,
  (auth) => auth.isLoadingUser
);

export const getUser = createSelector(getAuth, (auth) => auth.user);

export const getUserImage = createSelector(getUser, (user) => user?.picture);

export const isLogged = createSelector(getAuth, (auth) => !!auth.user);
