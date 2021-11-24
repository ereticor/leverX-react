import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LeaveHistory from "./LeaveHistory";

import { selectors } from "../../reducers/vacations";

const selector = createStructuredSelector({
  vacations: selectors.getVacations,
});

export default connect(selector)(LeaveHistory);
