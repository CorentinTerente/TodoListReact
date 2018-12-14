import React, { Component } from 'react';
import './TodoLabel.css';
export default class TodoLabel extends Component{
    constructor(props){
        super(props);
        this.isDone = this.props.isDone;
        this.onChecked = this.onChecked.bind(this);
    }

    onChecked(){
        const todoCheckBox = document.getElementById(this.props.todoLabel);
        const todoLabel = document.getElementById('label' + this.props.todoLabel);
        if(this.isDone){
            todoCheckBox.checked = false;
            this.isDone = false;
            todoLabel.removeAttribute('class','barre');
            return;
        }
            todoCheckBox.checked = true;
            this.isDone = true;
            todoLabel.setAttribute('class','barre');
    }

    render(){
        return (
            <>
                <input type="checkbox" id={this.props.todoLabel} name={this.props.todoLabel} onClick={this.onChecked}></input>
                <label id={'label' + this.props.todoLabel}>{this.props.todoLabel}</label>
            </>
        )
    }
}