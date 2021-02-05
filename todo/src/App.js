import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useReducer } from 'react';
import { reducer, initialState } from './reducers/index';
import { addTodo, toggleTodo, clearCompletedTodo } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Ability to add task
  const add = (todo) => {
    dispatch(addTodo(todo));
  };
  
  // Ability to toggle task to completed or not
  const toggle = (todo) => {
    dispatch(toggleTodo(todo));
  };

  // Ability to clear task
  const clear = () => {
    dispatch(clearCompletedTodo());
  };


  return (
    <div className="App">
      <TodoForm add={add} clear={clear} />
      <TodoList state={state} toggle={toggle} />
    </div>
  );
};

export default App;
