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
                            console.log(111);
                            let newState = this.state;
                            newState.newTaskCreated = 'true';
                            newState.newTaskInputValue = '';
                            this.setState(newState);
                            console.log('this.state ', this.state);
                            return this.props.updateData(this.state);
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