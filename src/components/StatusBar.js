import React from 'react';


class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: props.taskList
        }
    }
    render() {
        let {done, undone} = this.getComputedDoneTasks();
        return <div>
            Number of tasks: {this.state.taskList.length}
            <br></br>
            Number of done tasks: {done}
            <br></br>
            Number of undone tasks: {undone}
        </div>
    }
    componentWillReceiveProps(props) {
        this.setState({taskList : props.taskList})
    }
    getComputedDoneTasks() {
        let done = this.state.taskList.filter(task => task.isDone).length;
        let undone = this.state.taskList.length - done;
        return {done, undone};
    }
}

export default StatusBar;