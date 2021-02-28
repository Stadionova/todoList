import classes from "./EachTaskInList.module.css";
import React from "react";

class EachTaskInList extends React.Component {
    componentDidMount() {
        this.props.store.dispatch({
            type: 'SET_NULL_INPUT_VALUE',
            newTaskInputValue: null
        });
    }
    render() {
        return <div className={classes.task}>{this.props.taskValue}</div>
    }
}

export default EachTaskInList;