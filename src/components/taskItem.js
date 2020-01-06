import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: props.task }
        this.onCrossClickCallback = props.onCrossClick;
        this.onDelClickCallback = props.onDelClick;
        this.onTaskDblClickCallback = props.onTaskDblClick;
        this.onEditInputEnterClickCallback = props.onEditInputEnterClick;
    }

    componentWillReceiveProps(props) {
        this.setState({ task: props.task });
    }

    render() {
        let task = this.state.task;

        let taskModule =
            task.dblClicked ?
                (<input
                    autoFocus
                    placeholder="edit task..."
                    onKeyDown={this.checkForEnter.bind(this)}>
                </input>) :
                (<span>
                    <span
                        onDoubleClick={this.onTaskDblClick.bind(this)}>
                        {task.isDone ?
                            (<del>{task.text}</del>) :
                            task.text}
                    </span>
                    <button
                        className="listDelButton"
                        onClick={this.onCrossClick.bind(this)}>
                        <del>done</del>
                    </button>
                </span>);
        let deleteButton = (
            <button
                onClick={this.onDelClick.bind(this)}
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

    checkForEnter(event) {
        if (event.key === 'Enter')
            this.onEditInputEnterClickCallback(this.state.task, event.target.value);
    }

    onTaskDblClick() {
        this.onTaskDblClickCallback(this.state.task);
    }

    onCrossClick() {
        this.onCrossClickCallback(this.state.task);
    }

    onDelClick() {
        this.onDelClickCallback(this.state.task);
    }
}


export default TaskItem;

