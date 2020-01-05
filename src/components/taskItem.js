import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: props.task };
        this.deleteTaskCallback = props.deleteTask;
        this.crossTaskCallBack = props.toggleCrossTask;
        this.toggleEditModeCallback = props.toggleEditMode;
        this.taskTextUpdateCallback = props.updateTaskText;
    }

    componentWillReceiveProps(props) {
        this.setState({ task: props.task });
    }

    render() {
        let { text, isDone, dblClicked } = this.state.task;

        let taskModule =
            dblClicked ?
                (<input
                    autoFocus
                    placeholder="edit task..."
                    onKeyDown={this.checkForEnter}>
                </input>) :
                (<span>
                    <span
                        onDoubleClick={this.editMode}>
                        {isDone ?
                            (<del>{text}</del>) :
                            text}
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
            this.taskTextUpdateCallback(event.target.value, this.state.task);
        }
    }

    editMode = () => {
        this.toggleEditModeCallback(this.state.task);
    }

    crossText = () => {
        this.crossTaskCallBack(this.state.task);
    }

    hardDelete = () => {
        this.deleteTaskCallback(this.state.task);
    }
}

export default TaskItem;