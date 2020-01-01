import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.onClick = props.onClick;
    }
    render() {        
        return <li>
            <div onClick={this.onClick}>
                {this.text}
            </div>
        </li>
    }
}

export default TaskItem;