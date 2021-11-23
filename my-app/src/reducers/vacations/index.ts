import * as selectors from "./selectors";
import reducer, { setVacation, decreaseDays } from "./slice";

const ActionCreators = {
  decreaseDays,
  setVacation
};

export { ActionCreators, reducer, selectors };
