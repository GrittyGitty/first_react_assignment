import React from 'react';
import TaskItem from './taskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks }
        this.propagateHardDeleteToApp = props.propagateHardDeleteToApp;
        this.propagateToggleEditModeToApp = props.propagateToggleEditModeToApp;
        this.propagateTaskTextUpdateToApp = props.propagateTaskTextUpdateToApp;
        this.propagateToggleSoftDeleteToApp = props.propagateToggleSoftDeleteToApp;
    }

    componentWillReceiveProps(props) {
        this.setState({ tasks: props.tasks })
    }


    concatTask (task) {
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
                    propagateSoftDeleteToApp={this.propagateToggleSoftDeleteToApp}
                    propagateHardDeleteToApp={this.propagateHardDeleteToApp}
                    propagateToggleEditModeToApp={this.propagateToggleEditModeToApp}
                    propagateTaskTextUpdateToApp={this.propagateTaskTextUpdateToApp}
                >
                </TaskItem>
            ))
        });
    }
}
export default TaskList;