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

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/project/:id" component={SingleProject} />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
