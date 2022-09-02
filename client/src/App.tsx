import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
