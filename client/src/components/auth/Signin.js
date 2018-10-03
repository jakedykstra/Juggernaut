// inside auth is where we place all the components that have to do with authenticaion
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  onSubmit(formProps) {
    this.props.signin(formProps, () => {
      this.props.history.push("/home");
    });
  }

  handleClick() {
    // we pull handleSubmit which is a prop we get from reduxform. We need this for submitting, it is naturally called.
    const { handleSubmit } = this.props;
    // fieldsets wrap a group of different fields
    return (
      // we then use handleSubmit to call onSubmit which is hte juction we developed for handling sign in. This then references teh onSubmit method above but note: it doesnt call it with ()
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            // the field automatically wants to see automcomplete to help fill out the form, but for usernmae/password, people wont have an autoComplete so we set it as none
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }

  render() {
    return <button onClick={this.handleClick}>Facebook</button>;
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
