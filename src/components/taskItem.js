import React from "react";

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task };
    this.toggleDone = this.toggleDone.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = props.handleDelete;
  }

  render() {
    return (
      <li>
        <div>
          <input
            type="text"
            value={this.state.task.text}
            onChange={this.handleInputChange}
            style={{
              textDecoration: this.props.task.isDone ? "line-through" : "none"
            }}
          ></input>
          <button onClick={this.toggleDone}>
            <span>✔️</span>
          </button>
          <button onClick={() => this.handleDelete(this.state.task)} tasktext={this.state.task.text}>
            <span>🗑️</span>
          </button>
        </div>
      </li>
    );
  }

  static getDerivedStateFromProps(props, state) {    
    if (props.task.text !== state.task.text) {
      return {
        task: props.task
      };
    }
    else return null;
  }

  handleInputChange(event) {
    const newText = event.target.value;
    this.props.handleInputChange(this.state.task, newText);
  }

  toggleDone() {
    this.props.task.toggleDone();
    this.setState(this);
  }
}
