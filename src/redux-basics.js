const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    const updatedState = {...state};

    switch (action.type){
        case 'INC_COUNTER':
            updatedState.counter++;
            break;
        case 'ADD_COUNTER':
            updatedState.counter+=action.value;
            break;
    }

    return updatedState;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());

