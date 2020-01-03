import React from 'react';
import TaskItem from './taskItem';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasksList;
        this.remove = props.remove;
    }

    componentWillReceiveProps(props) {
        this.tasks = props.tasksList;
        this.forceUpdate();
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
        // console.log(list);
        for (let task of list) {
                elements.push(<TaskItem task={task} remove={this.remove}></TaskItem>);
        }
        return elements;
    }
}
export default TaskList;