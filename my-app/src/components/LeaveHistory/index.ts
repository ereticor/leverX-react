import LeaveHistory from "./LeaveHistory";
import { connect } from "react-redux";
import { ActionCreators, selectors } from "../../reducers/vacations";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({
  vacations: selectors.getVacations,
  // isLoadingTags: selectors.isLoadingTags,
});

// const mapDispatchToProps = {
//   getTags: ActionCreators.getTags,
// };

export default connect(selector)(LeaveHistory);