import { createStore } from 'redux';
import { INPUT_TASK_VALUE_CHANGED, REMOVE_TASK, ADD_TASK } from './actions'; // these are actions

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: 'false',
    maxId: localStorage.getItem('itemsMaxId_1'),
    tasks: localStorage.getItem('items') !== 'undefined' ? JSON.parse(localStorage.getItem('items')) : []
};

function checkIsInputValueContainOnlySpaces(inputValue) {
    if (inputValue && inputValue.length > 0) {
        let pattern = /^[\s]+$/;
        if (!pattern.test(inputValue)) {
            return true;
        }
    } else {
        return false;
    }
}

// reducer function, which get action & return changed state
// (currentState, action) => newState
// Редуктор принимает два аргумента - состояние и действие - и возвращает новое состояние.
function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK_VALUE_CHANGED:
            return Object.assign({}, state, { // возвращаю копию стэйта
                ...state,
                newTaskInputValue: action.newTaskInputValue
            });
        case ADD_TASK:
            const isSpacesInInput = checkIsInputValueContainOnlySpaces(state.newTaskInputValue);
            if (isSpacesInInput) {
                const currentMaxId = +localStorage.getItem('itemsMaxId_1');
                localStorage.setItem('itemsMaxId_1', currentMaxId + 1);

                let data;

                if (localStorage.getItem('items')) {
                    data = (localStorage.getItem('items') !== 'undefined')
                        && (localStorage.getItem('items') !== 'null')
                        ? JSON.parse(localStorage.getItem('items'))
                        : [];

                    const newTaskToStorage = [...data, {
                        id: currentMaxId + 1,
                        value: state.newTaskInputValue
                    }];

                    let itemsArray = newTaskToStorage;
                    localStorage.setItem('items', JSON.stringify(itemsArray));
                } else {
                    data = [];

                    const newTaskToStorage = [...data, {
                        id: currentMaxId + 1,
                        value: state.newTaskInputValue
                    }];

                    let itemsArray = newTaskToStorage;
                    localStorage.setItem('items', JSON.stringify(itemsArray));
                }

                return Object.assign({}, state, { // возвращаю копию стэйта
                    ...state,
                    newTaskCreated: 'true',
                    newTaskInputValue: '',
                    maxId: currentMaxId + 1,
                    tasks: [...data, {
                        id: currentMaxId + 1,
                        value: state.newTaskInputValue
                    }]
                });
            } else {
                return false;
            }
        case REMOVE_TASK:
            const tasksList = localStorage.getItem('items') !== 'undefined' ? JSON.parse(localStorage.getItem('items')) : [];
            const stateCopy = state.tasks;

            tasksList && tasksList.forEach((taskObj, index) => {
                if (taskObj.id == action.id) {
                    stateCopy && stateCopy.splice(index, 1);
                    if (stateCopy.length === 0) {
                        localStorage.setItem('itemsMaxId_1', 0);
                    }
                    localStorage.setItem('items', JSON.stringify(stateCopy));
                }
            });
            return Object.assign({}, state, { // возвращаю копию стэйта
                ...state,
                maxId: localStorage.getItem('itemsMaxId_1'),
                tasks: JSON.parse(localStorage.getItem('items'))
            });
        default:
            return state;
    }
}

const store = createStore(toDoListReducer, initialState);

export const catchInputChangesActionCreator = (newTaskInputValue) => { // action creator
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

export const addTaskByEnterActionCreator = (id) => { // action creator
    return {
        type: ADD_TASK,
        id: id
    }
};

export default store;
