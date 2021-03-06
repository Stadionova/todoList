import classes from "./EachTaskInList.module.css";
import EachTaskInList from "./EachTaskInList";
import React from "react";
import store from '../../store';

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
        store.dispatch({
            type: 'REMOVE_TASK',
            id: this.state.id
        });
        return this.props.removeTask(this.state.id);
    }
    render() {
        return (
            <div className={classes.task} id={this.props.taskValue.id}>
                <EachTaskInList
                    id={this.props.taskValue.id}
                    value={this.props.taskValue.value}
                    state={this.state}
                    setState={this}
                    store={store}
                    removeTask={this.removeTaskHandler.bind(this)}
                />
            </div>
        )
    }
}

export default EachTaskInListContainer;