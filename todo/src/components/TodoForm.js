import React, { useState, useReducer } from 'react';
import { ADD_TODO, CLEAR_COMPLETED_TODO, TOGGLE_TODO } from '../actions/todoActions.js';
import { reducer, initialState } from '../reducers/index.js';
import '../components/TodoForm.css';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    // Ability to change input
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    // Ability to toggle task to completed or not
    const toggleTask = (toggle) => {
        dispatch({ type: TOGGLE_TODO, payload: toggle });
    };

    // Ability to submit task to todo list
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, payload: task });
        setTask('');
    };

    // Ability to clear task(s) on todo list
    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({ type: CLEAR_COMPLETED_TODO });
    };

    return(
        <div>
            <form>
                <label></label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    value={task}
                    placeholder="Task Here"
                    onChange={handleChange}
                />
                <button onClick={onSubmit}>ADD TODO</button>
                <button onClick={clearCompleted}>CLEAR COMPLETED</button>
            </form>
            <h3>Todos</h3>
            {
                state.map(todo => (
                    <div 
                    className={`${todo.completed ? 'todos completed' : 'todos'}`} 
                    onClick={() => toggleTask(todo.id)}
                    key={todo.id}
                    >
                        <p>{todo.task}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoForm;