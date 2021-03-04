import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import store from '../../store';
import React from "react";

class ToDoListWrapper extends React.Component {
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
                <div><img src={logo} className="App-logo" alt="logo" /></div>
                <div className={classes.wrapper}>
                    <NewTask store={store} updateData={this.updateData} />
                    <Tasks store={store}
                        state={this.state.newTaskCreated}
                        removeTask={this.removeTask}
                        tasksList={this.state.tasks} />
                </div>
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

export default ToDoListWrapper;