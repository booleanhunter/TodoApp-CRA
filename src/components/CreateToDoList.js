import React, { Component } from 'react';

export default class CreateToDoList extends Component {
  handleCreate(event) {
    event.preventDefault();
    // console.log(this.refs.createInput.value);
    // console.log(this.props.createTask)
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value='';
  }
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what do I need to do?" ref="createInput"/>
        <button>Create List</button>
      </form>
    );
  }
}