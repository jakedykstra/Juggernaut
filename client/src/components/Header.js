import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, MenuIcon, Button } from '@material-ui/core'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>

          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              Juggernaut
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Link to="/">Sign Out</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);


// component sidebar