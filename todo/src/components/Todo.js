import React from 'react';

const Todo = (props) => {
    return(
        <li
            className={props.todo.completed ? 'todos completed' : 'todos'}
            onClick={() => {props.toggle(props.todo.id)}}
            key={props.todo.id}
        >
            {props.todo.item}
        </li>
    )
};

export default Todo;