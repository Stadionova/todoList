import { createStore } from 'redux';

const initialState = {
    newTaskInputValue: '',
    newTaskCreated: 'false',
    maxId: 3,
    tasks: [
        {
            id: 0,
            value: 'hello'
        },
        {
            id: 1,
            value: 'hi'
        },
        {
            id: 2,
            value: 'yulia'
        }
    ]
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
        case 'REMOVE_TASK':
            const allTasks = state.tasks;
            // console.log('allTasks ', allTasks);
            allTasks.forEach((taskObj, index) => {
                console.log('taskObj.id ', taskObj.id);
                console.log('action.id ', action.id);
                if (taskObj.id == action.id) {
                    console.log('index ', index);
                    allTasks.splice(index, 1);
                    console.log('allTasks ', allTasks);
                    state.tasks = allTasks;
                    console.log('state_4 ', state);
                    // this.setState({
                    //     tasks: allTasks
                    // });
                }
            });
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