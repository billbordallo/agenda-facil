import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import '../styles/nav.css';

const drawerWidth = 240;

const Nav = ({ setContentMargin }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
    setContentMargin(!open ? drawerWidth : 0);
  };

  return (
    <div className="nav-container">
      <IconButton onClick={toggleDrawer} className="menu-button">
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: 'drawer-paper' }}
      >
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon className="close-menu" />
          </IconButton>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" className="list-item-icon list-item-agendamentos">
              <ListItemText primary="Agendamentos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/servicos" className="list-item-icon list-item-servicos">
              <ListItemText primary="Serviços" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/busca-data" className="list-item-icon list-item-busca-data">
              <ListItemText primary="Busca por Data" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/novo-agendamento" className="list-item-icon list-item-novo-agendamento">
              <ListItemText primary="Novo Agendamento" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Nav;