(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STORE_RESULT = 'STORE_RESULT';
    exports.DELETE_ITEM = 'DELETE_ITEM';
    exports.CLEAR_RESULTS = 'CLEAR_RESULTS';
    exports.CHECKBOX_VALUE = 'CHECKBOX_VALUE';
    exports.API_CHECKBOX_VALUE = 'API_CHECKBOX_VALUE';
    exports.saveResult = (res) => {
        return {
            type: exports.STORE_RESULT,
            result: res
        };
    };
    exports.storeResult = (apiList) => {
        console.log(apiList);
        return dispatch => {
            apiList.forEach(api => {
                fetch(api)
                    .then(response => response.json())
                    .then(response => {
                    if (Array.isArray(response)) {
                        dispatch(exports.saveResult(response));
                        return;
                    }
                    dispatch(exports.saveResult(response.results));
                });
            });
        };
    };
});
//# sourceMappingURL=actions.js.map