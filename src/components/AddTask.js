import React from 'react';
import Task from '../entities/task'


const AddTask = ({ tasks, addTaskClick }) => {
  const submit = (e) => {
    e.preventDefault();
    let text = e.target.elements["input"].value;
    if (text && tasks.filter(task => task.text === text).length === 0)
      addTaskClick(new Task(text));
  }

  return (
    <form className="addTask" onSubmit={submit}>
      <input name="input"></input>
      <button type="submit">Add task</button>
    </form>
  );
}


export default AddTask;