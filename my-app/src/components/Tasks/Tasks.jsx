import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";

const Tasks = (props) => {
    return (
        <div className={classes.tasksList} >
            <EachTaskInList
                state={props.state}
                store={props.store}
                removeTask={props.removeTask}
                taskValue={props.taskValue} />
        </div>
    )
}

export default Tasks;