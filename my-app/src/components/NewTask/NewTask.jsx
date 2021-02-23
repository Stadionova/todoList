import classes from "./NewTask.module.css";
import React from "react";
import store from '../../store';

class NewTask extends React.Component {
    state = {
        newTaskInputValue: ''
    }
    catchInputChages = (event) => {
        let newState = this.state;
        newState.newTaskInputValue = event.target.value;
        this.setState(newState);
        store.dispatch({
            type: 'INPUT_TASK_VALUE_CHANGED',
            newTaskInputValue: this.state.newTaskInputValue
        });
    }
    render() {
        return (
            <div className={classes.newTaskInput}>
                <input onChange={this.catchInputChages} value={this.state.newTaskInputValue} />
            </div>
        )
    }
}

export default NewTask;