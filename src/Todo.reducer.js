import {ADD_TODO, TODO_LOADED, LOAD_TODO, RESET_TODO} from './Todo.action';
import Todo from './TodoClass';

export const todoList = [
    new Todo('todo1',false),
    new Todo('todo2',false),
    new Todo('todo3',false),
    new Todo('todo4',false)
];

export const initialState = {
    list: [],
    loading: false,
    loaded: false,
}

export function todoReducer(state = initialState, action){
    switch(action.type){
        case LOAD_TODO:
            return {
                ...state,
                loading: true,
                loaded: false,
            }
        case TODO_LOADED:
            return {
                ...state,
                list: action.todos,
                loading: false,
                loaded: true,
            }
        case ADD_TODO:
            const todo = new Todo(state.list.length+1,action.todoName,false)
            return {
                ...state,
                list: [...state.list, todo],
            }
        case RESET_TODO:
            return {
                ...state,
                list: [],
            }
        default:
            return state;
    }
}