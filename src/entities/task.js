class Task {
    constructor(text = "") {
        this.text = text;
        this.isDone = false;
        this.dblClicked = false;
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
    toggleDblClicked() {
        this.dblClicked = !this.dblClicked;
    }
}

export default Task;