import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.task = props.task;
        this.remove =props.remove;
        this.deleteMe = this.deleteMe.bind(this);
        
    }
    render() {
     if(!this.task.isDone)
     {
        return <li>
            <div> 
               <span>{this.task.text}</span> 
               <button onClick={this.deleteMe}>X</button>
            </div>
        </li>
     }
     else{
        return <li>
        <div> 
           <span style={{"text-decoration":"line-through"}}>{this.task.text}</span> 
           <button onClick={this.deleteMe}>X</button>
        </div>
        </li>
     }
    }
    deleteMe()
    {
       this.remove(this.task);
    }
    

}

export default TaskItem;