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

    this.state= {
      workoutDay: null
    }

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
    if(this.state.workoutDay == null || this.props.workoutDay == this.state.workoutDay) {
      this.today();
    } else if (this.state.workoutDay > this.props.workoutDay) {
      let weight = this.props.program.programDay(this.state.workoutDay, 200);
      console.log(weight);
      return weight.map(set => {
        let key = set[set]; 
        console.log(set);
        return <NewForm key={set.set} set={set} />;
      }); 
    } else if (this.state.workoutDay < this.props.workoutDay) {
      let weight = this.props.program.programDay(this.state.workoutDay, 200);
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

  nextDay = () => {
    this.userDay++;
    this.setState({
      workoutDay: this.userDay
    });
    console.log(this.state);
    console.log(this.props);
    return this.userDay;
  };

  previousDay = () => {
    this.userDay--;
    this.setState({
      workoutDay: this.userDay
    })
    console.log(this.state);
    console.log(this.props);
    return this.userDay;
  };

  componentWillMount() {
    let currentDay = this.props.workoutDay;
    return currentDay;
  }

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
