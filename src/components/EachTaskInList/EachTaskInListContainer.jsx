import classes from "./EachTaskInList.module.css";
import EachTaskInList from "./EachTaskInList";
import { removeTaskActionCreator } from "./../../store";
import React from "react";

class EachTaskInListContainer extends React.Component {
    removeTaskHandler(event) {
        console.log(1);
        let deletedTaskId = event.target.parentNode.getAttribute('id');
        console.log('deletedTaskId ', deletedTaskId);
        this.props.tasksList.map((task, index) => {
            if (deletedTaskId == task.id) {
                console.log(2);
                let action = removeTaskActionCreator(index);
                this.props.dispatch(action);
                return this.props.removeTask(index);
            }
        })
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
