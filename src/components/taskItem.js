import React from 'react';

class TaskItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.task = this.props.task;
        this.deleteMe = this.props.deleteCallback;
        this.id = this.props.id;
    }

    componentWillReceiveProps(props) {
        this.task = props.task;
        this.id = this.props.id;
    }

    render() {       
        return (
            <li>
                <div>
                    <span>{this.task.text}</span>
                    <button
                        onClick={
                            this.deleteMeMiddleware.bind(this)
                        }
                        className="listDelButton">
                        delete me
                    </button>
                </div>
            </li>
        );
    }

    deleteMeMiddleware() {
        console.log(this.task);
        this.deleteMe(this.task)
    }

}

export default TaskItem;