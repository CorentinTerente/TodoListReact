import React, { Component } from 'react';
import TodoLabel from './TodoLabel';

export default class TodoItem extends Component{
    

    render(){
        return <TodoLabel todoLabel={this.props.todo.title} todoState={this.props.todo.isDone} />;
    }
}