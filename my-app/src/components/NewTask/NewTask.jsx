import classes from "./NewTask.module.css";
import React from "react";

class NewTask extends React.Component {
    state = {
        newTaskValue: 'Hello'
    }
    render() {
        return (
            <div className={classes.newTaskInput}>
                <input />
                {this.state.newTaskValue}
            </div>
        )
    }
}

export default NewTask;