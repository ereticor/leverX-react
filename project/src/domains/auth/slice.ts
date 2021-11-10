import { createSlice } from "@reduxjs/toolkit";
import { createAction as createApiAction } from "redux-api-middleware";

import { server } from "../../constants/server";

export const logInTypes = {
  request: "POST_USER_DATA_REQUEST",
  success: "POST_USER_DATA_SUCCESS",
  failure: "POST_USER_DATA_FAILURE",
};

export const logIn = (query: string) => {
  return createApiAction({
    endpoint: `${server}/sign?${query}`,
    method: "GET",
    types: [logInTypes.request, logInTypes.success, logInTypes.failure],
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoadingUser: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [logInTypes.request]: (state) => {
      state.isLoadingUser = true;
    },
    [logInTypes.success]: (state, action) => {
      state.user = action.payload;
      state.isLoadingUser = false;
    },
    [logInTypes.failure]: (state) => {
      state.isLoadingUser = false;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
