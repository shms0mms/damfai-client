"use client";
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
exports.__esModule = true;
exports.AnimatedListItem = exports.AnimatedList = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
exports.AnimatedList = react_1["default"].memo(function (_a) {
    var className = _a.className, children = _a.children, _b = _a.delay, delay = _b === void 0 ? 1000 : _b;
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var childrenArray = react_1["default"].Children.toArray(children);
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setIndex(function (prevIndex) { return (prevIndex + 1) % childrenArray.length; });
        }, delay);
        return function () { return clearInterval(interval); };
    }, [childrenArray.length, delay]);
    var itemsToShow = react_1.useMemo(function () { return childrenArray.slice(0, index + 1).reverse(); }, [index, childrenArray]);
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center gap-4 " + className },
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, itemsToShow.map(function (item) { return (react_1["default"].createElement(AnimatedListItem, { key: item.key }, item)); }))));
});
exports.AnimatedList.displayName = "AnimatedList";
function AnimatedListItem(_a) {
    var children = _a.children;
    var animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 }
    };
    return (react_1["default"].createElement(framer_motion_1.motion.div, __assign({}, animations, { layout: true, className: "mx-auto w-full" }), children));
}
exports.AnimatedListItem = AnimatedListItem;
