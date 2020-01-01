import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.text;
    }
    render() {
        return (
            <li>
                <div>
                    <span>{this.text}</span>
                    <button className="listDelButton">delete me</button>
                </div>
            </li>
        );
    }

}

export default TaskItem;