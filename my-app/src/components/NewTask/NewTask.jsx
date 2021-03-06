import classes from "./NewTask.module.css";
import React from "react";

const NewTask = (props) => {
    return (
        <div className={classes.newTaskInput}>
            <input
                onKeyDown={event => props.enterHandler(event)}
                onChange={props.catchInputChages}
                value={props.newTaskInputValue}
            />
        </div>
    )
}

export default NewTask;