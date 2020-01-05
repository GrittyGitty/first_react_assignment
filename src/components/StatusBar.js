import React from 'react';
import reg from '../communicatorRegistry';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        reg.registerAction(this.updateStatusBar, this);
        this.state = {
            tasks: props.tasks
        }
    }

    // componentWillReceiveProps(tasks) {
    //     this.setState({tasks:tasks})
    // }

    updateStatusBar(tasks) {
        this.setState({ tasks: tasks });
    }

    render() {
        let { done, undone } = this.getComputedDoneTasks();
        return <div>
            <br></br>
            Number of tasks: {this.state.tasks.length} |

            Number of completed tasks: {done} |

            Number of uncomplete tasks: {undone}
            <br></br>
            <br></br>
        </div>
    }

    getComputedDoneTasks() {
        let done = this.state.tasks.filter(task => task.isDone).length;
        let undone = this.state.tasks.length - done;
        return { done, undone };
    }
}

export default StatusBar;