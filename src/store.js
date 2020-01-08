import { createStore } from 'redux';
import Task from './entities/task';


let initialState = {
    tasks: [
        new Task("run"),
        new Task("read a book"),
        new Task("eat pjizza"),
        new Task("elope")
    ]
};


const store = createStore((state = initialState, action) => {
    let { tasks } = state;
    let { payload, type } = action;
    console.log(tasks, payload, type);
    switch (type) {
        case "ADD_TASK":
            return Object.assign({}, state, {
                tasks: [...tasks, payload]
            });
        case "REMOVE_TASK":
            return Object.assign({}, state, {
                tasks: tasks.filter(task => task.text !== payload.text)
            });
        case "UPDATE_TASK":
            return Object.assign({}, state, {
                tasks: tasks.map(task =>
                    (task.text === payload.task.text) ?
                        new Task(payload.text) :
                        task)
            });
        case "TOGGLE_CROSS_TASK":
            return Object.assign({}, state, {
                tasks: tasks.map(task =>
                    (task.text === payload.text) ?
                        new Task(task.text, !task.isDone) :
                        task)
            });
        case "TOGGLE_EDIT_MODE":
            return Object.assign({}, state, {
                tasks: tasks.map(task =>
                    (task.text === payload.text) ?
                        task = new Task(task.text, false, !task.dblClicked) :
                        task
                )
            });
        default:
            return state;
    }
})


export default store;