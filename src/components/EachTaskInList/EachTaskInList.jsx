import classes from "./EachTaskInList.module.css";
import React from "react";

const EachTaskInList = ({ id, value, removeTask }) => {
    return (
        <div className={classes.task} id={id}>
            <span>{value}</span>
            <button onClick={event => removeTask(event)}>x</button>
        </div>
    )
}

export default EachTaskInList;
