import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./reset.scss";
import "./style.scss";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
import SingleProject from "../Pages/SingleProject";
import Admin from "../Pages/Admin";
import AdminRoute from "../Common/AdminRoute";
import UpdateProject from "../Pages/UpdateProject";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/project/:id" component={SingleProject} />
          <AdminRoute
            path="/portfolio/update-project/:id"
            component={UpdateProject}
          />

          <Switch>
            <AdminRoute path="/admin" component={Admin} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
