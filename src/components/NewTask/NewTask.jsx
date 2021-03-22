import classes from "./NewTask.module.css";
import React from "react";

const NewTask = (props) => {
    return (
        <div className={classes.newTaskInput}>
            <input
                maxlength="50"
                onKeyDown={props.enterHandler}
                onChange={props.catchInputChages}
                value={props.newTaskInputValue}
            />
        </div>
    )
}

export default NewTask;