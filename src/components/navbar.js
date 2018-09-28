(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react", "react-redux"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const react_1 = require("react");
    const react_redux_1 = require("react-redux");
    class Navbar extends react_1.Component {
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "d-block m-5" },
                    "Selected Count: ",
                    this.props.selectedCount)));
        }
    }
    const mapStateToProps = state => ({
        selectedCount: state.reducer.selectedCount
    });
    exports.default = react_redux_1.connect(mapStateToProps, null)(Navbar);
});
//# sourceMappingURL=navbar.js.map