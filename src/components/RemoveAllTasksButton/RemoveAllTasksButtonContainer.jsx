import RemoveAllTasksButton from "./RemoveAllTasksButton";
import { removeTaskActionCreator } from "../../store";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = function (state) {
    return {
        id: state.maxId,
        value: state.newTaskInputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: event => {
            dispatch(removeTaskActionCreator(event.target.parentNode.getAttribute('id')));
        }
    }
}

class RemoveAllTasksButtonContainer extends React.Component {
    render() {
        return (
            <div>
                <RemoveAllTasksButton
                    // id={this.props.taskValue.id}
                    // value={this.props.taskValue.value}
                    // removeTask={this.props.removeTask}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllTasksButtonContainer);
