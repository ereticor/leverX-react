import { server } from "../../constants/server";
import { createAction as createApiAction } from "redux-api-middleware";
import ActionTypes from "./actionTypes";

export const getTagsRequest = () => {
  return createApiAction({
    endpoint: `${server}/getTags`,
    method: "GET",
    types: [
      ActionTypes.GET_TAGS_REQUEST,
      ActionTypes.SET_TAGS_SUCCESS,
      ActionTypes.SET_TAGS_FAILURE,
    ],
  });
};

export const getTags = () => getTagsRequest();
