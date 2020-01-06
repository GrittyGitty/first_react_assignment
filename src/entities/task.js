class Task {
    constructor(text = "", isDone = false, dblClicked = false) {
        this.text = text;
        this.isDone = isDone;
        this.dblClicked = dblClicked;
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
    toggleDblClicked() {
        this.dblClicked = !this.dblClicked;
    }
}

export default Task;