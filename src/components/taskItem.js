import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
    render() {
        console.log(this.text);
        
        return <li>
            <div>
                {this.text}
            </div>
        </li>
    }

}

export default TaskItem;