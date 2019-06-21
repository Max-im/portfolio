import { combineReducers } from "redux";
import general from "./general";
import portfolio from "./portfolio";
import auth from "./auth";
import skills from "./skills";

export default combineReducers({ general, portfolio, auth, skills });
