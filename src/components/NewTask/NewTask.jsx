import classes from "./NewTask.module.css";
import React from "react";

const NewTask = ({ enterHandler, catchInputChanges, newTaskInputValue }) => {
    return (
        <div className={classes.newTaskInput}>
            <input
                onKeyDown={enterHandler}
                onChange={catchInputChanges}
                value={newTaskInputValue}
            />
        </div>
    )
}

export default NewTask;
