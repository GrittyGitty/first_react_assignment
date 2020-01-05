import React from 'react';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.done = false;
        this.toggleDone = this.toggleDone.bind(this);    
    }

    render() {
        console.log(this.text);
        
        return <li>
            <div>
                <label style={{textDecoration: this.done ? 'line-through' : 'none'}}>{this.text}</label>
                <button onClick={this.toggleDone}>✔️</button>
                <button onClick={this.deleteTask}>🗑️</button>
            </div>
        </li>
    }

    toggleDone(){
        this.done = !this.done;        
        this.setState(this);
    }
}