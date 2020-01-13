import defaultState from './deafultState';
export default function taskList(state = defaultState, action) {
    function isTaskAlreadyExictent(text){
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].text === text) {
                return true;
            }
        }
        return false;
    }
    switch (action.type) {
        case "ADD_TASK": {
            console.log("in action!-ADD_TASK");
            if(!isTaskAlreadyExictent(action.payload.text))
               return { items: [...state.items, action.payload] }
            return state;
        }
        case "REMOVE_TASK": {
            console.log("in action!-REMOVE_TASK");
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].text === (action.payload).text) {
                    state.items = state.items.slice(0, i).concat(state.items.slice(i + 1));
                    break;
                }
            }
            console.log(state.items)
            return { items: state.items }
        }
        case "TASK_DONE": {
            console.log("in action!-TASK_DONE");
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].text === (action.payload).text) {
                    state.items[i].toggleDone();
                }
            }
            console.log(state.items);
            return {
                items: [
                    ...state.items
                ]
            }
        }
        case "UPDATE_TASK":{
            console.log("in action!-UPDATE_TASK");
            if(!isTaskAlreadyExictent(action.payload.newText)){
                for (let i = 0; i < state.items.length; i++) {
                    if (state.items[i].text === (action.payload).task.text) {
                        state.items[i].text = action.payload.newText;
                    }
                }

            }
            
            return {items:[...state.items]}
        }
        default:
            return state
    }

}