"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var input_1 = require("./input");
var label_1 = require("./label");
function Field(_a) {
    var name = _a.name, register = _a.register, error = _a.error, label = _a.label, placeholder = _a.placeholder, inputProps = __rest(_a, ["name", "register", "error", "label", "placeholder"]);
    return (React.createElement("div", { className: "grid w-full max-w-sm items-center gap-1.5" },
        !!label && React.createElement(label_1.Label, { htmlFor: name }, label),
        React.createElement(input_1.Input, __assign({ placeholder: placeholder }, inputProps))));
}
exports["default"] = Field;
