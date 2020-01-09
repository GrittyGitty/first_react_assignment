import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    let tasks = this.props.tasks;
    return (
      <div>
        <StatusBar
          isDoneBreakDown={
            tasks.reduce((acc, task) => {
              acc[task.isDone ? "done" : "undone"]++
              return acc;
            }, { done: 0, undone: 0 })
          }>
        </StatusBar>
        <AddTask
          tasks={tasks}
          addTaskClick={this.props.addTaskClick}
        ></AddTask>
        <TaskList tasks={tasks}></TaskList>
      </div>
    );
  }
}


const dispatchToProps = {
  addTaskClick: (task) => ({
    type: "ADD_TASK", payload: task
  })
};

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, dispatchToProps)(App);