import classes from "./RemoveAllTasksButton.module.css";
import React from "react";

const RemoveAllTasksButton = ({ id, removeTask }) => {
    return (
        <div className={classes.deleteButton} id={id}>
            <button onClick={event => removeTask(event)}>
                <span>УДАЛИТЬ ВСЁ</span>
            </button>
        </div>
    )
}

export default RemoveAllTasksButton;
