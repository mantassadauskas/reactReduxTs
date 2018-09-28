(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react", "./App.css", "./components/button", "./components/apiCheckbox", "./components/results", "./components/navbar"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const react_1 = require("react");
    require("./App.css");
    const button_1 = require("./components/button");
    const apiCheckbox_1 = require("./components/apiCheckbox");
    const results_1 = require("./components/results");
    const navbar_1 = require("./components/navbar");
    class App extends react_1.Component {
        render() {
            return (React.createElement("div", { className: "App" },
                React.createElement("div", { className: "container" },
                    React.createElement(navbar_1.default, null),
                    React.createElement(apiCheckbox_1.default, null),
                    React.createElement(button_1.default, null),
                    React.createElement(results_1.default, null))));
        }
    }
    exports.default = App;
});
//# sourceMappingURL=App.js.map