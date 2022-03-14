import { combineReducers } from "redux";

// all reducers
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
