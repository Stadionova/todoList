import './App.css';
import ToDoListWrapperContainer from './components/ToDoListWrapper/ToDoListWrapperContainer';
import store from './store';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ToDoListWrapperContainer store={store} />
      </div>
    </BrowserRouter>
  }
}

export default App;
