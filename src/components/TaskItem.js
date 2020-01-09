import React from 'react';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
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
                <input type='text' value={this.state.text} onChange={this.handleInputChange}
                    style={{ textDecoration: this.props.task.isDone ? 'line-through' : 'none' }}></input>
                <button onClick={this.toggleDone}><span>✔️</span></button>
                <button onClick={this.handleDelete} tasktext={this.state.task.text}><span>🗑️</span></button>
            </div>
        </li>
    }

    handleDelete(event){
        console.log(this.state.text);
        
        this.deleteTaskCallback(this.state.text);
    }

    handleInputChange(event) {
        console.log(this.state);
        
        this.setState({text: event.target.value});
    }

    toggleDone() {
        this.props.task.toggleDone();
        this.setState(this);
    }
}