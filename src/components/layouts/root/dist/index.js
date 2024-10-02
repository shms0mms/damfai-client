"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var footer_1 = require("./footer");
var header_1 = require("./header");
exports.Layout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "relative flex h-full flex-col" },
        React.createElement(header_1.Header, null),
        React.createElement("main", { className: "flex-[1_1_auto]" }, children),
        React.createElement(footer_1.Footer, null)));
};
