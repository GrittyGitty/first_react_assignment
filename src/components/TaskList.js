import React from 'react';
import TaskItem from './taskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = this.props.tasksList;
        this.propagateToApp = this.props.propagateToApp;
    }

    componentWillReceiveProps(props) {
        this.tasks = props.tasksList;
    }

    render() {
        let result = this.printTasks(this.tasks);
        return (
            <div>
                <ul>
                    {result}
                </ul>
            </div>
        );
    }


    printTasks(list) {
        return list.map((task, index) => {
            return ((
                <TaskItem
                    key={index}
                    id={index}
                    propagateToApp={this.propagateToApp}
                    toggleSoftDeleteCallback={this.toggleSoftDeleteTask.bind(this)}
                    task={task}>
                </TaskItem>
            ))
        });
    }


    toggleSoftDeleteTask(crossTask) {
        this.tasks
            .filter(task =>
                task === crossTask)
            .forEach(task =>
                task.isDone = !task.isDone);
        this.forceUpdate();
    }
}
export default TaskList;