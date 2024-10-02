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
exports.Slider = void 0;
var SliderPrimitive = require("@radix-ui/react-slider");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var Slider = react_1["default"].forwardRef(function (_a, ref) {
    var className = _a.className, min = _a.min, max = _a.max, step = _a.step, formatLabel = _a.formatLabel, value = _a.value, onValueChange = _a.onValueChange, props = __rest(_a, ["className", "min", "max", "step", "formatLabel", "value", "onValueChange"]);
    var initialValue = Array.isArray(value) ? value : [min, max];
    var _b = react_1.useState(initialValue), localValues = _b[0], setLocalValues = _b[1];
    var handleValueChange = function (newValues) {
        setLocalValues(newValues);
        if (onValueChange) {
            onValueChange(newValues);
        }
    };
    return (react_1["default"].createElement(SliderPrimitive.Root, __assign({ ref: ref, min: min, max: max, step: step, value: localValues, onValueChange: handleValueChange, className: utils_1.cn("relative mb-6 flex w-full touch-none select-none items-center", className) }, props),
        react_1["default"].createElement(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" },
            react_1["default"].createElement(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })),
        localValues.map(function (value, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
            react_1["default"].createElement("div", { className: "absolute text-center", style: {
                    left: "calc(" + ((value - min) / (max - min)) * 100 + "% + 0px)",
                    top: "10px"
                } },
                react_1["default"].createElement("span", { className: "text-sm" }, formatLabel ? formatLabel(value) : value)),
            react_1["default"].createElement(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" }))); })));
});
exports.Slider = Slider;
Slider.displayName = SliderPrimitive.Root.displayName;
