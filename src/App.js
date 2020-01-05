import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Task from './entities/task';
import StatusBar from './components/StatusBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [new Task("pizza"), new Task("finish react course")];
    this.state = {
      tasks: [new Task("pizza"), new Task("finish react course")]
    }
  }

  render() {
    return (
      <div>
        <StatusBar tasks={this.state.tasks}></StatusBar>
        <AddTask addTaskCallback={this.concatTask}></AddTask>
        <TaskList
          tasks={this.state.tasks}
          propagateHardDeleteToApp={this.deleteTask}
          propagateToggleEditModeToApp={this.toggleEditMode}
          propagateTaskTextUpdateToApp={this.updateTaskText}
          propagateToggleSoftDeleteToApp={this.toggleCrossTask}
        >
        </TaskList>
      </div>
    );
  }

  concatTask = (task) => {
    let tasks = this.state.tasks;
    if (task && !tasks.some(iTask => iTask.text === task.text))
      this.setState({ tasks: tasks.concat(task) });
  }

  toggleEditMode = (task) => {
    let tasks = this.state.tasks.slice();
    tasks.forEach(iTask => {
      if (iTask.text === task.text)
        iTask.dblClicked = !iTask.dblClicked;
    });
    this.setState({ tasks: tasks });
  }

  updateTaskText = (text, task) => {
    let tasks = this.state.tasks.slice();
    tasks.forEach(iTask => {
      if (iTask.text === task.text)
        iTask.text = text;
    });
    this.setState({ tasks: tasks });
  }

  deleteTask = (delTask) => {
    this.setState({
      tasks: this.state.tasks.slice().filter(iTask =>
        iTask.text !== delTask.text)
    });
  }

  toggleCrossTask = (task) => {
    let tasks = this.state.tasks.slice();
    tasks.forEach(iTask => {
      if (iTask.text === task.text)
        iTask.isDone = !iTask.isDone
    });
    this.setState({ tasks: tasks });
  }
}

export default App;