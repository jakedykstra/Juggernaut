import React, { Component } from 'react';
import { Graph, Maxes, Stats } from '../dashboard'
import { Grid } from '@material-ui/core';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyView extends Component {
  
  
    render() {
    // return (
        // High level overview based on day 
        // total volume
        // strength increases by lift
      
    // );
  }

};

function mapStateToProps({ DailyView }) {
    return { DailyView };
  }

export default connect(mapStateToProps, actions)(DailyView);
