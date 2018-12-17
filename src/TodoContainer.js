import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoContainer extends Component{
    constructor(props){
        super(props);
        this.state ={
          tdl : []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
      }
    
      handleSubmit(newTodo){
        this.setState({tdl: [...this.state.tdl,newTodo]});
      }

      onReset(){
        this.setState({tdl: []});
      }

    render(){
        return (
        <div>
            <div>
                <TodoList todoList={this.state.tdl}/>
                <input type="submit" value="Reset" id="submitButton" onClick={this.onReset}/>
            </div>
            <div>
                <TodoForm onTodoSubmit={this.handleSubmit}/>
            </div>
        </div>
            );
    }
}