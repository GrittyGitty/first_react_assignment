import React from 'react';
import Task from './entities/task';
import connect from './connections/addTaskConnect'
class AddTask extends React.Component {
  task_text = '';
  constructor(props) {
    super(props);
    this.addSome = props.addSome;
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
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
   
    this.addSome(new Task(this.task_text));
  }
}
export default connect(AddTask);