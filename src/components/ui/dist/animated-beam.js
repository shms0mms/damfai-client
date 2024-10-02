"use client";
"use strict";
exports.__esModule = true;
exports.AnimatedBeam = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
exports.AnimatedBeam = function (_a) {
    var className = _a.className, containerRef = _a.containerRef, fromRef = _a.fromRef, toRef = _a.toRef, _b = _a.curvature, curvature = _b === void 0 ? 0 : _b, _c = _a.reverse, reverse = _c === void 0 ? false : _c, // Include the reverse prop
    _d = _a.duration, // Include the reverse prop
    duration = _d === void 0 ? Math.random() * 3 + 4 : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, _f = _a.pathColor, pathColor = _f === void 0 ? "gray" : _f, _g = _a.pathWidth, pathWidth = _g === void 0 ? 2 : _g, _h = _a.pathOpacity, pathOpacity = _h === void 0 ? 0.2 : _h, _j = _a.gradientStartColor, gradientStartColor = _j === void 0 ? "#ffaa40" : _j, _k = _a.gradientStopColor, gradientStopColor = _k === void 0 ? "#9c40ff" : _k, _l = _a.startXOffset, startXOffset = _l === void 0 ? 0 : _l, _m = _a.startYOffset, startYOffset = _m === void 0 ? 0 : _m, _o = _a.endXOffset, endXOffset = _o === void 0 ? 0 : _o, _p = _a.endYOffset, endYOffset = _p === void 0 ? 0 : _p;
    var id = react_1.useId();
    var _q = react_1.useState(""), pathD = _q[0], setPathD = _q[1];
    var _r = react_1.useState({ width: 0, height: 0 }), svgDimensions = _r[0], setSvgDimensions = _r[1];
    // Calculate the gradient coordinates based on the reverse prop
    var gradientCoordinates = reverse
        ? {
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"]
        }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"]
        };
    react_1.useEffect(function () {
        var updatePath = function () {
            if (containerRef.current && fromRef.current && toRef.current) {
                var containerRect = containerRef.current.getBoundingClientRect();
                var rectA = fromRef.current.getBoundingClientRect();
                var rectB = toRef.current.getBoundingClientRect();
                var svgWidth = containerRect.width;
                var svgHeight = containerRect.height;
                setSvgDimensions({ width: svgWidth, height: svgHeight });
                var startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
                var startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
                var endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
                var endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
                var controlY = startY - curvature;
                var d = "M " + startX + "," + startY + " Q " + (startX + endX) / 2 + "," + controlY + " " + endX + "," + endY;
                setPathD(d);
            }
        };
        // Initialize ResizeObserver
        var resizeObserver = new ResizeObserver(function (entries) {
            // For all entries, recalculate the path
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                updatePath();
            }
        });
        // Observe the container element
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        // Call the updatePath initially to set the initial path
        updatePath();
        // Clean up the observer on component unmount
        return function () {
            resizeObserver.disconnect();
        };
    }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
    ]);
    return (React.createElement("svg", { fill: "none", width: svgDimensions.width, height: svgDimensions.height, xmlns: "http://www.w3.org/2000/svg", className: utils_1.cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className), viewBox: "0 0 " + svgDimensions.width + " " + svgDimensions.height },
        React.createElement("path", { d: pathD, stroke: pathColor, strokeWidth: pathWidth, strokeOpacity: pathOpacity, strokeLinecap: "round" }),
        React.createElement("path", { d: pathD, strokeWidth: pathWidth, stroke: "url(#" + id + ")", strokeOpacity: "1", strokeLinecap: "round" }),
        React.createElement("defs", null,
            React.createElement(framer_motion_1.motion.linearGradient, { className: "transform-gpu", id: id, gradientUnits: "userSpaceOnUse", initial: {
                    x1: "0%",
                    x2: "0%",
                    y1: "0%",
                    y2: "0%"
                }, animate: {
                    x1: gradientCoordinates.x1,
                    x2: gradientCoordinates.x2,
                    y1: gradientCoordinates.y1,
                    y2: gradientCoordinates.y2
                }, transition: {
                    delay: delay,
                    duration: duration,
                    ease: [0.16, 1, 0.3, 1],
                    repeat: Infinity,
                    repeatDelay: 0
                } },
                React.createElement("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
                React.createElement("stop", { stopColor: gradientStartColor }),
                React.createElement("stop", { offset: "32.5%", stopColor: gradientStopColor }),
                React.createElement("stop", { offset: "100%", stopColor: gradientStopColor, stopOpacity: "0" })))));
};
