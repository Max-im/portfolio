import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </div>
  );
}
