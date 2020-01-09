import React from 'react';
import Task from '../entities/task'


const AddTask = ({ tasks, addTaskClick }) => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        let text = e.target.elements["input"].value;
        if (text && tasks.filter(task => task.text === text).length === 0)
          addTaskClick(new Task(text));
      }}>
        <input name="input"></input>
        <button type="submit">Add task</button>
      </form>
    </div >
  );
}


export default AddTask;