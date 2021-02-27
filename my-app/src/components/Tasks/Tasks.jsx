import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";

class Tasks extends React.Component {
    render = () => {
        if (this.props.state === 'true') {
            return (
                <div className={classes.tasksList} >
                    <EachTaskInList state={true} />
                </div>
            )
        } else {
            return <div className={classes.tasksList}></div>
        }
    }
}

export default Tasks;