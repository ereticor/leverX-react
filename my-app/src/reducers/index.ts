import { combineReducers } from "redux";

import { reducer as app } from "./vacations";

const rootReducer = () => combineReducers({ app });

export default rootReducer;
