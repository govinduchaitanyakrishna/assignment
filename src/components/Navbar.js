
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" component={Link} to='/' variant="h6" sx={{ flexGrow: 1,textDecoration:'none' }}>
          EV Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/make-distribution">
          Make Distribution
        </Button>
        <Button color="inherit" component={Link} to="/model-year-growth">
          Model Year Growth
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
