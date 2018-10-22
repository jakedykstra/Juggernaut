import React from "react";
import PropTypes from "prop-types";
import Dashboard from "../dashboard/Dashboard";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";
import { AppBar, Tabs, Tab, Typography, Paper, Grid } from "@material-ui/core";

// container for tabs, Children and dir props get passed in

export default class FullWidthTabs extends React.Component {
  state = {
    tabMenuName: "one",
    tabIndex: 0
  };

  handleChange = (event, value) => {
    this.setState({
      tabIndex: value
    });
  };

  handleSwitch = () => {
    this.setState({
      value: 0
    });
  };

  render() {
    return (
      <Paper>
        <Tabs
          defaultActiveKey={1}
          id="uncontrolled-tab-example"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab eventKey={1} title="Dashboard" label="Dashboard">
            return <Dashboard />
          </Tab>
          <Tab eventKey={2} title="Weekly" label="Weekly">
            return <WeeklyView />
          </Tab>
          <Tab eventKey={3} title="Daily" label="Daily">
            <DailyView />
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}
