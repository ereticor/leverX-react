import { createSlice } from "@reduxjs/toolkit";
import { createAction as createApiAction } from "redux-api-middleware";

import { server } from "../../constants/server";

export const tagsReqTypes = {
  request: "GET_TAGS_REQUEST",
  success: "SET_TAGS_SUCCESS",
  failure: "GET_TAGS_FAILURE",
};

export const getTags = () => {
  return createApiAction({
    endpoint: `${server}/getTags`,
    method: "GET",
    types: [tagsReqTypes.request, tagsReqTypes.success, tagsReqTypes.failure],
  });
};

const TagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    isLoadingTags: false,
  },
  reducers: {},
  extraReducers: {
    [tagsReqTypes.request]: (state) => {
      state.isLoadingTags = true;
    },
    [tagsReqTypes.success]: (state, action) => {
      state.tags = action.payload.tags;
      state.isLoadingTags = false;
    },
    [tagsReqTypes.failure]: (state) => {
      state.isLoadingTags = false;
    },
  },
});

export default TagsSlice.reducer;
