import classes from "./Tasks.module.css";
import EachTaskInListContainer from '../EachTaskInList/EachTaskInListContainer';
import React from "react";

const Tasks = (props) => {
    return (
        <div className={classes.tasksList} >
            <EachTaskInListContainer
                store={props.store}
                state={props.state}
                dispatch={props.dispatch}
                removeTask={props.removeTask}
                taskValue={props.taskValue}
                tasksList={props.tasksList}
            />
        </div>
    )
}

export default Tasks;
