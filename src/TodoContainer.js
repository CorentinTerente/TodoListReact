import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { resetTodo } from './Todo.action';
import { connect } from 'react-redux';
        
export class TodoContainer extends Component{
    
    render(){
        return (
        <div>
            <div>
                <TodoList/>
                <button type="submit"  onClick={this.props.resetTodo}> RESET </button>
            </div>
            <div>
                <TodoForm />
            </div>
        </div>
            );
    }
}

const mapStateToProps = state => ({
    todos: state.todo.list,
    loading: state.todo.loading,
});

const mapDispatchToProps = dispatch => ({
    resetTodo: () => dispatch(resetTodo()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)