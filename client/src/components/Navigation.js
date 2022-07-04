import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const pages = [
  { url: '/', text: 'Resume' },
  { url: '/projects', text: 'Portfolio' },
];

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <NavLink
          key={page.text}
          to={page.url}
          className={({ isActive }) => (isActive ? 'nav__active' : undefined)}
        >
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>{page.text}</Button>
        </NavLink>
      ))}
    </Box>
  );
}
