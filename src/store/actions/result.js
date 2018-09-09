import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const storeResult = (counter) => {
    return {
        type: STORE_RESULT,
        counter: counter
    }
};

export const storeResultAsync = (counter) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(storeResult(counter))
        }, 2000);
    };
};

export const deleteResult = (index) => {
    return {
        type: DELETE_RESULT,
        index: index
    }
};

export const deleteResultAsync = (index) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(deleteResult(index))
        }, 2000);
    };
};
