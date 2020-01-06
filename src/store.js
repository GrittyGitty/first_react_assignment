import { createStore } from "redux";
import Task from './entities/task'

const initialTasks = {tasks : [new Task("finding apartment"),
new Task("sports"),
new Task("eating breakfast")
]}

const store = createStore((state = initialTasks, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TASK':
            return {tasks:[...state.tasks, action.payload]};
        case 'REMOVE_TASK':
            return state.filter(car => action.payload !== car.id);
        default:
            return state
    }
});

export default store;