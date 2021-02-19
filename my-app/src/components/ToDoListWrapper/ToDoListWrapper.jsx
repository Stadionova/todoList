import classes from "./ToDoListWrapper.module.css";
import logo from './back.png';

const ToDoListWrapper = () => {
    return (
        <div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div className={classes.wrapper}></div>
        </div>
    )
}

export default ToDoListWrapper;