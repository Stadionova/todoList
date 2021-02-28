import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";
import store from '../../store';

class Tasks extends React.Component {
    render() {
        console.log('this.props.tasksList ', this.props.tasksList);
        return <div>
            {this.props.tasksList.map(u => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                return (
                    <div className={classes.tasksList} >
                        <EachTaskInList state={true} store={store} taskValue={u} />
                    </div>
                )
            })}
        </div >
    }
}

// render = () => {
//     console.log('this.props.state ', this.props.state);
//     console.log('store ', store.getState());
//     if (this.props.state === 'true') {
//         for (let id in this.state.tasks) {
//             console.log('id ', id);
//             return (
//                 <div className={classes.tasksList} >
//                     <EachTaskInList state={true} store={store} />
//                 </div>
//             )
//         }
//     } else {
//         return <div className={classes.tasksList}></div>
//     }
// }

export default Tasks;