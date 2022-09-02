import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.url} path={route.url} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
