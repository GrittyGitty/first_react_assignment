import React from 'react';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task
        };
        this.toggleDone = this.toggleDone.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteTaskCallback = props.deleteTaskCallback;
    }

    render() {
        return <li>
            <div>
                <input type='text' value={this.state.task.text} onChange={this.handleInputChange}
                    style={{ textDecoration: this.props.task.isDone ? 'line-through' : 'none' }}></input>
                <button onClick={this.toggleDone}><span>✔️</span></button>
                <button onClick={this.handleDelete} tasktext={this.state.task}><span>🗑️</span></button>
            </div>
        </li>
    }

    handleDelete(event){
        this.deleteTaskCallback(this.state.task);
    }
    handleInputChange(event) {    
        this.setState({task: {text: event.target.value}});
    }

    toggleDone() {
        let task = this.state.task;
        task.toggleDone();
        this.setState(task);
    }
}