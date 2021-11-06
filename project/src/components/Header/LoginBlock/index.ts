import LoginBlock from "./LoginBlock";
import { connect } from "react-redux";
import { ActionCreators, selectors } from "../../../domains/auth";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({
  userImage: selectors.getUserImage,
  isLogged: selectors.isLogged,
});

const mapDispatchToProps = {
  LogOut: ActionCreators.LogOut,
};

export default connect(selector, mapDispatchToProps)(LoginBlock);
