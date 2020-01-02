import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: props.task, id: props.id};

        this.propagateHardDeleteToTaskList = this.props.propagateHardDeleteToApp;
        this.propagateSoftDeleteToApp = this.props.propagateSoftDeleteToTaskList
        this.propagateToggleEditModeToTaskList = this.props.propagateToggleEditModeToApp;
        this.propagateTaskTextUpdateToApp = this.props.propagateTaskTextUpdateToApp;
    }

    componentWillReceiveProps(props) {
        this.setState({task: props.task, id: props.id});
    }

    render() {
        let module =
            this.state.task.dblClicked ?
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
                        {this.state.task.isDone ?
                            (<del>{this.state.task.text}</del>) :
                            this.state.task.text}
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
            this.propagateTaskTextUpdateToApp(event.target.value, this.state.task)

    }

    editMode() {
        this.propagateToggleEditModeToTaskList(this.state.task);
    }

    crossText() {
        this.propagateSoftDeleteToApp(this.state.task);
    }

    hardDelete() {
        this.propagateHardDeleteToTaskList(this.state.task);
    }
}

export default TaskItem;