import React, { useDebugValue } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
class App extends React.Component {
  tasks = [];
  constructor(props) {
    super(props);
    this.pushTask = this.pushTask.bind(this);
  }

  componentWillReceiveProps(props) {
    this.tasks = props.tasks;
  }

  render() {
    return (
      <div>
        <AddTask addTaskCallback={this.pushTask}></AddTask>
        <TaskList
          tasksList={this.tasks}
          propagateToApp={this.deleteTask.bind(this)}
        >
        </TaskList>
      </div>
    );
  }

  deleteTask(delTask) {
    this.tasks = this.tasks.filter(task => task !== delTask);
    this.forceUpdate();
  }

  pushTask(task) {
    if (task)
      this.tasks.push(task);
    this.forceUpdate();
  }

  updateTasks(tasks) {
    this.tasks = tasks;
    this.forceUpdate();
  }
}

export default App;