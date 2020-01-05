let registry = {};

function registerAction(callback, bindToThis) {
    registry[callback.name] = bindToThis ? callback.bind(bindToThis) : callback;
}


function action(actionName, payload) {
    if (registry[actionName]) {
        registry[actionName](payload);
    }
}

export default { registerAction, action };