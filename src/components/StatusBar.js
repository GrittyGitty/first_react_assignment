import React from 'react';



const StatusBar = (props) => {
    let { done, undone } = props.isDoneBreakDown;
    let numOfTasks = done + undone;

    return (
        <div>
            <br></br>
            Number of tasks: {numOfTasks} |

            Number of completed tasks: {done} |

            Number of uncomplete tasks: {undone}
            <br></br>
        </div>
    );
}

export default StatusBar;