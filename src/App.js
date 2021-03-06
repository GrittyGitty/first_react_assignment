import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
class App extends React.Component {
  tasks = [];
  constructor(props) {
    super(props);
    this.pushTask = this.pushTask.bind(this);
  }
  render() {
    return <div>
      <AddTask addTaskCallback={this.pushTask}></AddTask>
      <TaskList tasksList={this.tasks}></TaskList>
    </div>
  }
  pushTask(task) {
    if (task)
      this.tasks.push(task);
    
    this.forceUpdate();
  }

}

export default App;