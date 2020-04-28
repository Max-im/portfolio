import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Aside from './Aside/Aside';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Project from './Pages/Project';
import Logout from './Common/Logout';
import NotFoundGenerate from './Common/NotFoundGenerate';

// admin
import AdminRoute from './hoc/AdminRoute';
import EditProject from './Admin/EditProject';

import { scrollPage } from '../store/actions/common';

import '../sass/reset.scss';
import '../sass/app.scss';
import '../sass/animation.scss';

class App extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    const scroll = document.documentElement.scrollTop;
    this.props.scrollPage(scroll);
  };
  render() {
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
              <Route exact path="/portfolio/project/:id" component={Project} />
              <Route path="/logout" component={Logout} />
              <Route path="/admin/logout" component={Logout} />

              {/* <AdminRoute path="/portfolio/update-project/:id" component={UpdateProject} /> */}
              {/* <AdminRoute exact path="/admin" component={Admin} /> */}
              {/* <AdminRoute path="/admin/update-skill/:id" component={UpdateSkill} /> */}
              {/* <AdminRoute path="/admin/update-edu/:id" component={UpdateEdu} /> */}
              {/* <AdminRoute path="/admin/update-exp/:id" component={UpdateExp} /> */}

              <AdminRoute path="/admin/edit-project/:id" component={EditProject} />

              <NotFoundGenerate path="*" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  common: state.common,
});

export default connect(mapStateToProps, { scrollPage })(App);
