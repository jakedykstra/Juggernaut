import React, { Component } from 'react';
// import react form
import { connect } from 'react-redux';
// import * as actions from '../actions';

class MaxChart extends Component {
  render() {
    return (
      <div className = 'max'>
      Maxes
      </div>
        // button for edit
        // inputs with values of maxes
      
    );
  }

};

function mapStateToProps({ maxData }) {
    return { maxData };
  }

export default connect(mapStateToProps)(MaxChart);