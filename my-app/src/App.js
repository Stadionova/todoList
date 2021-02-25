import './App.css';
import ToDoListWrapper from './components/ToDoListWrapper/ToDoListWrapper';
import store from './store';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoListWrapper store={store} subFunc={this.subscribeStore} />
      </div>
    );
  }
  subscribeStore() {
    return store.subscribe(() => {
      console.log(999);
    });
  }
}

export default App;