import classes from "./NewTask.module.css";
import React from "react";
import store from '../../store';

class NewTask extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null
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
    catchEnterPress(event) {
        if (event.code === 'Enter') {
            store.dispatch({
                type: 'ENTER_TYPED',
                newTaskCreated: true
            });
        }
    }
    render() {
        return (
            <div className={classes.newTaskInput}>
                <input
                    onKeyDown={this.catchEnterPress}
                    onChange={this.catchInputChages}
                    value={this.state.newTaskInputValue}
                />
            </div>
        )
    }
}

export default NewTask;