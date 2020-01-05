import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: props.task };

        this.propagateHardDeleteToTaskList = this.props.propagateHardDeleteToApp;
        this.propagateSoftDeleteToApp = this.props.propagateSoftDeleteToApp;
        this.propagateToggleEditModeToTaskList = this.props.propagateToggleEditModeToApp;
        this.propagateTaskTextUpdateToApp = this.props.propagateTaskTextUpdateToApp;
    }

    componentWillReceiveProps(props) {
        this.setState({ task: props.task });
    }

    render() {
        let taskModule =
            this.state.task.dblClicked ?
                (<input
                    placeholder="edit task..."
                    onKeyDown={this.checkForEnter}>
                </input>) :
                (<span>
                    <span
                        onDoubleClick={this.editMode}>
                        {this.state.task.isDone ?
                            (<del>{this.state.task.text}</del>) :
                            this.state.task.text}
                    </span>
                    <button
                        className="listDelButton"
                        onClick={this.crossText}>
                        <del>done</del>
                    </button>
                </span>);

        let deleteButton = (
            <button
                onClick={this.hardDelete}
                className="listDelButton">
                🗑️
            </button>
        );

        return (
            <li>
                <span>
                    {taskModule}
                    {deleteButton}
                </span>
            </li>
        );
    }

    checkForEnter = (event) => {
        if (event.key === 'Enter') {
            this.propagateTaskTextUpdateToApp(event.target.value, this.state.task)
            this.editMode();
        }
    }

    editMode = () => {
        this.propagateToggleEditModeToTaskList(this.state.task);
    }

    crossText = () => {
        this.propagateSoftDeleteToApp(this.state.task);
    }

    hardDelete = () => {
        this.propagateHardDeleteToTaskList(this.state.task);
    }
}

export default TaskItem;