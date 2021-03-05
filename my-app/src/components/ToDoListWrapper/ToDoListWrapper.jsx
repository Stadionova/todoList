import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import React from "react";

const ToDoListWrapper = (props) => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTask
                    store={props.store}
                    updateData={props.updateData}
                />
                <Tasks store={props.store}
                    state={props.state}
                    removeTask={props.removeTask}
                    tasksList={props.tasksList}
                />
            </div>
        </div>
    )
}

export default ToDoListWrapper;