import React, { Component } from 'react';

export default class ToDosListItem extends Component {
  constructor(){
    super();
    this.state = {
      isEditing:false
    };

    this.tt = this.tt.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  tt() {
    const { task, isCompleted, index } = this.props;
    this.props.toggleTask(this.props.index);
  }

  onClickCancel() {
    this.setState({
      isEditing:false
    })
  }
  onEditClick() {
    this.setState({
      isEditing: true
    });
  }

  saveTask(){
    var inputField = document.getElementById("input"+this.props.index);
    this.props.saveTodo(this.props.index, inputField.value)
    this.setState({
      isEditing:false
    })
  }

  render() {
    const { task, isCompleted, index} = this.props;
    const taskStyle = {
      color: isCompleted? 'green': 'red',
      cursor:'pointer'
    };
    if(this.state.isEditing) {
      return (
        <tr>
          <td>
            <input type="text" defaultValue={this.props.task} id={"input"+this.props.index} />
          </td>
          <td>
            
            <button onClick={this.saveTask}>Save</button>
            <button onClick={this.onClickCancel.bind(this)}>Cancel</button>
          </td>
        </tr>
      );
    }else{
      return (
      <tr>
        <td style={taskStyle}
            onClick={this.tt}>
            {this.props.task}
        </td>

        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.props.deleteTask.bind(this, this.props.index)}>Delete</button>
        </td>
      </tr>
      )
    }
  }
}