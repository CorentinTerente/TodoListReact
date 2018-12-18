import React, { Component } from 'react';
import './App.css';
import TodoContainer from './TodoContainer';
import {todoReducer} from './Todo.reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  todo: todoReducer,
});

const logger = createLogger({
  level: 'log',
});

// Création du store
const store = createStore(reducers, applyMiddleware(thunk,logger));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
