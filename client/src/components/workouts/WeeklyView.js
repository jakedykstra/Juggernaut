import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

class WeeklyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.workoutDay,
      nextDay: this.props.workoutDay + 1,
      twoDays: this.props.workoutDay + 2,
      threeDays: this.props.workoutDay + 3
    };
  }

  liftType = undefined;
  maxForMeasurement = "bp";
  todaysWorkout = null;
  nextDayWorkouts = null;
  twoDaysWorkouts = null;
  threeDaysWorkouts = null;

  getWorkout = (dayEntered, dayReturned) => {
    console.log(dayEntered);
    console.log(dayReturned);
    this.liftType = this.props.program.liftType(dayEntered);
    this.maxForMeasurement = this.props.program.userCurrentMax(this.liftType);
    this[dayReturned] = this.props.program.programDay(
      this.state.day,
      this.props.measurement[this.maxForMeasurement]
    );
    console.log(this[dayReturned]);
    return this[dayReturned];
  };

  populateMain = (dayEntered, type) => {
    let list = [];
    let sameCheck = [];
    let same = false;
    for (let val of this[dayEntered]) {
      // checking if its the array with the other workouts. If it is then move on
      if (val.workouts) {
        continue;
      } else {
        list.push(val[type]);
        sameCheck.push(val["reps"]);
      }
    }
    if (sameCheck.every(val => val === sameCheck[0]) === true) { 
      same = true;
    }
    if (same === true && type === "set") {
      var setDash = list[0] + "-" + list[list.length - 1];
      return setDash;
    } else if (same === true) {
      return list[0];
    } else {
      console.log(list);
      let splitList = list.join("/");
      return splitList;
    }
  };

  populateExtra = dayEntered => {
    console.log(this[dayEntered]);
    return this[dayEntered][0].workoutList.map((val, i) => {
      var setArr = [];
      var repArr = [];
      for (let set of val) {
        setArr.push(set[0]);
        repArr.push(set[1]);
      }
      let sets = null;
      let reps = null;
      if (repArr.every(val => val === repArr[0])) {
        sets = setArr[0] + "-" + setArr[setArr.length - 1];
        reps = repArr[0];
      } else {
        sets = setArr.join("/");
        reps = repArr.join("/");
      }
      return (
        <tr>
          <td>{this[dayEntered][0].workouts[i]}</td>
          <td>-</td>
          <td>{reps}</td>
          <td>{sets}</td>
          <td>-</td>
        </tr>
      );
    });
  };

  changeDay = direction => {
    console.log(direction);
    if (direction === "next") {
      let change = this.state.day + 1;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    } else {
      let change = this.state.day - 1;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    }
  };

  changeWeek = direction => {
    if (direction === "next") {
      let change = this.state.day + 4;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    } else {
      let change = this.state.day - 4;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    }
  };

  changeToToday = () => {
    this.setState({
      day: this.props.workoutDay,
      nextDay: this.props.workoutDay + 1,
      twoDays: this.props.workoutDay + 2,
      threeDays: this.props.workoutDay + 3
    });
  };

  render() {
    {
      this.getWorkout(this.state.day, "todaysWorkout");
      this.getWorkout(this.state.nextDay, "nextDayWorkouts");
      this.getWorkout(this.state.twoDays, "twoDaysWorkouts");
      this.getWorkout(this.state.threeDays, "threeDaysWorkouts");
    }
    console.log(this.state);
    return (
      <div>
        <div>
          <h6>Workout {this.state.day}</h6>
          <h6>
            <button onClick={() => this.changeWeek("previous")}>
              Previous Week
            </button>
            <button onClick={() => this.changeDay("previous")}>
              Previous Day
            </button>
            <button onClick={() => this.changeToToday()}>Today</button>
            <button onClick={() => this.changeDay("next")}>Next Day</button>
            <button onClick={() => this.changeWeek("next")}>Next Week</button>
          </h6>
        </div>
        <h4>{this.props.program.liftType(this.state.day)}</h4>
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.program.liftType(this.state.day)}</td>
              <td>{this.populateMain("todaysWorkout", "weight")}</td>
              <td> {this.populateMain("todaysWorkout", "reps")} </td>
              <td>{this.populateMain("todaysWorkout", "set")}</td>
              <td>N/A</td>
            </tr>
            {this.populateExtra("todaysWorkout")}
          </tbody>
        </table>
        <h4>{this.props.program.liftType(this.state.nextDay)}</h4>
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.program.liftType(this.state.nextDay)}</td>
              <td>{this.populateMain("nextDayWorkouts", "weight")}</td>
              <td> {this.populateMain("nextDayWorkouts", "reps")} </td>
              <td>{this.populateMain("nextDayWorkouts", "set")}</td>
              <td>N/A</td>
            </tr>
            {this.populateExtra("nextDayWorkouts")}
          </tbody>
        </table>
        <h4>{this.props.program.liftType(this.state.twoDays)}</h4>
        <table>
          <thead>
            <tr>
              <th>Accessory to </th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.program.liftType(this.state.twoDays)}</td>
              <td>{this.populateMain("twoDaysWorkouts", "weight")}</td>
              <td> {this.populateMain("twoDaysWorkouts", "reps")} </td>
              <td>{this.populateMain("twoDaysWorkouts", "set")}</td>
              <td>N/A</td>
            </tr>
            {this.populateExtra("twoDaysWorkouts")}
          </tbody>
        </table>
        <h4>{this.props.program.liftType(this.state.threeDays)}</h4>
        <table>
          <thead>
            <tr>
              <th>Accessory to </th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.program.liftType(this.state.threeDays)}</td>
              <td>{this.populateMain("threeDaysWorkouts", "weight")}</td>
              <td> {this.populateMain("threeDaysWorkouts", "reps")} </td>
              <td>{this.populateMain("threeDaysWorkouts", "set")}</td>
              <td>N/A</td>
            </tr>
            {this.populateExtra("threeDaysWorkouts")}
          </tbody>
        </table>
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
  null
)(WeeklyView);
