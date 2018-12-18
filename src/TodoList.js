import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {loadTodo} from './Todo.action';


export class TodoList extends Component{
    
    componentDidMount() {
        this.props.loadTodo();
    }

    displayTodos() {
        if (this.props.loading) {
            return <p>Loading ....</p>
        }
        return this.props.todos.length === 0 ? <p>Pas de TODO</p> : this.props.todos.map((item) => <TodoItem key={item.id} todo={item}></TodoItem>);
    }

    render(){
        console.log(this.props.todoList);
        
        return(
            <ul>
                {this.displayTodos()}
            </ul>
        )
    }
}

TodoList.propTypes = {
    loadTodo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const mapStateToProps = state => ({
    todos: state.todo.list,
    loading: state.todo.loading,
});

const mapDispatchToProps = dispatch => ({
    loadTodo: () => dispatch(loadTodo()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
