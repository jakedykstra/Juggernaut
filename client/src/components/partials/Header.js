import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    console.log("signout clicked");
    // still need to figure out how to remove tokens
    this.props.signout();
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    console.log(this.props);
    console.log("logging auth");
    if (this.props.auth.isLoggedIn === false) {
      return (
        <div className="header">
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" />
              <Typography variant="headline">Juggernaut</Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div className="header">
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>History</MenuItem>
                  <MenuItem onClick={this.handleClose}>Calculator</MenuItem>
                  <MenuItem onClick={this.handleClose}>Videos</MenuItem>
                  <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                </Menu>
              </IconButton>
              <Typography variant="headline">Juggernaut</Typography>
              <Button color="inherit" onClick={this.handleSignOut}>
                Logout
              </Button>
              <Button color="inherit">{this.props.auth.name}</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Header);

// component sidebar
