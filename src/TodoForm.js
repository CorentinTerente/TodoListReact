import React, { Component } from 'react';
import Todo from './TodoClass';

export default class TodoForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            todoTitle: ''                
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitButton = React.createRef()
    }

    componentDidMount(){
       this.submitButton.current.disabled = true;
        
    }

    componentDidUpdate(){
        if(this.state.todoTitle.length >= 4){
            this.submitButton.current.disabled = false;
            return;     
        }
        this.submitButton.current.disabled = true;
    }

    handleChange(event){
        this.setState({todoTitle: event.target.value});
    }
s
    handleSubmit(event){
        event.preventDefault();
        const newTodo = new Todo(this.state.todoTitle,false);
        console.log(newTodo);
        this.setState({todoTitle: ''})
        this.props.onTodoSubmit(newTodo);

        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> 
                    Todo Title:
                        <input type="text" value={this.state.todoTitle} onChange={this.handleChange} ref={this.todoInput}/>
                </label>
                    <input type="submit" value="Submit" id="submitButton" ref={this.submitButton}/>
            </form>
        )
    }
}