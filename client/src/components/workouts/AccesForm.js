import React, { Component } from "react";

export default class AccesForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td data-label="Set">{this.props.numberOfSet}</td>
        <td>
          <input
            className="input-field"
            type="text-field"
            placeholder={this.props.numberOfReps}
          />
        </td>
        <td>
          <input
            className="input-field"
            type="text-field"
            placeholder="Weight optimal for failure"
          />
        </td>
      </tr>
    );
  }
}
