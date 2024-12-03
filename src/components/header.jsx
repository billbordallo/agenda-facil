import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from '../assets/logo-horizontal.svg';
import Nav from './nav.jsx';
import '../styles/header.css';

const Header = ({ setContentMargin }) => {
  return (
    <>
    <Nav setContentMargin={setContentMargin} />
      <header className="header">
        <AppBar position="static" sx={{ backgroundColor: '#4C77DB', height: '70px', width: '100%' }}>
          <Toolbar>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ width: '157px', height: '27.4px', marginRight: 'auto' }}
            />
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

export default Header;