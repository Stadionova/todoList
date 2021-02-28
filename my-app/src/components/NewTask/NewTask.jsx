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
    render() {
        return (
            <div className={classes.newTaskInput}>
                <input
                    onKeyDown={(event) => {
                        if (event.code === 'Enter' && (this.state.newTaskInputValue !== ' ')) {
                            let newState = this.state;
                            newState.newTaskCreated = 'true';
                            newState.newTaskInputValue = this.state.newTaskInputValue;
                            this.setState(newState);
                            let newLocalState = this.props.updateData(this.state);
                            newState.newTaskInputValue = '';
                            this.setState(newState);
                            return newLocalState;
                        }
                    }}
                    onChange={this.catchInputChages}
                    value={this.state.newTaskInputValue}
                />
            </div>
        )
    }
}

export default NewTask;