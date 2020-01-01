import React from 'react';
import Task from '../entities/task'

export default class AddTask extends React.Component {
  task_text = '';

  constructor(props) {
    super(props);
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    this.addTaskCallback = props.addTaskCallback;
  }

  render() {
    return <div>
      <input onChange={this.handleTaskInputChange} id="task_input" type="text"></input>
      <br></br>
      <button onClick={this.handleAddTaskClick}>Add task</button>
    </div>
  }

  handleTaskInputChange(event) {
    this.task_text = event.target.value;
  }

  handleAddTaskClick() {
    if (this.addTaskCallback) {
      let task = new Task(this.task_text);
      this.addTaskCallback(task); // (push task)
    }
  }
}