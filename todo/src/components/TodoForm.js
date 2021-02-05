import React, { useState } from 'react';
import '../components/TodoForm.css';

const TodoForm = (props) => {
   const [task, setTask] = useState('');

   // Ability to change input
   const handleChange = (e) => {
      setTask(e.target.value);
   };

   // Ability to submit task to todo list
   const handleSubmit = (e) => {
      e.preventDefault();
      props.add(task);
      setTask('');
   };

   // Ability to clear task(s) on todo list
   const handleClear = (e) => {
      e.preventDefault();
      props.clear();
   };

   return(
      <form onSubmit={handleSubmit}>
         <input 
            id="task"
            name="task"
            type="text"
            value={task}
            placeholder="Task Here"
            onChange={handleChange}
         />
         <button>ADD TODO</button>
         <button onClick={handleClear}>CLEAR COMPLETED</button>
      </form>
   )
};

export default TodoForm;