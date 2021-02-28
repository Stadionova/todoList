import { createStore } from 'redux';

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: false
};

function toDoList(state = initialState, action) { // reducer function, which get action & return changed state
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
        default:
            return state;
    }
}

const store = createStore(toDoList);

store.subscribe(() => {
    console.log('subscribed for any store chages', store.getState());
});

export default store;