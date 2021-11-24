import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import VacationRequest from "./VacationRequest";

import { ActionCreators, selectors } from "../../../reducers/vacations";

const selector = createStructuredSelector({
  vacations: selectors.getVacations,
});

const mapDispatchToProps = {
  setVacation: ActionCreators.setVacation,
  deleteVacation: ActionCreators.deleteVacation,
};

export default connect(selector, mapDispatchToProps)(VacationRequest);
