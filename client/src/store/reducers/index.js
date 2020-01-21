import { combineReducers } from "redux";
import common from "./common";
import about from "./about";
import skills from "./skills";
import experience from "./experience";
import education from "./education";
import portfolio from "./portfolio";
import project from "./project";
import auth from './auth';

export default combineReducers({
  common,
  about,
  skills,
  experience,
  education,
  portfolio,
  project,
  auth
});
