import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pushTask = this.pushTask.bind(this);
    this.state = { tasks: [] };
  }

  render() {
    return <div>
      <AddTask addTaskCallback={this.pushTask}></AddTask>
      <TaskList tasksList={this.state.tasks}></TaskList>
    </div>
  }

  pushTask(task) {
    if (task) {
      let tasks = this.state.tasks;
      tasks.push(task);
      task.key = task.text + tasks.indexOf(task);
      this.setState({ tasks: tasks });
    }
  }
}

export default App;