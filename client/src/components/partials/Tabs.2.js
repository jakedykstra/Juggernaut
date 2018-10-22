import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Typography, Paper, Grid } from "@material-ui/core";
import Dashboard from "../dashboard/Dashboard";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ColorTheme from "../../utils/materialui";

// container for tabs, Children and dir props get passed in
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={ColorTheme}>
          <AppBar className="app_bar" position="static" color="default">
            <Tabs
              className="tab_bar"
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Dashboard" />
              <Tab label="Weekly" />
              <Tab label="Daily" />
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Grid item xs={12}>
              <Dashboard />
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid item xs={12}>
              <WeeklyView />
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid item xs={12}>
              <DailyView />
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
