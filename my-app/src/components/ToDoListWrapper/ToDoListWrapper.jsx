import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import store from '../../store';
import React from "react";

class ToDoListWrapper extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null,
        name: false
    }
    render() {
        return (
            <div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className={classes.wrapper}>
                    <NewTask store={store} updateData={this.updateData} />
                    <Tasks store={store} subFunc={this.subscribeStore} state={this.state.name} />
                </div>
            </div>
        )
    }
    updateData = (value) => {
        console.log('value ', value);
        this.setState({ name: true })
    }
    subscribeStore() {
        return store.subscribe(() => {
            console.log(222);
        });
    }
}

export default ToDoListWrapper;