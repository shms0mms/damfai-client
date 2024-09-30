"use client";
"use strict";
exports.__esModule = true;
exports.Beam = exports.GridBeam = void 0;
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
exports.GridBeam = function (_a) {
    var children = _a.children, beamClassName = _a.beamClassName, className = _a.className;
    return (React.createElement("div", { className: utils_1.cn("relative h-full w-full", className) },
        React.createElement(exports.Beam, { className: beamClassName }),
        children));
};
exports.Beam = function (_a) {
    var className = _a.className;
    return (React.createElement("svg", { width: "156", height: "63", viewBox: "0 0 156 63", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: utils_1.cn("absolute left-0 top-0 ml-24 mt-8", className) },
        React.createElement("path", { d: "M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31", stroke: "url(#grad1)", strokeWidth: 1.5 }),
        React.createElement("defs", null,
            React.createElement(framer_motion_1.motion.linearGradient, { variants: {
                    initial: {
                        x1: "40%",
                        x2: "50%",
                        y1: "160%",
                        y2: "180%"
                    },
                    animate: {
                        x1: "0%",
                        x2: "10%",
                        y1: "-40%",
                        y2: "-20%"
                    }
                }, animate: "animate", initial: "initial", transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    repeatDelay: 2
                }, id: "grad1" },
                React.createElement("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
                React.createElement("stop", { stopColor: "#18CCFC" }),
                React.createElement("stop", { offset: "0.325", stopColor: "#6344F5" }),
                React.createElement("stop", { offset: "1", stopColor: "#AE48FF", stopOpacity: "0" })))));
};
