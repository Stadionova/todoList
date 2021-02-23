import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';

const ToDoListWrapper = () => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}>
                <NewTask />
                <Tasks />
            </div>
        </div>
    )
}

export default ToDoListWrapper;