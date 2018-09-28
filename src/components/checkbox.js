(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react", "../store/actions/actions", "react-redux"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const react_1 = require("react");
    const actionTypes = require("../store/actions/actions");
    const react_redux_1 = require("react-redux");
    class CheckBox extends react_1.Component {
        constructor() {
            super(...arguments);
            this.state = {
                isChecked: false
            };
            this.handleCheck = (isCheckedBool) => {
                this.props.onCheck(isCheckedBool);
                this.setState({ isChecked: isCheckedBool });
            };
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("input", { type: 'checkbox', onChange: (event) => this.handleCheck(event.target.checked) }),
                React.createElement("label", null, this.props.title),
                React.createElement("button", { className: "btn btn-secondary m-1 btn-sm p-0", onClick: () => this.props.delete(this.state.isChecked) }, "Delete")));
        }
    }
    const mapStateToProps = state => ({
        apiList: state.reducer.apiList
    });
    const mapDispatchToProps = dispatch => {
        return {
            onDelete: (isChecked) => dispatch({
                type: actionTypes.DELETE_ITEM,
                payload: { isCheckedBool: isChecked }
            }),
            onCheck: (isChecked) => dispatch({
                type: actionTypes.CHECKBOX_VALUE,
                payload: isChecked
            })
        };
    };
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CheckBox);
});
//# sourceMappingURL=checkbox.js.map