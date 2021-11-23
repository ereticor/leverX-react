import * as selectors from "./selectors";
import reducer, { getDays, tagsReqTypes } from "./slice";

const ActionCreators = {
  getDays,
};

export { tagsReqTypes as ActionTypes, ActionCreators, reducer, selectors };
