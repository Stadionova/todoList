import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';
import store from '../../store';

const ToDoListWrapper = () => {
    return (
        <div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className={classes.wrapper}>
                <NewTask store={store} />
                <Tasks store={store} />
            </div>
        </div>
    )
}

export default ToDoListWrapper;