import classes from "./Tasks.module.css";
import Tasks from './Tasks';
import React from "react";

const TasksContainer = (props) => {
    const data = JSON.parse(localStorage.getItem('items'));
    return (
        <div className={classes.tasksWrapper}>
            {props.tasksList.map(task => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                if (data.length == 0) {
                    localStorage.setItem('itemsMaxId_1', data.length + 1);
                } else {
                    localStorage.setItem('itemsMaxId_1', data.length);
                }

                return (
                    <div className={classes.tasksList} >
                        <Tasks
                            store={props.store}
                            state={true}
                            dispatch={props.dispatch}
                            removeTask={props.removeTask}
                            taskValue={task}
                            tasksList={props.tasksList}
                        />
                    </div>
                )
            })}
        </div >
    )
}

export default TasksContainer;
