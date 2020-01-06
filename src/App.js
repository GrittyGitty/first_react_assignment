import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';
import { Provider } from 'react-redux';
import store from './store';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <StatusBar></StatusBar>
          <AddTask></AddTask>
          <TaskList></TaskList>
        </div>
      </Provider>
    );
  }
}

export default App;