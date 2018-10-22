import React, { Component } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  MenuItem,
  Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { connect } from "react-redux";
import * as actions from "../../actions";
import program from "../../utils/allProgramData";
import NewForm from "./NewForm";
import AccesForm from "./AccesForm";

class DailyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutDay: null
    };
  }

  liftType = undefined;
  userDay = this.props.workoutDay;
  maxForMeasurement = "bp";

  userCurrentMax = liftType => {
    switch (liftType) {
      case "Bench":
        return (this.maxForMeasurement = "bp");
      case "Squats":
        return (this.maxForMeasurement = "sqt");
      case "Deadlift":
        return (this.maxForMeasurement = "dl");
      case "Military Press":
        return (this.maxForMeasurement = "mp");
      default:
        break;
    }
  };

  showWorkouts = () => {
    console.log(this.props);
    if (
      this.state.workoutDay === null ||
      this.props.workoutDay === this.state.workoutDay
    ) {
      this.liftType = this.props.program.liftType(this.props.workoutDay);
      this.maxForMeasurement = this.props.program.userCurrentMax(this.liftType);
      let workoutListed = this.props.program.programDay(
        this.props.workoutDay,
        this.props.measurement[this.maxForMeasurement]
      );
      console.log(workoutListed);
      return this.formLayout(workoutListed);
    } else if (this.state.workoutDay > this.props.workoutDay) {
      this.liftType = this.props.program.liftType(this.state.workoutDay);
      this.userCurrentMax(this.liftType);
      let workoutListed = this.props.program.programDay(
        this.state.workoutDay,
        200
      );
      console.log(workoutListed);
      return this.formLayout(workoutListed);
    } else if (this.state.workoutDay < this.props.workoutDay) {
      this.liftType = this.props.program.liftType(this.state.workoutDay);
      this.userCurrentMax(this.liftType);
      let workoutListed = this.props.program.programDay(
        this.state.workoutDay,
        200
      );
      return this.formLayout(workoutListed);
    }
  };

  day = () => {
    if (!this.state.workoutDay) {
      return this.props.workoutDay;
    } else {
      return this.state.workoutDay;
    }
  };

  formLayout = workoutListed => {
    let newForm = () => {
      return workoutListed.map(set => {
        let key = set[set];
        // console.log(set);
        return <NewForm key={set.set} set={set} liftType={this.liftType} />;
      });
    };

    let accWorkouts = () => {
      return workoutListed[0].workouts.map(workouts => {
        let i = 0,
          key = i,
          numberOfSets,
          numberOfReps,
          workout,
          arr = [];
        let name = workouts;
        let workoutsToPopulate = workoutListed[0].workoutList[i];
        i++;
        return (
          <div>
            <h5>{name}</h5>
            <table className="acces-tables ui celled table">
              <thead>
                <tr>
                  <th className="short-width">Set</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>{callAccesForm(workoutsToPopulate)}</tbody>
            </table>
          </div>
        );
      });
    };

    let callAccesForm = workoutsToPopulate => {
      return workoutsToPopulate.map(set => {
        let key = set[0];
        let numberOfSet = key;
        let numberOfReps = set[1];
        return (
          <AccesForm numberOfSet={numberOfSet} numberOfReps={numberOfReps} />
        );
      });
    };

    return (
      <div className="fillableForm">
        <h2>
          JTS {this.props.program.wkType} Week - Wave{" "}
          {this.props.program.ckWave(this.state.workoutDay)}: Day {this.day()}
        </h2>
        <h3>Lift Day - {this.liftType} </h3>
        <h5>{this.liftType}</h5>
        <table className="ui celled table main-lift">
          <thead>
            <tr>
              <th className="short-width">Set</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>{newForm()}</tbody>
        </table>
        {accWorkouts()}
        <button type="submit" id="workoutSubmit" onClick={this.submitWorkout()}>
          Submit Workout
        </button>
      </div>
    );
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

  submitWorkout = () => {
    console.log("workout submitted");
  };

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="Daily">
        {this.showWorkouts(this.props.workoutDay)}
        <button onClick={() => this.updateDay("minus")}>last workout</button>
        <button onClick={() => this.updateDay("plus")}>next workout </button>
      </div>
    );
  }
}

function mapStateToProps({
  workoutDay,
  userMaxes,
  program,
  powerliftDay,
  measurement
}) {
  return { workoutDay, userMaxes, program, powerliftDay, measurement };
}

export default connect(
  mapStateToProps,
  actions
)(DailyView);
