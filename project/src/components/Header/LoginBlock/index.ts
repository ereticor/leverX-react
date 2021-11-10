import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../../domains/auth";

import LoginBlock from "./LoginBlock";

const selector = createStructuredSelector({
  userImage: selectors.getUserImage,
  isLogged: selectors.isLogged,
});

const mapDispatchToProps = {
  LogOut: ActionCreators.logOut,
};

export default connect(selector, mapDispatchToProps)(LoginBlock);
