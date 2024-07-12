// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <img src="/companyLogo.svg" alt="HighRadius Logo" style={{ height: '40px' }} />
        ABC Products
      </Typography>
      <img src="/logo.svg" alt="HighRadius Logo" style={{ height: '40px' }} />
    </Toolbar>
  </AppBar>
);

export default Header;
