import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasksList: props.tasksList };
        this.deleteTask = this.deleteTask.bind(this);
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.tasksList !== nextProps.tasksList)
            return { tasks: nextProps.tasksList }
        else
            return null;
    }

    render() {
        return <div>
            <ul>
                {this.renderTasks(this.state.tasksList)}
            </ul>
        </div>
    }

    renderTasks(list) {
        let elements = [];
        for (let i = 0; i < list.length; i++) {
            elements.push(<TaskItem key={"item" + i}
                deleteTaskCallback={this.deleteTask} text={list[i].text} task={list[i]}></TaskItem>);
        }
        return elements;
    }

    deleteTask(taskToDelete) {
        let tasks = this.state.tasksList.filter(task => {
            return task.key !== taskToDelete.key;
        });
        this.setState({tasksList: tasks});
    }
}

export default TaskList;