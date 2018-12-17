import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {TodoContext,todos} from './TodoContext';
import Todo from './TodoClass';
        
export default class TodoContainer extends Component{
    
    constructor(props){
        super(props);

        this.addTodo = (e,newTodoTitle) => {
            e.preventDefault();
            this.setState({tdl: [...this.state.tdl,new Todo(newTodoTitle,false)]});
        }

        this.state ={
          tdl : todos,
          addTodo : this.addTodo,  
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
                <TodoContext.Provider value={this.state}>
                    <TodoForm onTodoSubmit={this.handleSubmit}/>
                </TodoContext.Provider>
            </div>
        </div>
            );
    }
}