import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <StatusBar></StatusBar> */}
        <AddTask></AddTask>
        <TaskList></TaskList>
      </div>
    );
  }

}

export default App;