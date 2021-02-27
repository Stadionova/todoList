import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";

class Tasks extends React.Component {
    render = () => {
        console.log('props_tasks ', this.props);
        if (this.props.state) {
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