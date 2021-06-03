import NewTask from "./NewTask";
import React from "react";
import { catchInputChagesActionCreator, addTaskByEnterActionCreator } from "./../../store";

class NewTaskContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null
    }
    catchInputChages = (event) => {
        let newState = this.state;
        newState.newTaskInputValue = event.target.value;
        this.setState(newState);
        return this.props.dispatch(catchInputChagesActionCreator(this.state.newTaskInputValue));
        // return this.props.dispatch(action);
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
                catchInputChages={this.catchInputChages}
                enterHandler={this.enterHandler.bind(this)}
            />
        )
    }
}

export default NewTaskContainer;
