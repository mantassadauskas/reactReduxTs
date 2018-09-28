(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react", "react-redux", "../store/actions/actions", "./checkbox"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const react_1 = require("react");
    const react_redux_1 = require("react-redux");
    const actionTypes = require("../store/actions/actions");
    const checkbox_1 = require("./checkbox");
    class Results extends react_1.Component {
        handleDelete(title, isCheckedBool) {
            this.props.onDelete(title);
            if (isCheckedBool) {
                this.props.onCheck(false);
            }
        }
        render() {
            const searchItems = this.props.results.map(item => (React.createElement("div", { key: item.title },
                React.createElement(checkbox_1.default, { title: item.title, delete: (isCheckedBool) => this.handleDelete(item.title, isCheckedBool) }))));
            return (React.createElement("div", null,
                "RESULTS",
                searchItems));
        }
    }
    const mapStateToProps = state => ({
        results: state.reducer.results
    });
    const mapDispatchToProps = dispatch => {
        return {
            onDelete: (title) => dispatch({
                type: actionTypes.DELETE_ITEM,
                payload: title
            }),
            onCheck: (value) => dispatch({ type: actionTypes.CHECKBOX_VALUE, payload: value })
        };
    };
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Results);
});
//# sourceMappingURL=results.js.map