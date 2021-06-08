import NewTask from "./NewTask";
import { addTaskByEnterActionCreator, catchInputChangesActionCreator } from "./../../store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        newTaskInputValue: state.newTaskInputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enterHandler: event => {
            if (event.code === 'Enter' || event.keyCode === 13) {
                return dispatch(addTaskByEnterActionCreator(event.target.parentNode.getAttribute('id')));
            }
        },
        catchInputChanges: event => {
            const currentValue = event.target.value;
            return dispatch(catchInputChangesActionCreator(currentValue));
        }
    }
}

const NewTaskContainer = connect(mapStateToProps, mapDispatchToProps)(NewTask);

export default NewTaskContainer;
