import classes from "./RemoveAllTasksButton.module.css";
import React from "react";

const RemoveAllTasksButton = ({ removeTask }) => {
    return (
        <div className={classes.deleteButton}>
            <button onClick={event => removeTask()}>
                <span>УДАЛИТЬ ВСЁ</span>
            </button>
        </div>
    )
}

export default RemoveAllTasksButton;
