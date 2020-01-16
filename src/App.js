import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Task from "./entities/task";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.pushTask = this.pushTask.bind(this);
    this.handleInputChangeCallBack = this.inputChangeCallBack.bind(this);
    this.deleteTaskCallBack = this.deleteTaskCallBack.bind(this);
  }

  render() {
    return (
      <div>
        <AddTask addTaskCallback={this.pushTask}></AddTask>
        <TaskList
          tasksList={this.state.tasks}
          handleInputChange={this.inputChangeCallBack}
          handleDelete={this.deleteTaskCallBack}
        ></TaskList>
      </div>
    );
  }

  pushTask(task) {
    const contains = this.state.tasks.filter(
      curTask => curTask.text === task.text
    );
    if (contains.length > 0) {
      return alert("Can't add the same task");
    }
    let newTasks = this.state.tasks;
    newTasks.push(task);
    this.setState({tasks: newTasks});
  }

  deleteTaskCallBack(task){
    const index = this.state.tasks.indexOf(task);
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({tasks: newTasks});
  }

  inputChangeCallBack(task, newText) {
    const index = this.state.tasks.indexOf(task);
    let newTask = new Task(newText, task.isDone);
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1, newTask);
    this.setState({tasks: newTasks});  
  }


}

export default App;
