import React from 'react';
export const todos = [];
export const TodoContext = React.createContext({
    todoList : [],
    addTodo : (newTodoTitle) => {},
})