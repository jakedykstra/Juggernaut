import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

export default class DailyView extends Component {
  
  
    render() {
      return (
        <div className='Month'>
        Month
        </div>
          // High level overview based on day 
          // total volume
          // strength increases by lift
        
      );
  }

};

// function mapStateToProps({ DailyView }) {
//     return { DailyView };
//   }

// export default connect(mapStateToProps, actions)(DailyView);
