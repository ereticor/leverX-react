import { createAction as createApiAction } from "redux-api-middleware";
import { createAction } from "redux-actions";

import { server } from "../../constants/server";

import ActionTypes from "./actionTypes";

export const LogIn = (query: string) => {
  return createApiAction({
    endpoint: `${server}/sign?${query}`,
    method: "GET",
    types: [
      ActionTypes.POST_USER_DATA_REQUEST,
      ActionTypes.POST_USER_DATA_SUCCESS,
      ActionTypes.POST_USER_DATA_FAILURE,
    ],
  });
};

export const setUser = createAction(ActionTypes.SET_USER);

export const LogOut = createAction(ActionTypes.LOG_OUT);
