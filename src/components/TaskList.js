import React from 'react';
import TaskItem from './taskItem';
import Task from '../entities/task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasksList;
        this.updateAppWithNewPropsCallBack = this.props.updateAppWithNewPropsCallBack;
        this.tasks.push(new Task("buy pizza"), new Task("kloopi"), new Task("groopi"));
    }

    componentWillReceiveProps(props) {
        this.tasks = props.tasksList;
    }

    render() {
        let result = this.printTasks(this.tasks);
        return (
            <div>
                <ul>
                    {result}
                </ul>
            </div>
        );
    }

    componentDidUpdate(){
        console.log(this.tasks);
    }

    printTasks(list) {
        return list.map((task, index) => {
            return (<TaskItem key={index} id={index} deleteCallback={this.deleteTask.bind(this)} task={task}></TaskItem>)
        });
    }

    deleteTask(elID) {
        this.tasks = this.tasks.filter((ele) => {return ele !== elID})
        this.forceUpdate();
        
        // this.updateAppWithNewPropsCallBack(
        //     this.tasks.filter((el, index) => index !== elID));
    }
}
export default TaskList;