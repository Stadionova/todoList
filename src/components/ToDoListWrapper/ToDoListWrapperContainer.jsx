import ToDoListWrapper from "./ToDoListWrapper";
import React from "react";

class ToDoListWrapperContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: 'false',
        maxId: 3,
        tasks: [
            {
                id: 0,
                value: 'hello'
            },
            {
                id: 1,
                value: 'hi'
            },
            {
                id: 2,
                value: 'yulia'
            }
        ]
    }
    render() {
        return (
            <div>
                <ToDoListWrapper
                    store={this.props.store}
                    updateData={this.updateData}
                    state={this.state.newTaskCreated}
                    removeTask={this.removeTask}
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
    updateData = (value) => {
        this.setState({ newTaskCreated: value.newTaskCreated });
        this.setState({ newTaskInputValue: value.newTaskInputValue });
        this.setState({ maxId: this.state.maxId + 1 });
        this.setState({
            tasks: [...this.state.tasks, {
                id: this.state.maxId,
                value: value.newTaskInputValue
            }]
        });
    }
    removeTask = (id) => {
        const allTasks = this.state.tasks;
        allTasks.splice(id, 1);
        this.setState({
            tasks: allTasks
        });
    }
}

export default ToDoListWrapperContainer;
