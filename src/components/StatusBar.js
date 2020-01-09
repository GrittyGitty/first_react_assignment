import React from 'react';


const StatusBarItem = (props) => {
    return <div className="sb">{props.children}</div>
}



const StatusBar = (props) => {
    let { done, undone } = props.isDoneBreakDown;
    let numOfTasks = done + undone;

    return (
        <div className="statusBar">
            <StatusBarItem key="0">Sort By</StatusBarItem>
            <StatusBarItem key="1">Number of tasks: {numOfTasks}</StatusBarItem>
            <StatusBarItem key="2">Number of completed tasks: {done}</StatusBarItem>
            <StatusBarItem key="3">Number of incomplete tasks: {undone}</StatusBarItem>
        </div>
    );
}

export default StatusBar;