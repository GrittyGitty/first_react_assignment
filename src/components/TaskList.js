import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';


class TaskList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map((task, index) => {
                            return (
                                <TaskItem
                                    key={index}
                                    task={task}
                                    onCrossClick={this.props.onCrossClick}
                                    onDelClick={this.props.onDelClick}
                                    onTaskDblClick={this.props.onTaskDblClick}
                                    onEditInputEnterClick={this.props.onEditInputEnterClick}
                                ></TaskItem>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onCrossClick: (task) => { return { type: "TOGGLE_CROSS_TASK", payload: task } },
    onDelClick: (task) => ({ type: "REMOVE_TASK", payload: task }),
    onTaskDblClick: (task) => ({ type: "TOGGLE_EDIT_MODE", payload: task }),
    onEditInputEnterClick: (task, text) => ({ type: "UPDATE_TASK", payload: { task, text } })
};


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);





