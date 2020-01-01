import React from 'react';
import TaskItem from './taskItem';
import Task from '../entities/task';

class TaskList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.tasks = props.tasksList;
        this.tasks.push(new Task("buy pizza"));
        this.updateList = [];
        this.updateList[0] = "";
        this.getDeleteFunction = this.getDeleteFunction.bind(this);
        this.getCompletlyDeleteFunction = this.getCompletlyDeleteFunction.bind(this);
        this.getUpdateFunctionHandler = this.getUpdateFunctionHandler.bind(this);
        this.getInputChangeFunctionHandler = this.getInputChangeFunctionHandler.bind(this);
    }

    componentWillReceiveProps(props)
    {
        this.tasks = props.tasksList;
        this.forceUpdate();
    }

    render()
    {
        console.log("rendering TaskList:");
        console.log(this.tasks);
        return <div>
            <ul>
                {this.printTasks(this.tasks)}
            </ul>
        </div>
    }

    printTasks(list)
    {
        let elements = [];
        // console.log(list);

        for (let index = 0; index < this.tasks.length; index++)
        {
            let task = this.tasks[index];
            if (task.isDeleted)
                elements.push(<span></span>);
            else if (task.isDone)
                elements.push(<span key={index}><button onClick={this.getCompletlyDeleteFunction(task)}>delete completly</button><del><TaskItem text={task.text} onClick={this.getDeleteFunction(task)}></TaskItem></del></span>);
            else
                elements.push(<span key={index}><button onClick={this.getCompletlyDeleteFunction(task)}>delete completly</button><input type="text" onChange={this.getInputChangeFunctionHandler(index)}></input><button onClick={this.getUpdateFunctionHandler(index, task)}>update</button><TaskItem text={task.text} onClick={this.getDeleteFunction(task)}></TaskItem></span>);

            // elements.push(<li key={task.text}>
            //             <div onClick={this.toggleTaskByText}>
            //                 {this.getTaskText(task)}
            //             </div>
            //         </li>)
        }
        // console.log(elements);
        return elements;
    }
    getDeleteFunction(task)
    {
        return () =>
        {
            task.toggleDone();
            this.forceUpdate();
        }
    }
    getCompletlyDeleteFunction(task)
    {
        return () =>
        {
            for (let index = 0; index < this.tasks.length; index++)
            {
                if (task === this.tasks[index])
                {
                    this.tasks[index].isDeleted = true;
                }
            }
            this.forceUpdate();
        }
    }
    getUpdateFunctionHandler(index, task)
    {
        return () =>
        {
            this.tasks[index].isDeleted = true;
            let newTask = new Task();
            newTask.text = this.updateList[index];
            this.tasks.push(newTask);
            this.forceUpdate();
        }
    }
    getInputChangeFunctionHandler(index)
    {
        return (event) =>
        {
            this.updateList[index] = event.target.value;
            console.log("input changed to:" + this.updateList[index]);
        }
    }
    getTaskText(task)
    {
        if (task.isDone)
        {
            return <p><del>{task.text}</del></p>
        }
        else
        {
            return <p>{task.text}</p>
        }
    }

}
export default TaskList;