import React from 'react';

export default class DoneButton extends React.Component {
    constructor(props){
        super(props);
        // this.taskDone = this.taskDone.bind(this);
        this.text = '✔️';
    }
    render(){
        return <div>
            <button onClick={this.taskDone}>{this.text}</button>
        </div>
    }
    taskDone(){
        
    }
}