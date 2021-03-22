import classes from "./EachTaskInList.module.css";
import React from "react";

const EachTaskInList = (props) => {
    return (
        <div className={classes.task} id={props.id}>
            <span>{props.value}</span>
            <button onClick={event => props.removeTask(event)}>x</button>
        </div>
    )
}

export default EachTaskInList;