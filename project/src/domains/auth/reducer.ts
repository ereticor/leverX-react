import { AnyAction } from "redux";

import User from "../../interfaces/user";

import ActionTypes from "./actionTypes";

export interface AuthState {
  isLoadingUser: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoadingUser: false,
  user: null,
};

export default function (state = initialState, { payload, type }: AnyAction) {
  switch (type) {
    case ActionTypes.POST_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoadingUser: true,
      };
    }
    case ActionTypes.POST_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: payload,
        isLoadingUser: false,
      };
    }
    case ActionTypes.POST_USER_DATA_FAILURE: {
      return {
        ...state,
        isLoadingUser: false,
      };
    }
    case ActionTypes.SET_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case ActionTypes.LOG_OUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
