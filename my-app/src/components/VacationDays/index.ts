import VacationDays from "./VacationDays";
import { connect } from "react-redux";
import { ActionCreators, selectors } from "../../reducers/vacations";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({
  days: selectors.getDays,
  // isLoadingTags: selectors.isLoadingTags,
});

// const mapDispatchToProps = {
//   getTags: ActionCreators.getTags,
// };

export default connect(selector)(VacationDays);
