import { createSlice } from "@reduxjs/toolkit";
// import { createAction as createApiAction } from "redux-api-middleware";

// import { server } from "../../constants/server";

export const tagsReqTypes = {
  request: "GET_DAYS_REQUEST",
  success: "SET_DAYS_SUCCESS",
  failure: "GET_DAYS_FAILURE",
};

export const getDays = () => {
  // return createApiAction({
  //   endpoint: `${server}/getTags`,
  //   method: "GET",
  //   types: [tagsReqTypes.request, tagsReqTypes.success, tagsReqTypes.failure],
  // });
};

const TagsSlice = createSlice({
  name: "days",
  initialState: {
    days: 147,
    // isLoadingTags: false,
  },
  reducers: {},
  extraReducers: {
    // [tagsReqTypes.request]: (state) => {
    //   state.isLoadingTags = true;
    // },
    // [tagsReqTypes.success]: (state, action) => {
    //   state.tags = action.payload.tags;
    //   state.isLoadingTags = false;
    // },
    // [tagsReqTypes.failure]: (state) => {
    //   state.isLoadingTags = false;
    // },
  },
});

export default TagsSlice.reducer;
