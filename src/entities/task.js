class Task {
    constructor(text = "", isDone = false, dblClicked = false) {
        this.text = text;
        this.isDone = isDone;
        this.dblClicked = dblClicked;
    }
}

export default Task;