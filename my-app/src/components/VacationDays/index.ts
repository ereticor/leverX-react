import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import VacationDays from "./VacationDays";

import { selectors } from "../../reducers/vacations";

const selector = createStructuredSelector({
  days: selectors.getDays,
});

export default connect(selector)(VacationDays);
