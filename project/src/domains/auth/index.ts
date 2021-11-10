import * as selectors from "./selectors";
import reducer, { setUser, logOut, logIn, logInTypes } from "./slice";

const ActionCreators = {
  setUser,
  logOut,
  logIn,
};

const ActionTypes = {
  setUser,
  logOut,
  ...logInTypes,
};

export { ActionTypes, ActionCreators, reducer, selectors };
