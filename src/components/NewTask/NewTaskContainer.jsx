import NewTask from "./NewTask";
import React from "react";
import { catchInputChangesActionCreator, addTaskByEnterActionCreator } from "./../../store";

class NewTaskContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null
    }
    checkIsInputValueContainOnlySpaces = (inputValue) => {
        // let message = inputValue;
        if (inputValue.length > 0) {
            let pattern = /^[\s]+$/;
            if (!pattern.test(inputValue)) {
                return true;
            }
        } else {
            return false;
        }
    }
    catchInputChanges = (event) => {
        let newState = this.state;
        newState.newTaskInputValue = event.target.value;
        this.setState(newState);
        const currentValue = event.target.value;
        return this.props.dispatch(catchInputChangesActionCreator(currentValue));
        // return this.props.dispatch(action);
    }
    enterHandler(event) {
        if (event.code === 'Enter' || event.keyCode === 13) {
            const isSpacesInInput = this.checkIsInputValueContainOnlySpaces(this.state.newTaskInputValue);
            if (isSpacesInInput) {
                let newState = this.state;
                newState.newTaskCreated = 'true';
                newState.newTaskInputValue = this.state.newTaskInputValue;
                this.setState(newState);
                let newLocalState = this.props.updateData(this.state);
                newState.newTaskInputValue = '';
                this.setState(newState);
                // return newLocalState;
                return this.props.dispatch(addTaskByEnterActionCreator(newLocalState));
            } else {
                return false;
            }
        }
    }
    render() {
        return (
            <NewTask
                newTaskInputValue={this.state.newTaskInputValue}
                catchInputChanges={this.catchInputChanges}
                enterHandler={this.enterHandler.bind(this)}
            />
        )
    }
}

export default NewTaskContainer;
