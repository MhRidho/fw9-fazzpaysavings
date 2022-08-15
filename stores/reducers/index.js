import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth';
import profile from "./profiles";
import counter from "./counter";
import transfer from "./transfer";

const reducer = combineReducers({
  auth,
  profile,
  counter,
  transfer
});

export default reducer;

