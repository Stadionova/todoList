import NewTask from "./NewTask";
import React from "react";

class NewTaskContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null
    }
    catchInputChages = (event) => {
        let newState = this.state;
        newState.newTaskInputValue = event.target.value;
        this.setState(newState);
        this.props.store.dispatch({
            type: 'INPUT_TASK_VALUE_CHANGED',
            newTaskInputValue: this.state.newTaskInputValue
        });
    }
    enterHandler(event) {
        if (event.code === 'Enter'
            && (this.state.newTaskInputValue !== ' ')) {
            let newState = this.state;
            newState.newTaskCreated = 'true';
            newState.newTaskInputValue = this.state.newTaskInputValue;
            this.setState(newState);
            let newLocalState = this.props.updateData(this.state);
            newState.newTaskInputValue = '';
            this.setState(newState);
            return newLocalState;
        }
    }
    render() {
        return (
            <NewTask
                newTaskInputValue={this.state.newTaskInputValue}
                catchInputChages={this.catchInputChages}
                enterHandler={this.enterHandler.bind(this)}
            />
        )
    }
}

export default NewTaskContainer;