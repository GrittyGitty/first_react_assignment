class Task {
    constructor(text = "") {
        this.text = text;
        this.isDone = false;
        this.key= '';
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Task;