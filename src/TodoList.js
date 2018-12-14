import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.todoList.map(todo => <TodoItem key={todo.title} todo={todo} />)}
            </ul>
        )
    }
}