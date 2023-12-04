import { combineReducers } from "redux";

import { customerReducer } from "./customerReducer";
import { postReducer } from "./postReducer";
import accountReducer from "./accountSlice";

export const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer

})