import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Dashboard from "./dashboard/Dashboard";
import Tabs from "./partials/Tabs";
import * as actions from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (!localStorage.getItem('token'))
    if (this.props.auth.isLoggedIn === false || !this.props.auth.isLoggedIn) {
      console.log("logged wrong");
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.auth.isLoggedIn === false || !this.props.auth.isLoggedIn) {
      console.log("logged wrong");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <Tabs />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(Home);

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
