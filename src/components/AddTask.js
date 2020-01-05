import React from 'react';
import Task from '../entities/task';
import reg from '../communicatorRegistry';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskText: '' };
  }

  render() {
    return (
      <div>
        <input onChange={this.handleTaskInputChange}></input>
        <br></br>
        <button onClick={this.handleAddTaskClick.bind(this)}>Add task</button>
      </div>);
  }

  handleTaskInputChange = (event) => {
    this.setState({ taskText: event.target.value })
  }

  handleAddTaskClick() {
    reg.action('concatTask', new Task(this.state.taskText));
  }
}

export default AddTask;