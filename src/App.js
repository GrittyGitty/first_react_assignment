import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("something");
    
  }
  render() {
      return <div>
      <AddTask></AddTask>
      <TaskList></TaskList>
       </div>
           
    }
  
 
 
  
}

export default App;