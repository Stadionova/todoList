import ToDoListWrapper from "./ToDoListWrapper";
import React from "react";

class ToDoListWrapperContainer extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: 'false',
        maxId: 1,
        tasks: []
    }
    render() {
        !localStorage.getItem('items') && localStorage.setItem('items', JSON.stringify([]));

        const data = JSON.parse(localStorage.getItem('items'));

        return (
            <div>
                <ToDoListWrapper
                    store={this.props.store}
                    updateData={this.updateData}
                    state={this.state.newTaskCreated}
                    removeTask={this.removeTask}
                    tasksList={data}
                    id={this.state.maxId}
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
            tasks: [...this.state.tasks, {
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

        console.log('allTasks ', allTasks);

        localStorage.setItem('items', JSON.stringify(allTasks));

        this.setState({
            tasks: allTasks
        });
    }
}

export default ToDoListWrapperContainer;
