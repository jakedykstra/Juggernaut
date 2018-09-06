import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// compose helps with cleanup of the application, it allows us to write out multiple higher-order components with a much simpler syntax, rather than manually chaining them together with a bunch of parens
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    // we call the signup action creator that is available inside of our component due to the connect below
    // we set a callback here so that after signing up they will be taken to the feature page
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
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
        <button>Sign Up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

//in the body of compose we list out all the higher order components that we want to have be applied to signup
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
