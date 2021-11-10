import * as selectors from "./selectors";
import reducer, { getTags, tagsReqTypes } from "./slice";

const ActionCreators = {
  getTags,
};

export { tagsReqTypes as ActionTypes, ActionCreators, reducer, selectors };
