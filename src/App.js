import React from 'react';
import ReactDOM from 'react';
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

    let taskList = React.createElement(TaskList, {
      tasks: this.state.tasks,
      propagateHardDeleteToApp: this.deleteTask,
      propagateToggleEditModeToApp: this.toggleEditMode,
      propagateTaskTextUpdateToApp: this.updateTaskText,
      propagateToggleSoftDeleteToApp: this.toggleCrossTask
    });

    let statusBar = React.createElement(StatusBar, {
      tasks: this.state.tasks
    });

    let addTask = React.createElement(AddTask, {
      concatTaskCallback: this.concatTaskCallback.bind(ReactDOM.render(taskList))
    });

    return (
      <div>
        {statusBar}
        {addTask}
        {taskList}
      </div>
    );
  }


  concatTaskCallback(task) {
    this.concatTask(task);
  }


  deleteTask = (delTask) => {
    this.setState({
      tasks: this.state.tasks.slice().filter(iTask =>
        iTask.text !== delTask.text)
    });
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

  toggleCrossTask = (task) => {
    let tasks = this.state.tasks.slice();
    tasks.forEach(iTask => {
      if (iTask.text === task.text)
        iTask.isDone = !iTask.isDone;
    });
    this.setState({ tasks: tasks });
  }
}

export default App;