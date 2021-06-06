import EachTaskInList from "./EachTaskInList";
import { removeTaskActionCreator } from "./../../store";
import React from "react";

class EachTaskInListContainer extends React.Component {
    removeTaskHandler(event) {
        let deletedTaskId = event.target.parentNode.getAttribute('id');
        this.props.tasksList.map((task, index) => {
            if (deletedTaskId == task.id) {
                let action = removeTaskActionCreator(index);
                this.props.dispatch(action);
                return this.props.removeTask(index);
            }
        })
    }
    render() {
        return (
            <div>
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
