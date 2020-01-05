import React from 'react';
import TaskItem from './TaskItem';
import Task from '../entities/task';
import DoneButton from './DoneButton';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasksList;
        this.toggleTaskByText = this.toggleTaskByText.bind(this);
       // this.tasks.push(new Task("buy pizza"));
    }

    componentWillReceiveProps(props) {
        this.tasks = props.tasksList;
        this.setState(this.state);
    }

    render() {
        return <div>
            <ul>
                {this.printTasks(this.tasks)}
            </ul>
        </div>
    }

    printTasks(list) {
        let elements = [];
        for (let task of list) {
            elements.push(<TaskItem text={task.text}></TaskItem>);
        }
        return elements;
    }



    toggleTaskByText(event) {
        console.log(event.target);
        let text = "a";
        for (let task of this.tasks) {
            if (task.text === text) {
                task.toggleTaskByText();
            }
        }
        this.setState(this.state);
    }

    getTaskText(task) {
        if (task.isDone) {
            return <p><del>{task.text}</del></p>
        }
        else {
            return <p>{task.text}</p>
        }
    }

}
export default TaskList;