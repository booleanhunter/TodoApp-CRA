import React, { Component } from 'react';

export default class ToDosListItem extends Component {
  constructor(){
    super();
    this.state = {
      isEditing:false
    }
  }

  tt() {
    const { task, isCompleted, index } = this.props;
    this.props.toggleTask(this.props.index);
  }
  renderTaskSection() {
    const { task, isCompleted, index} = this.props;
    const taskStyle = {
      color: isCompleted? 'green': 'red',
      cursor:'pointer'
    }; 
    return (
      <td style={taskStyle}
          onClick={() => this.tt}>
          {this.props.task}
      </td>
    );
  }
  renderActionsSection() {
    if(this.state.isEditing) {
        return(
          <td>
          <button>Save</button>
          <button onClick={this.onClickCancel.bind(this)}>Cancel</button>
          </td>
      );
    }
    return(
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </td>
      );
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

  render() {
    // console.log(this.props.todos)
    // console.log("{this.props.task} is "+ this.props.task)
    console.log(this.props.task)
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
        
      </tr>
    );
  }
}