import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    const updatedState = {...state};

    switch (action.type){
        case actionTypes.INCREMENT:
            updatedState.counter += 1;
            break;
        case actionTypes.DECREMENT:
            updatedState.counter -= 1;
            break;
        case actionTypes.ADD:
            updatedState.counter += action.value;
            break;
        case actionTypes.SUBTRACT:
            updatedState.counter -= action.value;
            break;
    }
    return updatedState;
};

export default reducer;