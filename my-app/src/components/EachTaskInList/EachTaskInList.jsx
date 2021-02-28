import classes from "./EachTaskInList.module.css";
import React from "react";
// import store from '../../store';

class EachTaskInList extends React.Component {
    componentDidMount() {
        // this.getData();
        console.log(123);
        let currentNewTaskInputValue = this.props.store.getState().newTaskInputValue;
        console.log('currentNewTaskInputValue ', currentNewTaskInputValue);

        this.props.store.dispatch({
            type: 'SET_NULL_INPUT_VALUE',
            newTaskInputValue: null
        });

        console.log('newStoreValue ', this.props.store.getState().newTaskInputValue);
    }
    render() {
        console.log('store_2 ', this.props.store.getState());
        const newTaskValue = this.props.store.getState().newTaskInputValue;
        return <div className={classes.task}>{newTaskValue}</div>
    }
}

export default EachTaskInList;