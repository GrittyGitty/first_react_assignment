import React from 'react';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TaskList></TaskList>
      </div>
    );
  }

}

export default App;