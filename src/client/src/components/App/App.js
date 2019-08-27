import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./reset.scss";
import "./style.scss";
import "./animation.scss";

import Aside from "../Layout/Aside/Aside";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import SingleProject from "../Pages/SingleProject";
import Admin from "../Pages/Admin";
import AdminRoute from "../Common/AdminRoute";
import Logout from "../Common/Logout";
import NotFoundGenerate from "../Common/NotFoundGenerate";
import UpdateProject from "../Pages/UpdateProject";
import UpdateSkill from "../Pages/UpdateSkill";
import UpdateEdu from "../Pages/UpdateEdu";
import UpdateExp from "../Pages/UpdateExp";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Aside />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/:page" component={Portfolio} />
            <Route path="/portfolio/project/:id" component={SingleProject} />
            <Route path="/logout" component={Logout} />
            <Route path="/admin/logout" component={Logout} />

            <AdminRoute
              path="/portfolio/update-project/:id"
              component={UpdateProject}
            />
            <AdminRoute exact path="/admin" component={Admin} />
            <AdminRoute
              path="/admin/update-skill/:id"
              component={UpdateSkill}
            />
            <AdminRoute path="/admin/update-edu/:id" component={UpdateEdu} />
            <AdminRoute path="/admin/update-exp/:id" component={UpdateExp} />

            <NotFoundGenerate path="*" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
