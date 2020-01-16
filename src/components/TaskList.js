import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasksList: props.tasksList };
    this.deleteTaskCallback = props.deleteTaskCallback;
    this.suDeleteTaskCallback = props.suDeleteTaskCallback;
    this.deleteTaskFromApp = this.deleteTaskFromApp.bind(this);
  }

  render() {
    return (
      <div>
        <ul>{this.printTasks(this.state.tasksList)}</ul>
      </div>
    );
  }

  static getDerivedStateFromProps(props, state) {    
    if (props.tasksList !== state.tasksList) {
      return {
        tasksList: props.tasksList
      };
    }
    else return null;
  }

  printTasks(list) {
    let elements = [];
    for (let task of list) {
      elements.push(
        <TaskItem
          key={task.text}
          handleDelete={this.props.handleDelete}
          handleInputChange={this.props.handleInputChange}
          task={task}
        ></TaskItem>
      );
    }
    return elements;
  }

  deleteTaskFromApp(text) {
    let newHobbieList = this.state.tasksList.filter(hobbie => {
      return hobbie.text !== text;
    });
    this.setState({ tasksList: newHobbieList });
  }
}

export default TaskList;
