import React from 'react';
import connect from './connections/taskItemConnect'

class TaskItem extends React.Component {
    text = '';
    editTask =false;
    constructor(props) {
        super(props);
        this.state={task:props.task};
        this.removeButtonHandler = this.removeButtonHandler.bind(this);
        this.toggleDoneButtonHandler = this.toggleDoneButtonHandler.bind(this);
        this.editTextHandler=this.editTextHandler.bind(this);
        this.ChangeInputHandler=this.ChangeInputHandler.bind(this);
        this.blurHandler=this.blurHandler.bind(this);

    }
    render() {
     if(!this.state.task.isDone)
     {
        if(!this.editTask){
         return <li>
         <div> 
            <span onDoubleClick={this.editTextHandler}>{this.state.task.text}</span> 
            <button onClick={this.toggleDoneButtonHandler}>Done!</button>
            <button onClick={this.removeButtonHandler}>Remove Task</button>
         </div>
        </li>
        }
        else{
           return <li>
           <div> 
            <input onChange={this.ChangeInputHandler} onBlur={this.blurHandler} id="edit_text" type="text"></input>
           </div>
          </li>
        }
        
     }
     else{
        return <li>
        <div> 
           <span style={{"textDecoration":"line-through"}}>{this.state.task.text}</span> 
           <button onClick={this.toggleDoneButtonHandler}>unDone!</button>
           <button onClick={this.removeButtonHandler}>Remove Task</button>
        </div>
        </li>
     }
    }
   removeButtonHandler(){
     this.props.removeSome(this.state.task);
     this.setState({task:this.props.task});
   }
   toggleDoneButtonHandler(){
      this.props.toggleTaskDone(this.state.task);
      this.setState({task:this.props.task});
   }
   editTextHandler(){
      this.editTask = !this.editTask;
      this.setState({task:this.props.task});
   }
   ChangeInputHandler(event){
      this.text = event.target.value;
   }
   blurHandler(){
      this.props.updateTask(this.state.task,this.text);
      this.editTask = !this.editTask;
      this.setState({task:this.props.task});
   }
}
export default connect(TaskItem);

 

