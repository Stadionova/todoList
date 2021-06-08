import ToDoListWrapper from "./ToDoListWrapper";
import { connect } from "react-redux";
import { removeTaskActionCreator } from "../../store";

const mapStateToProps = (state) => {
    return {
        newTaskCreated: state.newTaskCreated,
        id: state.maxId,
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTask: id => {
            dispatch(removeTaskActionCreator(id));
        }
    }
}

const ToDoListWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoListWrapper);

export default ToDoListWrapperContainer;
