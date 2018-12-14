import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoContainer from './TodoContainer';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
      <TodoContainer>
        <div>
          <TodoList todoList={this.props.todoList} />
        </div>
        <div>
          <TodoForm/>
        </div>
        </TodoContainer>
      </div>
    );
  }
}

export default App;
