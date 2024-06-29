import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { onVisualizePressed, onClearPathPressed } = this.props;
    const menuOpen = Boolean(anchorEl);

    return (
      <AppBar position="fixed" style={{ backgroundColor: '#061830' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box display="flex" alignItems="center">
              {/* <img src={logo} alt="Path Algorithm Visualizer" style={{ width: 40, marginRight: 16 }} /> */}
              <Typography variant="h6" noWrap component="div">
                Path Algorithm Visualizer
              </Typography>
            </Box>
            <Box flexGrow={1} />
            <Button color="inherit">Home</Button>
            {/* <IconButton color="inherit" onClick={this.handleMenuOpen}>
              <MenuIcon />
            </IconButton> */}
            {/* <Menu anchorEl={anchorEl} open={menuOpen} onClose={this.handleMenuClose}>
              <MenuItem onClick={this.handleMenuClose}>Dijkstra's Algorithm</MenuItem>
              <MenuItem onClick={this.handleMenuClose}>Another Algorithm</MenuItem>
            </Menu> */}
            <Box ml={2}>
              <Button variant="outlined" color="inherit" onClick={onClearPathPressed} style={{ marginRight: 16 }}>
                Clear Path
              </Button>
              <Button variant="contained" color="primary" onClick={onVisualizePressed}>
                Visualize Dijkstra's Algorithm
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
