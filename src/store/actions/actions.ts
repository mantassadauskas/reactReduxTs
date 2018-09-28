export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const CHECKBOX_VALUE = 'CHECKBOX_VALUE';
export const API_CHECKBOX_VALUE = 'API_CHECKBOX_VALUE';

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
};
export const storeResult = (apiList) => {
    console.log(apiList);
    return dispatch => {
        apiList.forEach(api => {
            fetch(api)
                .then(response => response.json())
                .then(response => {
                    if (Array.isArray(response)) {
                        dispatch(saveResult(response));
                        return
                    }
                    dispatch(saveResult(response.results));
                })
        })
    }
};
