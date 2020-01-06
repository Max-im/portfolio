import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../sass/reset.scss";
import "../sass/app.scss";
import "../sass/animation.scss";

import Aside from "./Aside/Aside";

import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import Logout from "./Common/Logout";
import NotFoundGenerate from "./Common/NotFoundGenerate";


export default function App() {
  return (
    <Router>
      <div className="app">
        <Aside />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/portfolio/:page" component={Projects} />
            <Route path="/portfolio/project/:id" component={Project} />
            <Route path="/logout" component={Logout} />
            <Route path="/admin/logout" component={Logout} />

            {/* <AdminRoute
              path="/portfolio/update-project/:id"
              component={UpdateProject}
            />
            <AdminRoute exact path="/admin" component={Admin} />
            <AdminRoute
              path="/admin/update-skill/:id"
              component={UpdateSkill}
            />
            <AdminRoute path="/admin/update-edu/:id" component={UpdateEdu} />
            <AdminRoute path="/admin/update-exp/:id" component={UpdateExp} /> */}

            <NotFoundGenerate path="*" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
