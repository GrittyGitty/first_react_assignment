import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
    render() {
        console.log(this.text);
        
        return <li>
            <div onClick={this.dosomthing.bind(this.text)}> 
               {this.text} 
            </div>
        </li>
    }

}
function dosomthing(text){
    return text ="";
 
    
}

export default TaskItem;