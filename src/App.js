import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
class App extends React.Component {
  tasks = [];
  constructor(props) {
    super(props);
    this.pushTask = this.pushTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  render() {
    return <div>
      <AddTask addTaskCallback={this.pushTask}></AddTask>
      <TaskList tasksList={this.tasks} remove={this.removeTask}></TaskList>
    </div>
  }
  pushTask(task) {
    if (task)
      this.tasks.push(task);
    
    this.forceUpdate();
  }
  removeTask(task){
    
    if(task){
    let index = this.tasks.findIndex((t)=>t.text === task.text)
     if(this.tasks[index])
         this.tasks[index].toggleDone();
      console.log(this.tasks);
    }
    this.forceUpdate();
  }
  
}

export default App;