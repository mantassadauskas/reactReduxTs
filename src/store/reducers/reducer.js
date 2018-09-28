(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../actions/actions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const actionTypes = require("../actions/actions");
    const initialState = {
        results: [],
        selectedCount: 0,
        apiList: []
    };
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.STORE_RESULT:
                return Object.assign({}, state, { results: state.results.concat(action.result) });
            case actionTypes.DELETE_ITEM:
                return Object.assign({}, state, { results: state.results.filter(item => item.title !== action.payload) });
            case actionTypes.CLEAR_RESULTS:
                return Object.assign({}, state, { results: state.results = [] });
            case actionTypes.CHECKBOX_VALUE:
                if (action.payload) {
                    return Object.assign({}, state, { selectedCount: state.selectedCount + 1 });
                }
                else {
                    return Object.assign({}, state, { selectedCount: state.selectedCount - 1 });
                }
            case actionTypes.API_CHECKBOX_VALUE:
                if (action.payload.isCheckedBool) {
                    return Object.assign({}, state, { apiList: state.apiList.concat(action.payload.apiUrl) });
                }
                else {
                    return Object.assign({}, state, { apiList: state.apiList.filter(url => url !== action.payload.apiUrl) });
                }
            default:
                return state;
        }
    };
    exports.default = reducer;
});
//# sourceMappingURL=reducer.js.map