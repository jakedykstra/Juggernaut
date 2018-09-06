import React, { Component } from 'react';
import { connect } from 'react-redux';

class JuggStats extends Component {
  render() {
    return (
      <div>
        Stats
      </div>
        // number of days logged
        // total volume
        // strength increases by lift
      
    );
  }

};

function mapStateToProps({ JuggStats }) {
    return { JuggStats };
  }

export default connect(mapStateToProps)(JuggStats);