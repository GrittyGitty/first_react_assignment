import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
        this.onCrossClick = props.onCrossClick;
        this.onDelClick = props.onDelClick;
        this.onTaskDblClick = props.onTaskDblClick;
        this.onEditInputEnterClick = props.onEditInputEnterClick
    }

    componentWillReceiveProps(props) {
        this.setState({ tasks: props.tasks })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.printTasks(this.state.tasks)}
                </ul>
            </div>
        )
    }

    printTasks(list) {
        return list.map((task, index) => {
            return ((
                <TaskItem
                    key={index}
                    task={task}
                    onCrossClick={this.onCrossClick}
                    onDelClick={this.onDelClick}
                    onTaskDblClick={this.onTaskDblClick}
                    onEditInputEnterClick={this.onEditInputEnterClick}
                ></TaskItem>
            ))
        });
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onCrossClick: (task) => {
            dispatch({ type: "TOGGLE_CROSS_TASK", payload: task });
        },
        onDelClick: (task) => {
            dispatch({ type: "REMOVE_TASK", payload: task });
        },
        onTaskDblClick: (task) => {
            dispatch({ type: "TOGGLE_EDIT_MODE", payload: task });
        },
        onEditInputEnterClick: (task, text) => {
            dispatch({ type: "UPDATE_TASK", payload: { task, text } })
        }
    }
}

function mapStateToProps(props) {
    return { tasks: props.tasks };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);





