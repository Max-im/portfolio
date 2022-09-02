import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Resume from './pages/Resume';

export const routes = [
  { url: '/', text: 'Resume', isMenu: true, element: Resume, private: false },
  { url: '/projects', text: 'Projects', isMenu: true, element: Portfolio, private: false },
  { url: '/project/:id', text: 'Project', isMenu: false, element: Project, private: false },
];
