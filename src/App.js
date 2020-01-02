import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Task from './entities/task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [new Task("pizza"), new Task("finish react course")];
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
          propagateHardDeleteToApp={this.deleteTask.bind(this)}
          propagateToggleEditModeToApp={this.toggleEditMode.bind(this)}
          propagateTaskTextUpdateToApp={this.updateTaskText.bind(this)}
          propagateToggleSoftDeleteToApp={this.toggleSoftDelete.bind(this)}
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

  toggleEditMode(task) {
    task.dblClicked = !task.dblClicked;
    this.forceUpdate();
  }

  updateTaskText(text, task) {
    task.text = text;
    task.dblClicked = false;
    task.isDone = false;
    this.forceUpdate();
  }

  toggleSoftDelete(task) {
    task.isDone = !task.isDone;
    this.forceUpdate();
  }

}

export default App;