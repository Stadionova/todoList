import { createStore } from 'redux';
import { INPUT_TASK_VALUE_CHANGED, REMOVE_TASK } from './actions'; // these are actions

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: 'false',
    maxId: 3,
    tasks: [{}]
};

// reducer function, which get action & return changed state
// (currentState, action) => newState
function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK_VALUE_CHANGED:
            return { // возвращаю копию стэйта
                ...state,
                ...action.newTaskInputValue,
                newTaskInputValue: action.newTaskInputValue
            }
        // state.newTaskInputValue = action.newTaskInputValue;
        // return state;
        case REMOVE_TASK:
            const allTasks = state.tasks;
            allTasks.forEach((taskObj, index) => {
                if (taskObj.id == action.id) {
                    allTasks.splice(index, 1);
                    state.tasks = allTasks;
                }
            });
            return state;
        default:
            return state;
    }
}

const store = createStore(toDoListReducer, initialState);

store.subscribe(() => {
    console.log("State has changed" + store.getState());
})

export const catchInputChagesActionCreator = (newTaskInputValue) => { // action creator
    return {
        type: INPUT_TASK_VALUE_CHANGED,
        newTaskInputValue: newTaskInputValue
    }
};

export const removeTaskActionCreator = (id) => { // action creator
    return {
        type: REMOVE_TASK,
        id: id
    }
};

export default store;
