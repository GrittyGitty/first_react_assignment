let addTaskCallback;

function setAddTaskCallback(callback) {
    addTaskCallback = callback;
}

function addTaskAction(payload){
    if(addTaskCallback){
        addTaskCallback(payload)
    }
}

export default { setAddTaskCallback, addTaskAction };