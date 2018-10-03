import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

export default class DailyView extends Component {
    // {weekProgram, week} = this.props;

  
    render() {
      return (
        <div>
            <div className='Workout_1'>
                <h1>Squat Day</h1>
                <h3>Main program:</h3>
                {/* weekProgram.squat[week].main.map((val) => {           
                    <p>val</p>
                }) */}
            </div>
            <div className='Workout_2'>
            
            </div>
            <div className='Workout_3'>

            </div>
            // High level overview based on day 
            // total volume
            // strength increases by lift
        </div>
      );
  }

};

// function mapStateToProps({ DailyView }) {
//     return { DailyView };
//   }

// export default connect(mapStateToProps, actions)(DailyView);
