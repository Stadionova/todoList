import classes from "./Tasks.module.css";
import Tasks from './Tasks';
import React from "react";

const TasksContainer = (props) => {
    return (
        <div className={classes.tasksWrapper}>
            {props.tasksList.map(task => {
                localStorage.setItem('itemsMaxId_1', task.id);
                return (
                    <div className={classes.tasksList} >
                        <Tasks
                            store={props.store}
                            state={true}
                            dispatch={props.dispatch}
                            removeTask={props.removeTask}
                            taskValue={task}
                            tasksList={props.tasksList}
                            key={task.id}
                        />
                    </div>
                )
            })}
        </div >
    )
}

export default TasksContainer;
