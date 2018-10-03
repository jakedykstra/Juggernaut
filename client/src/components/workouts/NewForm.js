import React, { Component } from 'react';

export default class NewForm extends React.Component {
  constructor(props){
    super(props)
  }

    render(){
      return(
      <form>
          <label htmlFor="Set">Set {this.props.set.set}</label>
          <label htmlFor="Weight">Weight</label>
          <input type="text-field" placeholder={this.props.set.weight}></input>
          <label htmlFor="Reps">Reps</label>
          <input type="text-field" placeholder={this.props.set.reps}></input>
      </form>
      );
}

};