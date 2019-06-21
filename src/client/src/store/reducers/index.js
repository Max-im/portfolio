import { combineReducers } from "redux";
import general from "./general";
import portfolio from "./portfolio";
import auth from "./auth";

export default combineReducers({ general, portfolio, auth });
