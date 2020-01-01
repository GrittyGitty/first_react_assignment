class Task {
    constructor(text = "") {
        this.text = text;
        this.isDone = false;
        this.isDeleted = false;
    }
    toggleDone() {
        this.isDone = !this.isDone;
        console.log("toggling!!!"+this.text);
    }
}

export default Task;