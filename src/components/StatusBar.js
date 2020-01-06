import React from 'react';
import { connect } from 'react-redux';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
    }

    componentWillReceiveProps(props) {
        this.setState({ tasks: props.tasks })
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


function mapStateToProps({ tasks }) {
    return { tasks: tasks };
}


export default connect(mapStateToProps)(StatusBar);