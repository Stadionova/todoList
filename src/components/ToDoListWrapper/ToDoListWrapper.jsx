import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTaskContainer from '../NewTask/NewTaskContainer';
import TasksContainer from '../Tasks/TasksContainer';
import React from "react";

const ToDoListWrapper = ({ updateData, state, removeTask, tasksList, id, onChange }) => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTaskContainer
                    dispatch={onChange}
                    updateData={updateData}
                />
                <TasksContainer
                    dispatch={onChange}
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
