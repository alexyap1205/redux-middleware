import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    const updatedState = {...state};

    switch (action.type){
        case actionTypes.STORE_RESULT:
            updatedState.results = updatedState.results.concat(action.counter);
            console.log(updatedState);
            break;
        case actionTypes.DELETE_RESULT:
            const newResults = [...updatedState.results]; // or use filter
            newResults.splice(action.index, 1);
            updatedState.results = newResults;
            console.log(updatedState);
            break;
    }
    return updatedState;
};

export default reducer;