import { combineReducers } from "redux";
import general from "./general";
import portfolio from "./portfolio";
import auth from "./auth";
import skills from "./skills";
import contacts from "./contacts";
import experience from "./experience";
import summary from "./summary";

export default combineReducers({
  general,
  portfolio,
  auth,
  skills,
  contacts,
  experience,
  summary
});
