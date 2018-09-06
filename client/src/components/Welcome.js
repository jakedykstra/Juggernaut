import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Signin from './auth/Signin';
import Signup from './auth/Signup';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Signin />
                <Signup />
                {/* <GoogOAuth />
                <FBOAuth /> */}
            </div>
        )
    }
}