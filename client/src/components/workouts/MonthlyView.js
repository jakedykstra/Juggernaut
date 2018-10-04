import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Calendar from "react-calendar";
// IF I WANT TO DO MY OWN CALENDER STYLING import Calendar from 'react-calendar/dist/entry.nostyle';

class MonthlyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <div className="Month">Month</div>;
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

function mapStateToProps({ state }) {
  return { state };
}

export default connect(
  mapStateToProps,
  actions
)(MonthlyView);
