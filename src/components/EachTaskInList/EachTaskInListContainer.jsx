import EachTaskInList from "./EachTaskInList";
import { removeTaskActionCreator } from "./../../store";
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

class EachTaskInListContainer extends React.Component {
    render() {
        return (
            <div>
                <EachTaskInList
                    id={this.props.taskValue.id}
                    value={this.props.taskValue.value}
                    removeTask={this.props.removeTask}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EachTaskInListContainer);
