import classes from "./EachTaskInList.module.css";
import EachTaskInList from "./EachTaskInList";
import { removeTaskActionCreator } from "./../../store";
import React from "react";

class EachTaskInListContainer extends React.Component {
    removeTaskHandler(event) {
        let deletedTaskId = event.target.parentNode.getAttribute('id');
        let action = removeTaskActionCreator(deletedTaskId);
        this.props.dispatch(action);
        return this.props.removeTask(deletedTaskId);
    }
    render() {
        return (
            <div className={classes.task} id={this.props.taskValue.id}>
                <EachTaskInList
                    id={this.props.taskValue.id}
                    value={this.props.taskValue.value}
                    removeTask={this.removeTaskHandler.bind(this)}
                />
            </div>
        )
    }
}

export default EachTaskInListContainer;