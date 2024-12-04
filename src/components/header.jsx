import React from 'react';
import PropTypes from 'prop-types';
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
            <Link to="/" style={{ position: 'relative', top: '3px', margin: '0 auto' }} >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: '157px', height: '27.4px', marginRight: 'auto' }}
              />
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};
Header.propTypes = {
  setContentMargin: PropTypes.func.isRequired,
};

export default Header;