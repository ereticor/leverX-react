import FormBlock from "./FormBlock";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../reducers/vacations";

const selector = createStructuredSelector({
  vacations: selectors.getVacations
});

const mapDispatchToProps = {
  decreaseDays: ActionCreators.decreaseDays,
  setVacation: ActionCreators.setVacation
};

export default connect(selector, mapDispatchToProps)(FormBlock);