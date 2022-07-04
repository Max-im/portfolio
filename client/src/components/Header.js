import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TerminalIcon from '@mui/icons-material/Terminal';
import Navigation from './Navigation';
import AuthBtn from './AuthBtn';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <TerminalIcon sx={{ mr: 1 }} />
          <Navigation/>
          <AuthBtn/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
