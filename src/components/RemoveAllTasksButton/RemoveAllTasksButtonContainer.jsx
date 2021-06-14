import RemoveAllTasksButton from "./RemoveAllTasksButton";
import { removeTaskActionCreator } from "../../store";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = function () {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: event => {
            dispatch(removeTaskActionCreator());
        }
    }
}

class RemoveAllTasksButtonContainer extends React.Component {
    render() {
        return (
            <div>
                <RemoveAllTasksButton
                    removeTask={this.props.removeTask}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllTasksButtonContainer);
