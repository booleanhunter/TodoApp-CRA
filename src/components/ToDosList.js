import React, { Component } from 'react';
import ToDosListHeader from './ToDosListHeader';
import ToDoListItem from './ToDoListItem';

export default class ToDosList extends Component {
  constructor() {
    super();
    // this.renderItems = this.renderItems.bind(this);
  }
  renderItems() {
    // console.log(this.props.toggleTask)
    return this.props.todos.map(function(todos, index){
        return(
              <ToDoListItem key={index} index={index}
              task={todos.task} isCompleted={todos.isCompleted} 
              toggleTask={()=>this.props.toggleTask}
              
              />
            );
        }); 

  }
  
  render() {
    // let tasks = this.props.todos;
    // console.log({...tasks}); //Object {0: Object, 1: Object}
    // return tasks.map((tasks, index) => <ToDoListItem key={index} {...tasks}/>);
    // console.log("deletetask it :" + this.props.deleteTask);
      // var a = this.props.todos.map(function(todos, index){
      //   return(
      //         <ToDoListItem key={index}
      //         task={todos.task} isCompleted={todos.isCompleted} deleteTask={this.props.deleteTask}/>
      //       );
      //   });       
    console.log("this.props.todos: "+ JSON.stringify(this.props.todos));
    return (
      <table>
        <ToDosListHeader />
        <tbody>{ this.renderItems()}</tbody>

      </table>
  );
 }
}
