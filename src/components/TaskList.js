import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasksList: props.tasksList };
        this.deleteTaskCallback = props.deleteTaskCallback;
        this.suDeleteTaskCallback = props.suDeleteTaskCallback;
        this.deleteTaskFromApp = this.deleteTaskFromApp.bind(this);

    }

    render() {
        return <div>
            <ul>
                {this.printTasks(this.state.tasksList)}
            </ul>
        </div>
    }

    printTasks(list) {
        let elements = [];
        for (let task of list) {
            elements.push(<TaskItem key={"item" + list.indexOf(task)}
                deleteTaskCallback={this.deleteTaskFromApp} text={task.text} task={task}></TaskItem>);
        }
        return elements;
    }

    deleteTaskFromApp(text) {
        console.log('hey from delte task from app');


        let newHobbieList = this.state.tasksList.filter(hobbie => {
            return hobbie.text !== text;
        });
        console.log(newHobbieList);

        this.setState({ tasksList: newHobbieList });
        console.log(this.state.tasksList);

        // this.props.suDeleteTaskCallback(task);
    }
}

export default TaskList;