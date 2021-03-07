import classes from "./EachTaskInList.module.css";
import EachTaskInList from "./EachTaskInList";
import { removeTaskActionCreator } from "./../../store";
import React from "react";

class EachTaskInListContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null,
        id: null
    }
    componentDidMount() {
        this.props.store.dispatch({
            type: 'REMOVE_TASK',
            id: null
        });
    }
    removeTaskHandler(event) {
        let newState = this.state;
        newState.id = event.target.parentNode.getAttribute('id');
        this.setState(newState);
        let action = removeTaskActionCreator();
        this.props.store.dispatch(action);
        return this.props.removeTask(this.state.id);
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