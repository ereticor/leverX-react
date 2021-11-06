import ActionTypes from "./actionTypes";
import { AnyAction } from "redux";
import User from "../../interfaces/user";
import actionTypes from "./actionTypes";

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
    case actionTypes.POST_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoadingUser: true,
      };
    }
    case actionTypes.POST_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: payload,
        isLoadingUser: false,
      };
    }
    case actionTypes.POST_USER_DATA_FAILURE: {
      return {
        ...state,
        isLoadingUser: false,
      };
    }
    case actionTypes.SET_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case actionTypes.LOG_OUT: {
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
