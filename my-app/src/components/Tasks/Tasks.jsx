import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";
import store from '../../store';

class Tasks extends React.Component {
    render = () => {
        console.log('this.props.state ', this.props.state);
        console.log('store ', store.getState());
        if (this.props.state === 'true') {
            return (
                <div className={classes.tasksList} >
                    <EachTaskInList state={true} store={store} />
                </div>
            )
        } else {
            return <div className={classes.tasksList}></div>
        }
    }
}

export default Tasks;