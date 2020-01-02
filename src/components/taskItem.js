import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.task = this.props.task;
        this.id = this.props.id;

        this.propagateHardDeleteToTaskList = this.props.propagateHardDeleteToApp;
        this.propagateSoftDeleteToApp = this.props.propagateSoftDeleteToTaskList
        this.propagateToggleEditModeToTaskList = this.props.propagateToggleEditModeToApp;
        this.propagateTaskTextUpdateToApp = this.props.propagateTaskTextUpdateToApp;
    }

    componentWillReceiveProps(props) {
        this.task = props.task;
    }

    render() {
        let module =
            this.task.dblClicked ?
                (<input
                    id="edit"
                    type="text"
                    placeholder="edit task..."
                    onKeyDown={this.checkForEnter.bind(this)}>
                </input>) :
                (<span>
                    <span
                        id="content"
                        onDoubleClick={this.editMode.bind(this)}>
                        {this.task.isDone ?
                            (<del>{this.task.text}</del>) :
                            this.task.text}
                    </span>
                    <button
                        id="cross"
                        className="listDelButton"
                        onClick={this.crossText.bind(this)}>
                        <del>done</del>
                    </button>
                </span>);

        let deleteButton = (
            <button
                id="delButton"
                onClick={this.hardDelete.bind(this)}
                className="listDelButton">
                🗑️
            </button>
        );

        return (
            <li>
                <span>
                    {module}
                    {deleteButton}
                </span>
            </li>
        );
    }

    checkForEnter(event) {
        if (event.key === 'Enter')
            this.propagateTaskTextUpdateToApp(event.target.value, this.task)

    }

    editMode() {
        this.propagateToggleEditModeToTaskList(this.task);
    }

    crossText() {
        this.propagateSoftDeleteToApp(this.task);
    }

    hardDelete() {
        this.propagateHardDeleteToTaskList(this.task);
    }
}

export default TaskItem;