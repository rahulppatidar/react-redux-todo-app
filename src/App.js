import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/addTodo';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className=" jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </div>
        <div className="addtodobox">
          <AddTodo />
        </div>
        <hr />
        <div className="todolistbox">
          <TodoList />
        </div>

      </div>
    );
  }
}

export default App;
