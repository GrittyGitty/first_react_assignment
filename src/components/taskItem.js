import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.task = this.props.task;
        this.propagateToTaskList = this.props.propagateToApp;
        this.toggleSoftDeleteMe = this.props.toggleSoftDeleteCallback;
        this.id = this.props.id;
    }

    componentWillReceiveProps(props) {
        this.task = props.task;
    }

    render() {
        let crossedOrUncrossed = this.task.isDone ?
            (<del>{this.task.text}</del>) :
            this.task.text;
        let allTextElement = (
            <span
                onClick={this.toggleSoftDeleteMiddleware.bind(this)}>
                {crossedOrUncrossed}
            </span>);

        let deleteButton = (
            <button
                onClick={this.propagateToTaskListMiddleware.bind(this)}
                className="listDelButton">
                delete me
            </button>
        );
        return (
            <li>
                <div>
                    {allTextElement}
                    {deleteButton}
                </div>
            </li>
        );
    }

    toggleSoftDeleteMiddleware() {
        this.toggleSoftDeleteMe(this.task);
    }

    propagateToTaskListMiddleware() {
        this.propagateToTaskList(this.task);
    }

}

export default TaskItem;