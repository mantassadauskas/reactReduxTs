import * as actionTypes from '../actions/actions';

const initialState = {
    results: [],
    selectedCount: 0,
    apiList: []
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    results: state.results.concat(action.result)
                };
            case actionTypes.DELETE_ITEM:
                return {
                    ...state,
                    results: state.results.filter(item => item.title !== action.payload)
                };
            case actionTypes.CLEAR_RESULTS:
                return {
                    ...state,
                    results: state.results = []
                };
            case actionTypes.CHECKBOX_VALUE:
                if (action.payload) {
                    return {
                        ...state,
                        selectedCount: state.selectedCount + 1
                    };
                } else {
                    return {
                        ...state,
                        selectedCount: state.selectedCount - 1
                    }
                }
            case actionTypes.API_CHECKBOX_VALUE:
                if (action.payload.isCheckedBool) {
                    return {
                        ...state,
                        apiList: state.apiList.concat(action.payload.apiUrl)
                    };
                } else {
                    return {
                        ...state,
                        apiList: state.apiList.filter(url => url !== action.payload.apiUrl)
                    }
                }

            default:
                return state;
        }
    }
;

export default reducer;