import * as selectors from "./selectors";
import reducer, { setVacation, decreaseDays, deleteVacation } from "./slice";

const ActionCreators = {
  decreaseDays,
  setVacation,
  deleteVacation,
};

export { ActionCreators, reducer, selectors };
