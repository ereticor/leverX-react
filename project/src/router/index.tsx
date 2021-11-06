import Router from "./Router";
import { connect } from "react-redux";
import { selectors } from "../domains/auth";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({
  isLogged: selectors.isLogged,
});

export default connect(selector)(Router);
