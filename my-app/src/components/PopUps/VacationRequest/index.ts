import VacationRequest from "./VacationRequest"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../../reducers/vacations";

const selector = createStructuredSelector({
  vacations: selectors.getVacations
});

const mapDispatchToProps = {
  // changeVacation: ActionCreators.setVacation,
  setVacation: ActionCreators.setVacation,
  deleteVacation: ActionCreators.deleteVacation,
};

export default connect(selector, mapDispatchToProps)(VacationRequest);

// export default VacationRequest;