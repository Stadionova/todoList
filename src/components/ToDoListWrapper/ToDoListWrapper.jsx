import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTaskContainer from '../NewTask/NewTaskContainer';
import RemoveAllTasksButtonContainer from '../RemoveAllTasksButton/RemoveAllTasksButtonContainer';
import TasksContainer from '../Tasks/TasksContainer';
import React from "react";

const ToDoListWrapper = ({ state, removeTask, id, onChange }) => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTaskContainer />
                <TasksContainer
                    dispatch={onChange}
                    state={state}
                    removeTask={removeTask}
                    key={id}
                />
                <RemoveAllTasksButtonContainer />
            </div>
        </div>
    )
}

export default ToDoListWrapper;
