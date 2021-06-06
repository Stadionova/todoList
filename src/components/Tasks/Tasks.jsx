import EachTaskInListContainer from '../EachTaskInList/EachTaskInListContainer';
import React from "react";

const Tasks = ({ store, state, dispatch, removeTask, taskValue, tasksList }) => {
    return (
        <div>
            <EachTaskInListContainer
                store={store}
                state={state}
                dispatch={dispatch}
                removeTask={removeTask}
                taskValue={taskValue}
                tasksList={tasksList}
            />
        </div>
    )
}

export default Tasks;
