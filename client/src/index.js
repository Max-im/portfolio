import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProjectItem from './pages/ProjectItem';

import {store} from './store/store';

import './sass/reset.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route exect path="/" element={<App />}>
        <Route index element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectItem />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


