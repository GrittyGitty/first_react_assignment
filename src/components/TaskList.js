import React from 'react';
import TaskItem from './taskItem';
import connect from './connections/taskListConnect';
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.printTasks = this.printTasks.bind(this);
    }

    componentWillReceiveProps(props) {
        this.tasks = props.items;
        this.forceUpdate();
    }
    render(){
            return <div>
                <ul>
                    {this.printTasks(this.props.items)}
                </ul>
            </div>
    }
    printTasks(list){
        let elements = [];
        // console.log(list);
        for (let task of this.props.items) {
            elements.push(<TaskItem task={task} key={task.text}></TaskItem>);                
        }
        return elements;
    }
}

export default connect(TaskList);