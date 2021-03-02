import classes from "./EachTaskInList.module.css";
import React from "react";
import store from '../../store';

class EachTaskInList extends React.Component {
    state = {
        newTaskInputValue: '',
        newTaskCreated: null,
        id: null
    }
    componentDidMount() {
        this.props.store.dispatch({
            type: 'REMOVE_TASK',
            id: null
        });
    }
    render() {
        console.log('this.props.taskValue.id ', this.props.taskValue.id);
        console.log('this.props_each ', this.props);
        return <div className={classes.task} id={this.props.taskValue.id}>
            <span>{this.props.taskValue.value}</span>
            <button onClick={(event) => {
                console.log('this.props_4 ', this.props);
                let newState = this.state;
                newState.id = event.target.parentNode.getAttribute('id');
                this.setState(newState);
                store.dispatch({
                    type: 'REMOVE_TASK',
                    id: this.state.id
                });
                return this.props.removeTask(this.state.id)
                // return event.target.parentNode.getAttribute('id');
                // console.log('event ', event.target.parentNode.getAttribute('id'));
            }}>x</button>
        </div>
    }
}

export default EachTaskInList;