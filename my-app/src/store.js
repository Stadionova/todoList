import { createStore } from 'redux';

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: 'false',
    maxId: 3,
    tasks: [
        {
            1: {
                id: 1,
                value: 'hello'
            },
            2: {
                id: 2,
                value: 'hi'
            },
            3: {
                id: 3,
                value: 'yulia'
            }
        }
    ]
};

function toDoListReducer(state = initialState, action) { // reducer function, which get action & return changed state
    switch (action.type) {
        case 'INPUT_TASK_VALUE_CHANGED':
            state.newTaskInputValue = action.newTaskInputValue;
            return state;
        case 'ENTER_TYPED':
            state.newTaskCreated = action.newTaskCreated;
            return state;
        case 'SET_NULL_INPUT_VALUE':
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

store.subscribe(() => {
    console.log('subscribed for any store chages', store.getState());
});

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