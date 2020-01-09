import React from 'react';


const TaskItem = ({ task, onCrossClick, onDelClick, onTaskDblClick, onEditInputEnterClick }) => {
    let taskModule = task.dblClicked ?
        (<input autoFocus placeholder="edit task..." onKeyDown={checkForEnter}/>) :
        (<span>
            <span
                onDoubleClick={() => { onTaskDblClick(task) }}>
                {task.isDone ?
                    (<del>{task.text}</del>) :
                    task.text}
            </span>
            <button
                className="listDelButton"
                onClick={ () => {onCrossClick(task)}}>
                <del>done</del>
            </button>
        </span>);
    let deleteButton = (
        <button
            onClick={() => {onDelClick(task)}}
            className="listDelButton">
            🗑️
        </button>
    );


    function checkForEnter(e) {
        if (e.key === 'Enter')
            onEditInputEnterClick(task, e.target.value);
    }

    return (
        <div>
            {taskModule}
            {deleteButton}
        </div>
    );
}


export default TaskItem;

