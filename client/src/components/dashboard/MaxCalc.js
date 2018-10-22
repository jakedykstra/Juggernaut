import React, { Component } from "react";

class MaxCalc extends Component {
  state = {
    weightValue: null,
    repsValue: null,
    max: this.weightValue * this.repsValue * 0.033 + this.weightValue
  };

  handleWeightInput = event => {
    console.log(event);
    // if (!typeof event.target === Number) {
    //   return;
    // }
    this.setState({
      weightValue: event
    });
  };
  handleRepsInput = input => {
    // if (!typeof input === Number) {
    //   return;
    // }
    this.setState({
      repsValue: input
    });
  };
  render() {
    return (
      <div>
        <h3>Calculated Max: {this.state.max}</h3>
        <form>
          <h4>Weight</h4>
          <input
            type="text"
            onChange={e => this.handleWeightInput(e.target)}
            value={this.state.weightValue}
            placeholder="Weight"
          />
          <h4>Reps</h4>
          <input
            type="text"
            onChange={e => this.handleRepsInput(e.target)}
            value={this.state.repsValue}
            placeholder="Reps"
          />
        </form>
      </div>
    );
  }
}

export default MaxCalc;
