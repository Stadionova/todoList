import './App.css';
import ToDoListWrapperContainer from './components/ToDoListWrapper/ToDoListWrapperContainer';
import store from './store';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoListWrapperContainer store={store} />
      </div>
    );
  }
}

export default App;