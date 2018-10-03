import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Facebook from "./auth/Facebook";
import Google from "./auth/Google";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Facebook />
        <Google />
        <Signin />
        <Signup />
      </div>
    );
  }
}
