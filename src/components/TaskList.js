import React from 'react';
import TaskItem from './taskItem';
import Task from '../entities/task';
import reg from '../communicatorRegistry';
import StatusBar from './StatusBar';
import AddTask from './AddTask';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [new Task("pizza"), new Task("finish react course")]
        };
    }

    componentDidMount() {
        reg.registerAction(this.concatTask, this);
    }

    componentDidUpdate() {
        reg.action('updateStatusBar', this.state.tasks);
    }

    render() {
        return (
            <div>
                <StatusBar tasks={this.state.tasks}></StatusBar>
                <AddTask></AddTask>
                <ul>
                    {this.state.tasks.map((task, index) => {
                        return ((
                            <TaskItem
                                task={task}
                                key={index}
                                toggleCrossTask={this.toggleCrossTask.bind(this)}
                                deleteTask={this.deleteTask.bind(this)}
                                toggleEditMode={this.toggleEditMode.bind(this)}
                                updateTaskText={this.updateTaskText.bind(this)}
                            >
                            </TaskItem>
                        ))
                    })}
                </ul>

            </div>
        );
    }


    concatTask(task) {
        let tasks = this.state.tasks;
        if (!tasks.some(iTask => iTask.text === task.text))
            this.setState({ tasks: tasks.concat(task) });
    }

    deleteTask(delTask) {
        this.setState({
            tasks: this.state.tasks.slice().filter(iTask =>
                iTask.text !== delTask.text)
        });
    }

    toggleEditMode(task) {
        let tasks = this.state.tasks.slice();
        tasks.forEach(iTask => {
            if (iTask.text === task.text)
                iTask.dblClicked = !iTask.dblClicked;
        });
        this.setState({ tasks: tasks });
    }

    updateTaskText(text, task) {
        let tasks = this.state.tasks.slice();
        let switchIndex = -1;
        tasks.forEach((iTask, index) => {
            if (iTask.text === task.text)
                switchIndex = index;
        });
        tasks.splice(switchIndex, 1, new Task(text));
        this.setState({ tasks: tasks });
    }

    toggleCrossTask(task) {
        let tasks = this.state.tasks.slice();
        tasks.forEach(iTask => {
            if (iTask.text === task.text)
                iTask.isDone = !iTask.isDone;
        });
        this.setState({ tasks: tasks });
    }
}
export default TaskList;