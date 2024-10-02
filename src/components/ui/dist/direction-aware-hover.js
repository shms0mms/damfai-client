"use client";
"use strict";
exports.__esModule = true;
exports.DirectionAwareHover = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
exports.DirectionAwareHover = function (_a) {
    var imageUrl = _a.imageUrl, children = _a.children, childrenClassName = _a.childrenClassName, imageClassName = _a.imageClassName, className = _a.className;
    var ref = react_1.useRef(null);
    var _b = react_1.useState("left"), direction = _b[0], setDirection = _b[1];
    var handleMouseEnter = function (event) {
        if (!ref.current)
            return;
        var direction = getDirection(event, ref.current);
        switch (direction) {
            case 0:
                setDirection("top");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("bottom");
                break;
            case 3:
                setDirection("left");
                break;
            default:
                setDirection("left");
                break;
        }
    };
    var getDirection = function (ev, obj) {
        var _a = obj.getBoundingClientRect(), w = _a.width, h = _a.height, left = _a.left, top = _a.top;
        var x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        var y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };
    return (React.createElement(framer_motion_1.motion.div, { onMouseEnter: handleMouseEnter, ref: ref, className: utils_1.cn("group/card relative h-60 w-60 overflow-hidden rounded-lg bg-transparent md:h-96 md:w-96", className) },
        React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
            React.createElement(framer_motion_1.motion.div, { className: "relative h-full w-full", initial: "initial", whileHover: direction, exit: "exit" },
                React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block" }),
                React.createElement(framer_motion_1.motion.div, { variants: variants, className: "relative h-full w-full bg-gray-50 dark:bg-black", transition: {
                        duration: 0.2,
                        ease: "easeOut"
                    } },
                    React.createElement("img", { alt: "image", className: utils_1.cn("h-full w-full scale-[1.15] object-cover", imageClassName), width: "1000", height: "1000", src: imageUrl })),
                React.createElement(framer_motion_1.motion.div, { variants: textVariants, transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }, className: utils_1.cn("absolute bottom-4 left-4 z-40 text-white", childrenClassName) }, children)))));
};
var variants = {
    initial: {
        x: 0
    },
    exit: {
        x: 0,
        y: 0
    },
    top: {
        y: 30
    },
    bottom: {
        y: -30
    },
    left: {
        x: 30
    },
    right: {
        x: -30
    }
};
var textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0
    },
    top: {
        y: -20,
        opacity: 1
    },
    bottom: {
        y: 2,
        opacity: 1
    },
    left: {
        x: -2,
        opacity: 1
    },
    right: {
        x: 20,
        opacity: 1
    }
};
