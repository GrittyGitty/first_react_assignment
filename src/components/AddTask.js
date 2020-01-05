import React from 'react';
import Task from '../entities/task'

export default class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.concatTaskCallback = props.concatTaskCallback;
    this.state = { taskText: '' };

  }

  render() {
    return <div>
      <input onChange={this.handleTaskInputChange} id="task_input" type="text"></input>
      <br></br>
      <button onClick={this.handleAddTaskClick}>Add task</button>
    </div>
  }

  handleTaskInputChange = (event) => {
    this.setState({ taskText: event.target.value })
  }

  handleAddTaskClick = () => {
    this.concatTaskCallback(new Task(this.state.taskText));
  }
}