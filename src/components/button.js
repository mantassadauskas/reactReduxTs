(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react", "react-redux", "../store/actions/actions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const react_1 = require("react");
    const react_redux_1 = require("react-redux");
    const actionTypes = require("../store/actions/actions");
    class Button extends react_1.Component {
        handleClick() {
            this.props.onClearResults();
            this.props.onStoreResult(this.props.apiList);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("button", { className: "btn btn-primary m-2", onClick: () => this.handleClick() }, "Submit")));
        }
    }
    const mapStateToProps = state => ({
        apiList: state.reducer.apiList
    });
    const mapDispatchToProps = dispatch => {
        return {
            onClearResults: () => dispatch({ type: actionTypes.CLEAR_RESULTS }),
            onStoreResult: (apiList) => dispatch(actionTypes.storeResult(apiList))
        };
    };
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Button);
});
//# sourceMappingURL=button.js.map