import React from 'react';
import Task from '../entities/task'
import { connect } from 'react-redux';

class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      taskText: ''
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ tasks: props.tasks })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleTaskInputChange} id="task_input" type="text"></input>
        <br></br>
        <button onClick={this.handleAddClick.bind(this)}>Add task</button>
      </div>
    );
  }

  doesTaskExist(task) {
    return this.state.tasks.some(({ text }) => text === task.text);
  }

  handleTaskInputChange = (event) => {
    this.setState({ taskText: event.target.value })
  }

  handleAddClick() {
    let newTask = new Task(this.state.taskText);
    if (!this.doesTaskExist(newTask))
      this.props.addTaskClick(new Task(this.state.taskText));
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTaskClick: (task) => {
      dispatch({ type: "ADD_TASK", payload: task });
    }
  }
}


export default connect(
  (state) => {
    return { tasks: state.tasks }
  },
  mapDispatchToProps)(AddTask)