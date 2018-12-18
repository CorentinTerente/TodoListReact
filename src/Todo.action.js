import Todo from './TodoClass';
export const ADD_TODO = 'ADD_TODO';
export const TODO_LOADED = 'TODO_LOADED';
export const LOAD_TODO = 'LOAD_TODO';
export const RESET_TODO = 'RESET_TODO';


const data = [
    new Todo(0,'todoMock1',false),
    new Todo(1,'todoMock2',false),
    new Todo(2,'todoMock3',false),
    new Todo(3,'todoMock4',false)
]

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    })
}

export function addTodo(todoName){
    return {
        type: ADD_TODO,
        todoName
    }
}

export function todoLoaded(datas) {
    return {
        type: TODO_LOADED,
        todos: datas,
    }
}

export function loadTodo() {
    return (dispatch) => {
        // Dispatch load trainings start
        dispatch({ type: LOAD_TODO });
        return mockFetch()
            .then((datas) => dispatch(todoLoaded(datas)));
    }
}

export function resetTodo(){
    return {
        type: RESET_TODO,
    }
}