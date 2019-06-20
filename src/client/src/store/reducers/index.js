import { combineReducers } from "redux";
import general from "./general";
import portfolio from "./portfolio";

export default combineReducers({ general, portfolio });
