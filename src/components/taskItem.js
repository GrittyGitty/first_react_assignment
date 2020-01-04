import React from 'react';

class TaskItem extends React.Component {
    text = '';
    constructor(props) {
        super(props);
        this.task = props.task;
        this.remove =props.remove;
        this.deleteMe = this.deleteMe.bind(this);
        this.changeMe = this.changeMe.bind(this);
        
    }
    render() {
     if(!this.task.isDone)
     {
        return <li>
            <div> 
               <span onInput={this.changeMe} contentEditable="true">{this.task.text}</span> 
               <button onClick={this.deleteMe}>X</button>
            </div>
        </li>
     }
     else{
        return <li>
        <div> 
           <span style={{"textDecoration":"line-through"}}>{this.task.text}</span> 
           <button onClick={this.deleteMe}>X</button>
        </div>
        </li>
     }
    }
    deleteMe()
    {
       this.remove(this.task);
    }
    changeMe(event)
    {
        this.task.text= event.currentTarget.textContent;
    }
    

}

export default TaskItem;