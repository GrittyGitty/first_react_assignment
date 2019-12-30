class Task {
    constructor(text = "") {
        this.text = text;
        this.isDone = false;
        
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Task;