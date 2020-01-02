import React from 'react';
import TaskItem from './taskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks : this.props.tasksList}
        this.propagateHardDeleteToApp = this.props.propagateHardDeleteToApp;
        this.propagateToggleEditModeToApp = this.props.propagateToggleEditModeToApp;
        this.propagateTaskTextUpdateToApp = this.props.propagateTaskTextUpdateToApp;
        this.propagateToggleSoftDeleteToApp = this.props.propagateToggleSoftDeleteToApp;
    }

    componentWillReceiveProps(props) {
        this.setState({tasks : props.tasksList})
    }

    render() {
        let result = this.printTasks(this.state.tasks);
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
                    task={task}
                    key={index}
                    id={index}
                    propagateSoftDeleteToTaskList={this.propagateToggleSoftDeleteToApp}
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