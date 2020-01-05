import React from 'react';
import TaskItem from './taskItem';
import Task from '../entities/task';
import reg from '../communicatorRegistry';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [new Task("pizza"), new Task("finish react course")]
        };
        reg.registerAction(this.concatTask, this);
    }

    componentWillReceiveProps(props) {
        this.setState({ tasks: props.tasks })
    }

    concatTask(task) {
        console.log(task);
        let tasks = this.state.tasks;
        if (!tasks.some(iTask => iTask.text === task.text))
            this.setState({ tasks: tasks.concat(task) });
    }


    render() {
        return (
            <div>
                <ul>
                    {this.printTasks(this.state.tasks)}
                </ul>
            </div>
        );
    }

    printTasks(list) {
        return list.map((task, index) => {
            return ((
                <TaskItem
                    task={task}
                    key={index}
                    toggleCrossTask={this.toggleCrossTask}
                    deleteTask={this.deleteTask}
                    toggleEditMode={this.toggleEditMode}
                    updateTaskText={this.updateTaskText}
                >
                </TaskItem>
            ))
        });
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
        tasks.forEach(iTask => {
            if (iTask.text === task.text)
                iTask.text = text;
        });
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