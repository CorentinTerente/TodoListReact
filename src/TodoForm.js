import React, { Component } from 'react';
import { addTodo } from './Todo.action';
import { connect } from 'react-redux';

export class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoTitle: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitButton = React.createRef()
    }

    componentDidMount() {
        this.submitButton.current.disabled = true;

    }

    componentDidUpdate() {
        if (this.state.todoTitle.length >= 4) {
            this.submitButton.current.disabled = false;
            return;
        }
        this.submitButton.current.disabled = true;
    }

    handleChange(event) {
        this.setState({ todoTitle: event.target.value });
    }


    render() {
        return (

            <form onSubmit={(e) => {
                e.preventDefault();
                this.setState({ todoTitle: '' });
                this.props.addTodo(this.state.todoTitle)
            }}>
                <label>
                    Todo Title:
                        <input type="text" value={this.state.todoTitle} onChange={this.handleChange} ref={this.todoInput} />
                </label>
                <input type="submit" value="Submit" ref={this.submitButton} />
            </form>
        )
    }

}


const mapStateToProps = state => ({
    todos: state.todo.list,
    loading: state.todo.loading,
});

const mapDispatchToProps = dispatch => ({
    addTodo: name => dispatch(addTodo(name)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm)