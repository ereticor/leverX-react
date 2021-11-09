import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Router from "./Router";
import { selectors } from "../domains/auth";

const selector = createStructuredSelector({
  isLogged: selectors.isLogged,
});

export default connect(selector)(Router);
