import classes from "./EachTaskInList.module.css";
import React from "react";
import store from '../../store';

const EachTaskInList = (props) => {
    return <div className={classes.task} id={props.id}>
        <span>{props.value}</span>
        <button onClick={(event) => {
            let newState = props.state;
            newState.id = event.target.parentNode.getAttribute('id');
            props.setState.setState(newState);
            store.dispatch({
                type: 'REMOVE_TASK',
                id: props.state.id
            });
            console.log('props.state.id ', props.state.id);
            return props.removeTask(props.state.id)
        }}>x</button>
    </div>
}

export default EachTaskInList;