import { combineReducers } from "redux";
import general from "./general";
import portfolio from "./portfolio";
import auth from "./auth";
import skills from "./skills";
import contacts from "./contacts";
import experience from "./experience";
import summary from "./summary";
import education from "./education";
import project from "./project";
import social from "./social";
import about from "./about";

export default combineReducers({
  general,
  social,
  portfolio,
  project,
  auth,
  skills,
  contacts,
  experience,
  summary,
  education,
  about
});
