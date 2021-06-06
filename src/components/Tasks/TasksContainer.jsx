import classes from "./Tasks.module.css";
import Tasks from './Tasks';
import React from "react";

const TasksContainer = ({ store, dispatch, removeTask, tasksList }) => {
    return (
        <div className={classes.tasksWrapper}>
            { tasksList.map(task => {
                localStorage.setItem('itemsMaxId_1', task.id);
                return (
                    <div className={classes.tasksList} >
                        <Tasks
                            store={store}
                            state={true}
                            dispatch={dispatch}
                            removeTask={removeTask}
                            taskValue={task}
                            tasksList={tasksList}
                        />
                    </div>
                )
            })}
        </div >
    )
}

export default TasksContainer;
