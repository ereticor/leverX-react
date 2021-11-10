import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators } from "../../domains/auth";

import LoginForm from "./LoginForm";

const selector = createStructuredSelector({});

const mapDispatchToProps = {
  LogIn: ActionCreators.logIn,
};

export default connect(selector, mapDispatchToProps)(LoginForm);
