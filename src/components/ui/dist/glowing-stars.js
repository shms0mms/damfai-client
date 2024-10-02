"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Illustration = exports.GlowingStarsTitle = exports.GlowingStarsDescription = exports.GlowingStarsBackgroundCard = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
exports.GlowingStarsBackgroundCard = function (_a) {
    var className = _a.className, children = _a.children;
    var _b = react_1.useState(false), mouseEnter = _b[0], setMouseEnter = _b[1];
    return (react_1["default"].createElement("div", { onMouseEnter: function () {
            setMouseEnter(true);
        }, onMouseLeave: function () {
            setMouseEnter(false);
        }, className: utils_1.cn("bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600", className) },
        react_1["default"].createElement("div", { className: "flex justify-center items-center" },
            react_1["default"].createElement(exports.Illustration, { mouseEnter: mouseEnter })),
        react_1["default"].createElement("div", { className: "px-2 pb-6" }, children)));
};
exports.GlowingStarsDescription = function (_a) {
    var className = _a.className, children = _a.children;
    return (react_1["default"].createElement("p", { className: utils_1.cn("text-base text-white max-w-[16rem]", className) }, children));
};
exports.GlowingStarsTitle = function (_a) {
    var className = _a.className, children = _a.children;
    return (react_1["default"].createElement("h2", { className: utils_1.cn("font-bold text-2xl text-[#eaeaea]", className) }, children));
};
exports.Illustration = function (_a) {
    var mouseEnter = _a.mouseEnter;
    var stars = 108;
    var columns = 18;
    var _b = react_1.useState([]), glowingStars = _b[0], setGlowingStars = _b[1];
    var highlightedStars = react_1.useRef([]);
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            highlightedStars.current = Array.from({ length: 5 }, function () {
                return Math.floor(Math.random() * stars);
            });
            setGlowingStars(__spreadArrays(highlightedStars.current));
        }, 3000);
        return function () { return clearInterval(interval); };
    }, []);
    return (react_1["default"].createElement("div", { className: "h-48 p-1 w-full", style: {
            display: "grid",
            gridTemplateColumns: "repeat(" + columns + ", 1fr)",
            gap: "1px"
        } }, __spreadArrays(Array(stars)).map(function (_, starIdx) {
        var isGlowing = glowingStars.includes(starIdx);
        var delay = (starIdx % 10) * 0.1;
        var staticDelay = starIdx * 0.01;
        return (react_1["default"].createElement("div", { key: "matrix-col-" + starIdx + "}", className: "relative flex items-center justify-center" },
            react_1["default"].createElement(Star, { isGlowing: mouseEnter ? true : isGlowing, delay: mouseEnter ? staticDelay : delay }),
            mouseEnter && react_1["default"].createElement(Glow, { delay: staticDelay }),
            react_1["default"].createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, isGlowing && react_1["default"].createElement(Glow, { delay: delay }))));
    })));
};
var Star = function (_a) {
    var isGlowing = _a.isGlowing, delay = _a.delay;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { key: delay, initial: {
            scale: 1
        }, animate: {
            scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
            background: isGlowing ? "#fff" : "#666"
        }, transition: {
            duration: 2,
            ease: "easeInOut",
            delay: delay
        }, className: utils_1.cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20") }));
};
var Glow = function (_a) {
    var delay = _a.delay;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
            opacity: 0
        }, animate: {
            opacity: 1
        }, transition: {
            duration: 2,
            ease: "easeInOut",
            delay: delay
        }, exit: {
            opacity: 0
        }, className: "absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400" }));
};
