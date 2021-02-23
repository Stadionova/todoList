import { createStore } from 'redux';

const initialState = {
    newTaskInputValue: ''
};

function toDoList(state = initialState, action) { // reducer function, which get action & return changed state
    switch (action.type) {
        case 'INPUT_TASK_VALUE_CHANGED':
            state.newTaskInputValue = action.newTaskInputValue;
            console.log('state ', state);
            return state;
        default:
            return state;
    }
}

const store = createStore(toDoList);

store.dispatch({
    type: 'INPUT_TASK_VALUE_CHANGED',
    newTaskInputValue: 'Read the docs'
});

export default store;