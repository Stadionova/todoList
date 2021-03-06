import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTaskContainer from '../NewTask/NewTaskContainer';
import TasksContainer from '../Tasks/TasksContainer';
import React from "react";

const ToDoListWrapper = (props) => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTaskContainer
                    store={props.store}
                    updateData={props.updateData}
                />
                <TasksContainer store={props.store}
                    state={props.state}
                    removeTask={props.removeTask}
                    tasksList={props.tasksList}
                />
            </div>
        </div>
    )
}

export default ToDoListWrapper;