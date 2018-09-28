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
    class ApiCheckBox extends react_1.Component {
        constructor() {
            super(...arguments);
            this.checkboxes = [
                { name: 'swapi', url: 'https://swapi.co/api/films/' },
                { name: 'jsonplaceholder', url: 'https://jsonplaceholder.typicode.com/todos/' }
            ];
        }
        render() {
            return (React.createElement("div", null, this.checkboxes.map(c => (React.createElement("div", { key: c.url },
                React.createElement("input", { type: 'checkbox', onChange: (event) => this.props.onCheckApi(event.target.checked, c.url) }),
                React.createElement("label", null,
                    " Api ",
                    React.createElement("span", { style: { fontWeight: 600 } }, c.name),
                    " call"))))));
        }
    }
    const mapStateToProps = state => ({
        apiList: state.reducer.apiList
    });
    const mapDispatchToProps = dispatch => {
        return {
            onCheckApi: (isChecked, url) => dispatch({ type: actionTypes.API_CHECKBOX_VALUE, payload: { isCheckedBool: isChecked, apiUrl: url }
            })
        };
    };
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ApiCheckBox);
});
//# sourceMappingURL=apiCheckbox.js.map