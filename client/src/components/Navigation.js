import { Box, Button } from '@mui/material';
import React from 'react';

const pages = ['Resume', 'Portfolio'];


export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button key={page} onClick={() => {}} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  );
}
