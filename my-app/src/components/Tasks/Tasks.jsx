import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';

const Tasks = () => {
    return (
        <div className={classes.tasksList}>
            <EachTaskInList />
        </div>
    )
}

export default Tasks;