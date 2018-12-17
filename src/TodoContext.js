import React, { Component } from 'react';
export const todos = [];
export const TodoContext = React.createContext({
    todoList : [],
    addTodo : (newTodoTitle) => {},
})