import classes from "./Tasks.module.css";
import Tasks from './Tasks';
import React from "react";

const TasksContainer = ({ removeTask }) => {
    const tasksList = localStorage.getItem('items') !== 'undefined' ? JSON.parse(localStorage.getItem('items')) : [];
    return (
        <div className={classes.tasksWrapper}>
            { tasksList && tasksList.map(task => {
                return (
                    <div className={classes.tasksList} >
                        <Tasks
                            removeTask={removeTask}
                            taskValue={task}
                        />
                    </div>
                )
            })}
        </div >
    )
}

export default TasksContainer;
