import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import store from '../../store';
import React from "react";

class ToDoListWrapper extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null
    }
    render() {
        return (
            <div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className={classes.wrapper}>
                    <NewTask store={store} updateData={this.updateData} />
                    <Tasks store={store} state={this.state.name} />
                </div>
            </div>
        )
    }
    updateData = (value) => {
        console.log('input_value ', value);
        this.setState({ name: true })
    }
}

export default ToDoListWrapper;