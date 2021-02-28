import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import store from '../../store';
import React from "react";

class ToDoListWrapper extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: 'false'
    }
    render() {
        return (
            <div>
                <div><img src={logo} className="App-logo" alt="logo" /></div>
                <div className={classes.wrapper}>
                    <NewTask store={store} updateData={this.updateData} />
                    <Tasks store={store} state={this.state.newTaskCreated} />
                </div>
            </div>
        )
    }
    updateData = (value) => {
        this.setState({ newTaskCreated: value.newTaskCreated });
        this.setState({ newTaskInputValue: value.newTaskInputValue });
        console.log('store_3 ', store.getState());
    }
}

export default ToDoListWrapper;