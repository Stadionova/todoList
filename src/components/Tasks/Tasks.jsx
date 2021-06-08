import EachTaskInListContainer from '../EachTaskInList/EachTaskInListContainer';
import React from "react";

const Tasks = ({ removeTask, taskValue }) => {
    return (
        <div>
            <EachTaskInListContainer
                removeTask={removeTask}
                taskValue={taskValue}
            />
        </div>
    )
}

export default Tasks;
