import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pushTask = this.pushTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = { tasks: [] };
  }

  render() {  
    return <div>
      <AddTask addTaskCallback={this.pushTask}></AddTask>
      <TaskList tasksList={this.state.tasks} suDeleteTaskCallback={this.deleteTask}></TaskList>
    </div>
  }

  pushTask(task) {
    if (task){
      this.state.tasks.push(task);
      this.setState(this.state);
      console.log(this.state);
      
      // this.setState({tasks: this.state.tasks.concat(task)});
      // const oldTasks = this.state.tasks; 
      // this.setState({ tasks: oldTasks.concat(task) });
    }
  }

  deleteTask(task) {
    let index = this.state.tasks.indexOf(task);
    if (index !== -1) {      
      this.state.tasks.splice(index, 1);
      this.setState({ tasks: this.state.tasks });
    } 
  }
}

export default App;