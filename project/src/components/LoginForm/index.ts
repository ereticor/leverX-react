import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { ActionCreators } from "../../domains/auth";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({});

const mapDispatchToProps = {
  LogIn: ActionCreators.LogIn,
};

export default connect(selector, mapDispatchToProps)(LoginForm);
