import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTaskContainer from '../NewTask/NewTaskContainer';
import TasksContainer from '../Tasks/TasksContainer';
import React from "react";

const ToDoListWrapper = ({ store, updateData, state, removeTask, tasksList, id }) => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTaskContainer
                    dispatch={store.dispatch}
                    updateData={updateData}
                />
                <TasksContainer
                    dispatch={store.dispatch}
                    state={state}
                    removeTask={removeTask}
                    tasksList={tasksList}
                    key={id}
                />
            </div>
        </div>
    )
}

export default ToDoListWrapper;
