import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component{
    
    render(){
        console.log(this.props.todoList);
        
        return(
            <ul>
                {this.props.todoList.length === 0 ? <p>Pas de Todo</p> : this.props.todoList.map(todo => <TodoItem key={todo.title} todo={todo} />)}
            </ul>
        )
    }
}

