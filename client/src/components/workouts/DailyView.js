import React, { Component } from "react";
import { Grid, InputAdornment, TextField, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewForm from "./NewForm";

class DailyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutDay: null
    };

    this.nextDay = this.nextDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
  }

  userDay = this.props.workoutDay;

  startDailyComponent() {
    return (
      <div className="starting">
        Today's Workout - Day {this.props.workoutDay}
      </div>
    );
  }

  showWorkouts = () => {
    if (
      this.state.workoutDay === null ||
      this.props.workoutDay === this.state.workoutDay
    ) {
      let workoutListed = this.props.program.programDay(
        this.props.workoutDay,
        200
        // will be this.props.maxes
      );
      return this.formLayout(workoutListed);
    } else if (this.state.workoutDay > this.props.workoutDay) {
      let workoutListed = this.props.program.programDay(
        this.state.workoutDay,
        200
      );
      return this.formLayout(workoutListed);
    } else if (this.state.workoutDay < this.props.workoutDay) {
      let workoutListed = this.props.program.programDay(
        this.state.workoutDay,
        200
      );
      return this.formLayout(workoutListed);
    }
  };

  formLayout = workoutListed => {
    return workoutListed.map(set => {
      let key = set[set];
      console.log(set);
      return <NewForm key={set.set} set={set} />;
    });
  };

  updateDay = calc => {
    if (calc === "minus") {
      this.userDay--;
    } else if (calc === "plus") {
      this.userDay++;
    }
    this.setState({
      workoutDay: this.userDay
    });
    console.log(this.state);
    console.log(this.props);
    return this.userDay;
  };

  render() {
    return (
      <div className="Daily">
        {this.showWorkouts()}
        <button onClick={() => this.updateDay("minus")}>last workout</button>
        <button onClick={() => this.updateDay("plus")}>next workout </button>
      </div>
    );
  }
}

function mapStateToProps({ workoutDay, userMaxes, program }) {
  return { workoutDay, userMaxes, program };
}

export default connect(
  mapStateToProps,
  actions
)(DailyView);
