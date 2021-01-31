import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return(
        <div className="todoList">
            <h3>Todos</h3>
            {props.state.tasks.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggle={props.toggle} />
                )
            })}
        </div>
    )
};

export default TodoList;