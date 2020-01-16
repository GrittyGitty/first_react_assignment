class Task {
    constructor(text = "", isDone = false) {
        this.text = text;
        this.isDone = isDone;
        
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Task;