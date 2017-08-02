import React, { Component } from 'react';
import ToDosListHeader from './ToDosListHeader';
import ToDoListItem from './ToDoListItem';

export default class ToDosList extends Component {
  constructor() {
    super();
    // this.renderItems = this.renderItems.bind(this);
  }
  // renderItems() {
  //     // let tasks = this.props.todos;
  //     // return tasks.map((tasks, index) => <ToDoListItem key={index} {...tasks}/>);
  //     this.props.todos.map(function(todos, index){
  //       return(
  //             <ToDoListItem key={index}
  //             task={todos.task} isCompleted={todos.isCompleted} {...todos}/>
  //           );
  //       });    

  // }
  
  render() {
    // let tasks = this.props.todos;
    // console.log({...tasks}); //Object {0: Object, 1: Object}
    // return tasks.map((tasks, index) => <ToDoListItem key={index} {...tasks}/>);
      var a = this.props.todos.map(function(todos, index){
        return(
              <ToDoListItem key={index}
              task={todos.task} isCompleted={todos.isCompleted} {...todos} 
              deleteTask={this.props.deleteTask}/>
            );
        });       
    console.log(this.props.todos)
    return (
      <table>
        <ToDosListHeader />
        <tbody>{a}</tbody>

      </table>
  );
 }
}
