import { createStore } from 'redux';

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: 'false',
    maxId: 3,
    tasks: [{}]
};

function toDoListReducer(state = initialState, action) { // reducer function, which get action & return changed state
    switch (action.type) {
        case 'INPUT_TASK_VALUE_CHANGED':
            state.newTaskInputValue = action.newTaskInputValue;
            return state;
        case 'REMOVE_TASK':
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

const store = createStore(toDoListReducer);

export const catchInputChagesActionCreator = (newTaskInputValue) => {
    return {
        type: 'INPUT_TASK_VALUE_CHANGED',
        newTaskInputValue: newTaskInputValue
    }
};

export const removeTaskActionCreator = (id) => {
    return {
        type: 'REMOVE_TASK',
        id: id
    }
};

export default store;
