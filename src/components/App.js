import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';
import CreateToDoList from './CreateToDoList';
import ToDosList from './ToDosList';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task:'eat_dinner',
    isCompleted: true
  }
];
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:todos
    }
    this.toggleTask = this.toggleTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
   }
  createTask(task) {
    this.state.todos.push({
      task:task,
      isCompleted:false
    })
    this.setState({
      todos:this.state.todos
    });

  }
  toggleTask(key) {
    const todos = this.state.todos;
      todos[key].isCompleted = !todos[key].isCompleted;
      this.setState({
        todos:todos
      })
  }
  deleteTask(taskToDelete) {
  	console.log("deleteTask is trigerred")
  	console.log(taskToDelete)
    // const listItem = this.state.todos.map((todos, index)=>{
      // const newState = this.state.todos;
      // if(newState.indexOf(taskToDelete) > -1) {
      //   newState.splice(newState.indexOf(taskToDelete), 1);
      //   this.setState({todos: newState})
      // }
    const tasks = this.state.todos;
    tasks.splice(taskToDelete, 1);
    this.setState({
      todos:tasks
    })
  }
  render() {
    return (
      <div>
        <h1>React ToDos List</h1>
        <CreateToDoList createTask={this.createTask.bind(this)}/>
        <ToDosList todos={this.state.todos}
                  deleteTask={this.deleteTask}
                  toggleTask={this.toggleTask}
                  />
      </div>
    );
  }
}

export default App;
