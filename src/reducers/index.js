import { combineReducers } from 'redux';
import todoList from './todos';


const todoApp = combineReducers({
  todoList
});

export default todoApp;