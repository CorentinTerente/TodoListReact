import React, { Component } from 'react';
import './TodoLabel.css';
export default class TodoLabel extends Component{
    constructor(props){
        super(props);
        this.isDone = this.props.isDone;
        this.onChecked = this.onChecked.bind(this);
        this.label = React.createRef();
        this.checkBox = React.createRef();
    }

    onChecked(){
        
        if(this.isDone){
            this.checkBox.current.checked = false;
            this.isDone = false;
            this.label.current.removeAttribute('class','barre');
            return;
        }
            this.checkBox.current.checked = true;
            this.isDone = true;
            this.label.current.setAttribute('class','barre');
    }

    render(){
        return (
            <>
                <input type="checkbox"  name={this.props.todoLabel} onClick={this.onChecked} ref={this.checkBox}></input>
                <label ref={this.label}>{this.props.todoLabel}</label>
            </>
        )
    }
}