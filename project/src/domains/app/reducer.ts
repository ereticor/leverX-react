import ActionTypes from "./actionTypes";
import { AnyAction } from "redux";

export interface AppState {
  tags: string[];
  isLoadingTags: boolean;
}

const initialState: AppState = {
  tags: [],
  isLoadingTags: false,
};

export default function (state = initialState, { payload, type }: AnyAction) {
  switch (type) {
    case ActionTypes.GET_TAGS_REQUEST: {
      return {
        ...state,
        isLoadingTags: true,
      };
    }
    case ActionTypes.SET_TAGS_SUCCESS: {
      return {
        ...state,
        tags: payload.tags,
        isLoadingTags: false,
      };
    }
    case ActionTypes.SET_TAGS_FAILURE: {
      return {
        ...state,
        isLoadingTags: false,
      };
    }
    default: {
      return state;
    }
  }
}
