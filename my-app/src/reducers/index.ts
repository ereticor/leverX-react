import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
// import { History } from "history";

import { reducer as app } from "./vacations";
// import { reducer as auth } from "../domains/auth";

export default () => combineReducers({ app });
