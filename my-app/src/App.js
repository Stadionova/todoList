import './App.css';
import ToDoListWrapper from './components/ToDoListWrapper/ToDoListWrapper';
import store from './store';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoListWrapper store={store} />
      </div>
    );
  }
}

export default App;