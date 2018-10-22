import React, { Component } from "react";

export default class NewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.set.set) {
      return null;
    } else {
      return (
        <tr>
          <td data-label="Set">{this.props.set.set}</td>
          <td>
            <input
              className="input-field"
              type="text-field"
              placeholder={this.props.set.weight}
            />{" "}
          </td>
          <td>
            {" "}
            <input
              className="input-field"
              type="text-field"
              placeholder={this.props.set.reps}
            />{" "}
          </td>
        </tr>
      );
    }
  }
}
