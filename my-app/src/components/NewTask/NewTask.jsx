import classes from "./NewTask.module.css";
import React from "react";
import store from '../../store';

class NewTask extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null,
        name: 'Бумеранг не запущен'
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
            console.log('props_1 ', this.props);
            return this.props.updateData(this.state.name);
        }
    }
    render() {
        return (
            <div className={classes.newTaskInput}>
                <input
                    onKeyDown={(event) => {
                        if (event.code === 'Enter') {
                            console.log('props_1 ', this.props);
                            return this.props.updateData(this.state.name);
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