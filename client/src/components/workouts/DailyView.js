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

    this.nextDay = this.nextDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
  }

  todaysWorkout = this.props.workoutDay;
  workoutDay = 2;

  startDailyComponent() {
    return (
      <div className="starting">
        Today's Workout - Day {this.props.workoutDay}
      </div>
    );
  }

  showWorkouts() {
    if(this.props.workoutDay == this.workoutDay) {
      this.today();
    } else if (this.workoutDay > this.props.workoutDay) {
      let weight = this.props.program.programDay(this.workoutDay, 200);
      console.log(weight);
      return weight.map(set => {
        console.log(set);
        return <NewForm let key={set.set} set={set} />;
      }); 
    } else if (this.workoutDay < this.props.workoutDay) {
      let weight = this.props.program.programDay(this.workoutDay, 200);
      console.log(weight);
      return weight.map(set => {
        let key = set.set;
        console.log(set);
        return (
          <form>
            <label htmlFor="Set">Set {set.set}</label>
            <label htmlFor="Weight">Weight</label>
            <input type="text-field" placeholder={set.weight} />
            <label htmlFor="Reps">Reps</label>
            <input type="text-field" placeholder={set.reps} />
          </form>
        );
      });
    }
  }

  today(){
    let weight = this.props.program.programDay(2, 200);
    return weight.map(set => {
      let key = set.set;
      console.log(set);
      return (
        <form>
          <label htmlFor="Set">Set {set.set}</label>
          <label htmlFor="Weight">Weight</label>
          <input type="text-field" placeholder={set.weight} />
          <label htmlFor="Reps">Reps</label>
          <input type="text-field" placeholder={set.reps} />
        </form>
      );
    });
  };

  nextDay() {
    this.workoutDay++;
    console.log(this.workoutDay);
    console.log(this.props);
  };

  previousDay() {
    this.workoutDay--;
  };

  render() {
    return (
      <div className="Daily">
        {this.showWorkouts()}
        <button onClick={this.previousDay}>last workout</button>
        <button onClick={this.nextDay}>next workout </button>
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
