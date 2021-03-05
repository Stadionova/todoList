import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";
import store from '../../store';

const Tasks = (props) => {
    return <div className={classes.tasksWrapper}>
        {props.tasksList.map(task => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
            return (
                <div className={classes.tasksList} >
                    <EachTaskInList
                        state={true}
                        store={store}
                        removeTask={props.removeTask}
                        taskValue={task} />
                </div>
            )
        })}
    </div >
}

export default Tasks;