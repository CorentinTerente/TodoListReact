import React, { Component } from 'react';

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
       this.submitButton.disabled = false;
        
    }

    componentDidUpdate(){
        
        
    }

    handleChange(event){
        this.setState({todoTitle: event.target.value});
    }

    handleSubmit(event){

        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> 
                    Todo Title:
                        <input type="text" value={this.state.todoTitle} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" id="submitButton" ref={this.submitButton}/>
            </form>
        )
    }
}