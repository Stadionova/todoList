import ToDoListWrapper from "./ToDoListWrapper";
import React from "react";
import { connect } from "react-redux";
import { catchInputChangesActionCreator, removeTaskActionCreator } from "../../store";

class ToDoListWrapperContainer extends React.Component {
    render() {
        !localStorage.getItem('items') && localStorage.setItem('items', JSON.stringify([]));

        const data = JSON.parse(localStorage.getItem('items'));

        return (
            <div>
                <ToDoListWrapper
                    updateData={this.updateData}
                    state={this.props.newTaskCreated}
                    removeTask={this.removeTask}
                    tasksList={data}
                    id={this.props.maxId}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
    updateData = (value) => {
        const currentMaxId = +localStorage.getItem('itemsMaxId_1');

        this.setState({ newTaskCreated: value.newTaskCreated });
        this.setState({ newTaskInputValue: value.newTaskInputValue });
        this.setState({ maxId: currentMaxId + 1 });

        this.setState({
            tasks: [...this.props.tasks, {
                id: currentMaxId + 1,
                value: value.newTaskInputValue
            }]
        });

        const data = JSON.parse(localStorage.getItem('items'));

        const newTaskToStorage = [...data, {
            id: currentMaxId + 1,
            value: value.newTaskInputValue
        }];

        let itemsArray = newTaskToStorage;
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    removeTask = (id) => {
        const allTasks = JSON.parse(localStorage.getItem('items'));
        allTasks.splice(id, 1);

        if (allTasks.length === 0) {
            localStorage.setItem('itemsMaxId_1', 0);
        }

        localStorage.setItem('items', JSON.stringify(allTasks));

        this.setState({
            tasks: allTasks
        });
    }
}

const mapStateToProps = function (state) {
    return {
        newTaskCreated: state.newTaskCreated,
        id: state.maxId,
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: currentValue => {
            dispatch(catchInputChangesActionCreator(currentValue));
        },
        onClick: id => {
            dispatch(removeTaskActionCreator(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListWrapperContainer);
